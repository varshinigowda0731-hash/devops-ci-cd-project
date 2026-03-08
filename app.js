const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;
const VERSION = "1.1.0";

app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Root route
app.get("/", (req, res) => {
  res.send("Devops CI Verified 🚀");
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

app.get("/info", (req, res) => {
  res.json({
    service: "Varshini DevOps Project",
    deployed_on: "Render",
    ci: "GitHub Actions",
    runtime: process.version
  });
});

let requestCount = 0;

app.use((req, res, next) => {
  requestCount++;
  next();
});

app.get("/requests", (req, res) => {
  res.json({
    total_requests: requestCount
  });
});

app.get("/dashboard", (req, res) => {
  res.json({
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    platform: process.platform,
    node: process.version
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


