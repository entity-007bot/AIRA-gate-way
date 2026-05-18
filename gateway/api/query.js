import { pool } from "../lib/neon.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const { text } = req.body;

  try {
    const result = await pool.query(
      "INSERT INTO memory_logs (content) VALUES ($1) RETURNING *",
      [text]
    );

    res.status(200).json({
      status: "success",
      saved: result.rows[0]
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
}
