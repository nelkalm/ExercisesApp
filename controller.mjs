import "dotenv/config";
import express from "express";
import * as exercises from "./model.mjs";

const PORT = process.env.PORT;
const app = express();
app.use(express.json());

app.post("/exercises", (req, res) => {
  res.send("Create using POST /exercises");
});

app.get("/exercises", (req, res) => {
  res.send("Read using GET /exercises");
});

app.get("/exercises/:id", (req, res) => {
  res.send("GET using GET /exercises/:id");
});

app.put("/exercises/:id", (req, res) => {
  res.send("PUT using GET /exercises/:id");
});

app.delete("/exercises/:id", (req, res) => {
  res.send("DELETE using GET /exercises/:id");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
