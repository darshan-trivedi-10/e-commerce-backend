import express from "express";
import bodyParser from "body-parser";
import cors from "cors"
import connect from "./src/config/database.js";

import apiRoutes from './src/router/index.js'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


app.use("/api", apiRoutes);
await connect();

app.listen(5000, async () => {
  console.log("Server Started : )");
});

app.get("/", (req, res) => {
  res.send("Hello");
});
