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
    uptime: process.uptime(),
    platform: process.platform,
    node_version: process.version,
    cpu_count: require("os").cpus().length,
    memory: {
      rss: memory.rss,
      heapUsed: memory.heapUsed,
      heapTotal: memory.heapTotal
    }
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

  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>

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

  canvas{
    background:white;
    border-radius:10px;
    margin-top:30px;
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
      <h3>CPU Cores</h3>
      <p id="cpu">Loading...</p>
    </div>

  </div>

  <h2>Memory Usage</h2>
  <canvas id="memoryChart" width="600" height="300"></canvas>

<script>

let chart;

async function updateDashboard(){

  const res = await fetch('/metrics');
  const data = await res.json();

  document.getElementById("uptime").innerText =
      data.uptime.toFixed(2) + " seconds";

  document.getElementById("platform").innerText =
      data.platform;

  document.getElementById("node").innerText =
      data.node_version;

  document.getElementById("cpu").innerText =
      data.cpu_count;

  const heap = data.memory.heapUsed / 1024 / 1024;
  const rss = data.memory.rss / 1024 / 1024;

  if(!chart){

    const ctx = document.getElementById('memoryChart');

    chart = new Chart(ctx,{
      type:'line',
      data:{
        labels:[],
        datasets:[{
          label:'Heap Used (MB)',
          data:[],
          borderColor:'red'
        },{
          label:'RSS Memory (MB)',
          data:[],
          borderColor:'blue'
        }]
      }
    });

  }

  const time = new Date().toLocaleTimeString();

  chart.data.labels.push(time);
  chart.data.datasets[0].data.push(heap);
  chart.data.datasets[1].data.push(rss);

  chart.update();

  if(heap > 100){
    alert("⚠️ High Memory Usage Detected!");
  }

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



