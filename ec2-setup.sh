#!/bin/bash

echo "Updating system packages..."
sudo apt update && sudo apt install -y docker.io

echo "Starting and enabling Docker service..."
sudo systemctl start docker && sudo systemctl enable docker

echo "Adding current user to docker group..."
# Note: You may need to log out and back in for this to take effect, or use 'newgrp docker'
sudo usermod -aG docker ubuntu && newgrp docker <<EONG
echo "Pulling latest Docker image from Docker Hub..."
docker pull <DOCKERHUB_USERNAME>/my-cicd-app:latest

echo "Running the application container on port 3000..."
docker run -d --name my-app -p 3000:3000 --restart always <DOCKERHUB_USERNAME>/my-cicd-app:latest

echo "Starting Watchtower for automatic image updates..."
# Watchtower will check for new images every 30 seconds
docker run -d --name watchtower --restart always \
  -v /var/run/docker.sock:/var/run/docker.sock \
  containrrr/watchtower --interval 30 my-app

echo "Displaying running containers..."
docker ps
EONG
