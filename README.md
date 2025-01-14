# React Vite Application CI/CD Pipeline with Docker, Jenkins, and Kubernetes

This README outlines the setup and usage of a complete CI/CD pipeline for a React Vite application, leveraging Docker, Jenkins, and Kubernetes.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technologies Used](#technologies-used)
3. [Setup Instructions](#setup-instructions)
   - [Docker](#docker)
   - [Jenkins](#jenkins)
   - [Kubernetes](#kubernetes)


---

## Project Overview

This project demonstrates a fully automated CI/CD pipeline for deploying a React Vite application. It includes building and scanning Docker images, deploying to Kubernetes, and ensuring an efficient development-to-production workflow.

---

## Technologies Used

- **React Vite**: Frontend framework for a fast and modern development experience.
- **Docker**: Containerization of the application.
- **Jenkins**: CI/CD tool for automating the pipeline.
- **Kubernetes**: Orchestrates the deployment and scaling of containerized applications.
- **Trivy**: Security scanning for Docker images.

---

## Setup Instructions

### Docker

1. Create a `Dockerfile` to containerize the React Vite application.
2. Use a `docker-compose.yml` file to manage the service configuration for local development.

### Jenkins

1. Configure Jenkins to access your GitHub repository using SSH credentials.
2. Define a pipeline script in Jenkins for:
   - Cloning the repository.
   - Detecting changes in the project.
   - Building and pushing Docker images.
   - Scanning the Docker images with Trivy.
3. Ensure Jenkins has the necessary credentials for Docker Hub and GitHub.

### Kubernetes

1. Use a `ConfigMap` to manage environment-specific variables.
2. Deploy the application using a `Deployment` YAML file.
3. Expose the service using a `Service` YAML file with a `NodePort` configuration.

---

## Pipeline Flow

1. **Clone Repository**: Jenkins fetches the latest code from the GitHub repository.
2. **Change Detection**: The pipeline checks if any changes are made to specific directories (e.g., `client`).
3. **Docker Build and Push**: Jenkins builds the Docker image for the client and pushes it to Docker Hub.


## Future Enhancements

- Integrate automated testing in the pipeline.
- Implement a Helm chart for Kubernetes deployments.
- Set up a monitoring solution (e.g., Prometheus and Grafana).

---

For any queries, feel free to contact the project maintainer.

Happy Coding!
