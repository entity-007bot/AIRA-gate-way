import { config } from "../lib/config.js";

export default function handler(req, res) {
  res.status(200).json({
    status: "success",
    message: "ARIA GATEWAY RUNNING OK",
    gateway: config.gatewayName,
    time: new Date().toISOString()
  });
}
