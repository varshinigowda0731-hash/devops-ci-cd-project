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
  const memory = process.memoryUsage();

  res.json({
    memory_usage: {
      rss: memory.rss,
      heapUsed: memory.heapUsed,
      heapTotal: memory.heapTotal
    },
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
    <title>DevOps Monitoring Dashboard</title>
    <style>
      body{
        font-family: Arial;
        background:#0f172a;
        color:white;
        text-align:center;
        padding:40px;
      }
      .container{
        display:flex;
        flex-wrap:wrap;
        justify-content:center;
      }
      .card{
        background:#1e293b;
        padding:20px;
        margin:15px;
        border-radius:10px;
        width:220px;
      }
      h1{
        color:#38bdf8;
      }
    </style>
  </head>

  <body>

  <h1>🚀 DevOps Monitoring Dashboard</h1>

  <div class="container">
    <div class="card">
      <h3>Uptime</h3>
      <p id="uptime">Loading...</p>
    </div>

    <div class="card">
      <h3>Platform</h3>
      <p id="platform">Loading...</p>
    </div>

    <div class="card">
      <h3>Node Version</h3>
      <p id="node">Loading...</p>
    </div>

    <div class="card">
      <h3>Total Requests</h3>
      <p id="requests">Loading...</p>
    </div>
  </div>

<script>

async function updateDashboard(){
  const metrics = await fetch('/metrics');
  const data = await metrics.json();

  const requests = await fetch('/requests');
  const rdata = await requests.json();

  document.getElementById("uptime").innerText =
      data.uptime.toFixed(2) + " seconds";

  document.getElementById("platform").innerText =
      data.platform;

  document.getElementById("node").innerText =
      data.node_version;

  document.getElementById("requests").innerText =
      rdata.total_requests;
}

updateDashboard();
setInterval(updateDashboard,3000);

</script>

  </body>
  </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


