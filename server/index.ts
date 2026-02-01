// server/index.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

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

// For local development
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running locally at http://localhost:${PORT}`);
  });
}

// Export the app for Vercel
export default app;
