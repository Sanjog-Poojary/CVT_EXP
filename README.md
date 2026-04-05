# CA2 - Containerized Web Application with CI/CD Pipeline

This project is a complete DevOps assignment demonstrating a containerized Node.js application deployed via a CI/CD pipeline using GitHub Actions, Docker Hub, and Watchtower for automated updates on AWS EC2.

## Project Structure

- `index.js`: Node.js Express application with a styled HTML page.
- `Dockerfile`: Container configuration for the application.
- `.github/workflows/deploy.yml`: CI/CD pipeline configuration.
- `ec2-setup.sh`: Script to configure the AWS EC2 instance.
- `run-app.bat`: Batch script for local Windows execution.

## Features

- **Automated CI/CD**: Pushing to the `main` branch triggers a Docker build and push to Docker Hub.
- **Self-Updating**: Watchtower runs on the EC2 instance to automatically pull and restart the container when a new image is pushed.
- **Health Monitoring**: Includes a `/health` endpoint for status checks.
- **Styled UI**: Modern dark-themed landing page.

## Local Development

### Prerequisites
- Node.js (v18+)
- Docker (optional, for container testing)

### Running Locally (Windows)
Simply run the provided batch file:
```cmd
run-app.bat
```

### Running with Docker
```bash
docker build -t my-cicd-app .
docker run -p 3000:3000 my-cicd-app
```

## Deployment Info

- **Platform**: AWS EC2 (Ubuntu)
- **CI/CD**: GitHub Actions
- **Registry**: Docker Hub
- **Auto-Update**: Watchtower (30s interval)

---
*Created for CA2 DevOps Assignment.*
