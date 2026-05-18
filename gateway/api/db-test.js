import { pool } from "../lib/neon.js";

export default async function handler(req, res) {
  try {
    const result = await pool.query("SELECT NOW() as time");

    res.status(200).json({
      status: "success",
      db_connected: true,
      time: result.rows[0].time
    });

  } catch (err) {
    res.status(500).json({
      status: "error",
      message: err.message
    });
  }
}
