import express from "express";
import news from "./news";

const app = express();
const PORT = process.env.PORT || 3030;

app.get("/", (req, res) => {
  res.json(news);
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
