const VERSION = "1.1.0";
const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;
const VERSION = "1.0.0"; // you can update this on each release
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});
// Root route
app.get("/", (req, res) => {
  res.send("CI test successful - Varshini's DevOps Project 🚀");
});

// Status route
app.get("/status", (req, res) => {
  res.send("Server status: Running successfully 🚀");
});

// Health route
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    service: "Varshini DevOps Project",
    time: new Date(),
    uptime: process.uptime()
  });
});

// Version route
app.get("/version", (req, res) => {
  res.json({
    version: VERSION,
    deployed_at: new Date(),
    service: "Varshini DevOps Project"
  });
});

// Metrics route
app.get("/metrics", (req, res) => {
  res.json({
    memory_usage: process.memoryUsage(),
    uptime: process.uptime(),
    platform: process.platform,
    node_version: process.version
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


