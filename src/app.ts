import express from "express";
import * as path from "path";

export const app = express();

app.use(express.json());

const distDir = path.resolve(__dirname, "..", "dist");

app.use(express.static(distDir));

app.all("*", (req: express.Request, res: express.Response) => {
  res.sendFile(path.resolve(distDir, "view.html"));
});
