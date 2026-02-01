// server/index.ts
import express from "express";
import serverless from "serverless-http";
import path from "path";
import { fileURLToPath } from "url";

// Helpers for __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Serve static files from Vite build output
const staticPath = path.resolve(__dirname, "../dist");
app.use(express.static(staticPath));

// All other routes go to index.html (SPA routing)
app.get("*", (_req, res) => {
  res.sendFile(path.join(staticPath, "index.html"));
});

// Export handler for Vercel serverless
export const handler = serverless(app);
