🚀 ## Production-Ready DevOps CI/CD Pipeline 
    Docker, Cloud Hosting & Real-Time Monitoring

"CI" (https://img.shields.io/badge/CI-GitHub%20Actions-blue)
"Docker" (https://img.shields.io/badge/Container-Docker-blue)
"Cloud" (https://img.shields.io/badge/Cloud-Render-purple)
"Node" (https://img.shields.io/badge/Backend-Node.js-green)
"License" (https://img.shields.io/badge/License-MIT-yellow)

---

📌 Project Overview

This project demonstrates a production-style DevOps workflow that automates building, containerizing, deploying, and monitoring a cloud application.

The system integrates Continuous Integration, Containerization, Cloud Hosting, and Monitoring.

Whenever code is pushed to the repository, the system automatically:

- Runs the CI pipeline
- Builds the application
- Creates a Docker container
- Pushes the container image
- Deploys the application to the cloud
- Provides a real-time monitoring dashboard

---

☁️ Cloud Hosting

The application is deployed on the cloud using Render.

Cloud hosting allows the application to run on remote servers and be accessible from anywhere through the internet.

Cloud deployment benefits include:

- Global accessibility
- Scalable infrastructure
- High availability
- Automated deployments

Cloud platform used:

- Render (Cloud Hosting)

---

🏗 DevOps Architecture

Developer
   │
   │ Git Push
   ▼
GitHub Repository
   │
   │ Trigger CI Pipeline
   ▼
GitHub Actions
   │
   │ Build & Test
   ▼
Docker Container
   │
   │ Push Image
   ▼
Docker Hub
   │
   │ Deploy
   ▼
Render Cloud Hosting
   │
   ▼
Node.js Application Server
   │
   ▼
Monitoring Dashboard

---

⚙️ Technology Stack

Category| Technology
Backend| Node.js, Express.js
Version Control| Git
Repository| GitHub
CI/CD Pipeline| GitHub Actions
Containerization| Docker
Container Registry| Docker Hub
Cloud Hosting| Render
Monitoring UI| Chart.js

---

🔄 DevOps Workflow

Write Code
   ↓
Git Version Control
   ↓
Push to GitHub
   ↓
CI Pipeline Runs
   ↓
Docker Container Built
   ↓
Image Stored in Docker Hub
   ↓
Application Deployed to Render Cloud
   ↓
Monitoring Dashboard Displays System Metrics

---

📊 Monitoring APIs

The project includes several monitoring endpoints.

Endpoint| Description
/status| Server status
/health| Health check
/metrics| System metrics (CPU, memory, uptime)
/requests| Request counter
/request-stats| Request traffic history
/dashboard| Monitoring dashboard
/version| Deployment version

---

📈 Monitoring Dashboard

The dashboard provides real-time observability including:

- Server uptime
- CPU cores
- Node.js runtime version
- Memory usage graph
- Request traffic graph
- System platform

This simulates a DevOps monitoring system used in production environments.

---

🌐 Live Application

https://devops-ci-cd-project-6.onrender.com

Monitoring Dashboard

https://devops-ci-cd-project-6.onrender.com/dashboard

---

⭐ DevOps Features

- Automated CI/CD pipeline
- Docker container deployment
- Cloud hosting deployment
- Real-time monitoring dashboard
- System metrics and observability
- Request traffic monitoring
- Deployment version tracking

---

👩‍💻 Author

Varshini Gowda
BCA Student – DevOps Enthusiast 🚀

---

📚 Purpose of the Project

This project demonstrates how modern DevOps systems automate software delivery using:

- Continuous Integration
- Continuous Deployment
- Containerization
- Cloud Infrastructure
- Monitoring & Observability
