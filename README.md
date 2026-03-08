🚀 Production-Ready DevOps CI/CD Pipeline with Docker Deployment and Real-Time Monitoring

This project demonstrates a production-style DevOps workflow that includes CI/CD automation, containerization, cloud deployment, and real-time system monitoring.

---

📌 Project Overview

The goal of this project is to simulate a real DevOps pipeline used in modern software systems.
It automatically builds, tests, packages, deploys, and monitors a Node.js application.

When code is pushed to the repository, the CI/CD pipeline automatically:

- Builds the application
- Runs tests
- Creates a Docker container
- Pushes the container image
- Deploys the application to the cloud

The system also provides a real-time monitoring dashboard showing server metrics.

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
   │ Build & Test Application
   ▼
Docker Image Build
   │
   │ Push Image
   ▼
Docker Hub Registry
   │
   │ Deploy
   ▼
Render Cloud Server
   │
   ▼
Node.js Application
   │
   ▼
Monitoring Dashboard

---

⚙️ Technologies Used

- Node.js
- Express.js
- Git
- GitHub
- GitHub Actions (CI/CD)
- Docker
- Docker Hub
- Render Cloud Platform
- Chart.js (Monitoring Dashboard)

---

🔄 DevOps Workflow

Code Development
      ↓
Git Version Control
      ↓
Push to GitHub Repository
      ↓
GitHub Actions CI Pipeline
      ↓
Build Docker Container
      ↓
Push Image to Docker Hub
      ↓
Deploy Application on Render
      ↓
Monitoring Dashboard Displays Metrics

---

📊 Monitoring Features

The application includes several monitoring endpoints.

Endpoint| Description
"/status"| Server status
"/health"| Health check
"/metrics"| System metrics (CPU, memory, uptime)
"/requests"| Total request counter
"/request-stats"| Request traffic history
"/dashboard"| Real-time monitoring dashboard
"/version"| Deployment version information

---

📈 Dashboard Features

The monitoring dashboard displays:

- Server uptime
- CPU core count
- Node.js version
- Memory usage graph
- Request traffic graph
- System platform

---

🌐 Live Application

https://devops-ci-cd-project-6.onrender.com

---

👩‍💻 Author

Varshini Gowda
BCA Student – DevOps Enthusiast

---

⭐ Project Purpose

This project demonstrates how modern DevOps systems automate:

- Continuous Integration
- Continuous Deployment
- Containerized applications
- Cloud infrastructure
- Monitoring and observability
