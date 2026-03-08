const express = require("express");
const app = express();

const PORT = process.env.PORT || 10000;
const VERSION = "1.1.0";

let requestCount = 0;

// Logging + request counter middleware
app.use((req, res, next) => {
  requestCount++;
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
  next();
});

// Root route
app.get("/", (req, res) => {
  res.send("DevOps CI Verified 🚀");
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

// Info route
app.get("/info", (req, res) => {
  res.json({
    service: "Varshini DevOps Project",
    deployed_on: "Render",
    ci: "GitHub Actions",
    runtime: process.version
  });
});

// Request counter route
app.get("/requests", (req, res) => {
  res.json({
    total_requests: requestCount
  });
});

// Dashboard route
app.get("/dashboard", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>DevOps Dashboard</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            background: #0f172a;
            color: white;
            text-align: center;
            padding: 40px;
          }
          .card {
            background: #1e293b;
            padding: 20px;
            margin: 15px;
            border-radius: 10px;
            display: inline-block;
            width: 250px;
          }
          h1 {
            color: #38bdf8;
          }
        </style>
      </head>
      <body>
        <h1>🚀 DevOps Monitoring Dashboard</h1>

        <div class="card">
          <h2>Uptime</h2>
          <p>${process.uptime().toFixed(2)} seconds</p>
        </div>

        <div class="card">
          <h2>Platform</h2>
          <p>${process.platform}</p>
        </div>

        <div class="card">
          <h2>Node Version</h2>
          <p>${process.version}</p>
        </div>

        <div class="card">
          <h2>Total Requests</h2>
          <p>${requestCount}</p>
        </div>

      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

