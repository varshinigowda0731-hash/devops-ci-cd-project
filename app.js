const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("CI test successful - varshini's devops project 🚀");
});

app.get("/status", (req, res) => {
  res.send("Server status: Running successfully 🚀");
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    service: "Varshini DevOps Project",
    time: new Date(),
    uptime: process.uptime()
  });
});

app.listen(10000, () => {
  console.log("Server running on port 10000");
});
