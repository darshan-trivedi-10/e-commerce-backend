import express from "express";
import bodyParser from "body-parser";
import connect from "./src/config/database.js";

import apiRoutes from './src/router/index.js'

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use("/api", apiRoutes);
await connect();

app.listen(5000, async () => {
  console.log("Server Started : )");
});

app.get("/", (req, res) => {
  res.send("Hello");
});
