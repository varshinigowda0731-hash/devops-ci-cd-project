## DevOps Architecture

Developer pushes code to GitHub.

GitHub Actions automatically triggers the CI pipeline.

The pipeline builds the application and containerizes it using Docker.

The application is deployed to Render cloud hosting.

Users can access the live application through the public URL.

Architecture Flow:

Developer
   ↓
Git Push
   ↓
GitHub Repository
   ↓
GitHub Actions (CI)
   ↓
Docker Build
   ↓
Render Deployment
   ↓
Live Application
# DevOps CI/CD Project 🚀

![DevOps CI Pipeline](https://github.com/varshinigowda0731-hash/devops-ci-cd-project/actions/workflows/ci.yml/badge.svg)# DevOps CI/CD Project 🚀

![DevOps CI Pipeline](https://github.com/varshinigowda0731-hash/devops-ci-cd-project/actions/workflows/ci.yml/badge.svg)

This project demonstrates a complete DevOps pipeline using modern tools.

## Technologies Used
- Node.js
- Express.js
- Docker
- GitHub Actions
- Render

## CI/CD Pipeline

Code Push
↓
GitHub Repository
↓
GitHub Actions (CI Pipeline)
↓
Build Application
↓
Deploy to Render
↓
Live Application

## API Endpoints

/        → Main page  
/status  → Server status  
/health  → Health monitoring  
/version → Deployment version  
/metrics → System metrics  

## Live Application

https://devops-ci-cd-project-6.onrender.com

## Author

Varshini Gowda  
BCA Student – DevOps Enthusiast 🚀
