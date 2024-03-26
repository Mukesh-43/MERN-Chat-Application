const express = require("express");
const chats = require("./data/data");
const dotenv = require("dotenv");
const db = require("./config/mongoose");
const app = express();
const userRoutes = require("./routes/userRoutes");

dotenv.config();

app.get("/", (req, res) => {
  res.send("Api is running");
});

app.use("/api/user", userRoutes);

const port = process.env.PORT;

app.listen(port, function () {
  console.log(`Server is running on the port: ${port}`);
});
