import type { VercelRequest, VercelResponse } from "@vercel/web";
import app from "../server/index";

export default function handler(req: VercelRequest, res: VercelResponse) {
  // Remove trailing slash for consistency
  if (req.url !== "/" && req.url.endsWith("/")) {
    return res.redirect(301, req.url.slice(0, -1));
  }

  // Call the Express app
  return app(req, res);
}
