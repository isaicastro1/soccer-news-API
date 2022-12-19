import express from "express";
import cors from "cors";
import { news } from "./news.js";

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.json(news);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
