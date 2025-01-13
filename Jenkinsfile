pipeline {
    agent any

    triggers {
        // Polling sur le dépôt Git pour détecter les changements
        pollSCM('H/5 * * * *')  // Vérifie les changements toutes les 5 minutes
    }

    environment {
        // Définir les variables d'environnement
        GIT_REPO_URL = 'git@github.com:ArijHammouda/reactTemplate.git' 
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        IMAGE_NAME_CLIENT = 'arijzhd/react-vite-dev'  // Remplacez "username" par votre utilisateur Docker Hub
    }

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'GitHub_ssh', url: "${GIT_REPO_URL}"  // Cloner le dépôt avec l'authentification SSH
            }
        }

        stage('Build Client Image') {
            steps {
                script {
                    // Construction de l'image Docker pour le client (React)
                    dockerImageClient = docker.build("${IMAGE_NAME_CLIENT}")
                }
            }
        }

        stage('Scan Client Image') {
            steps {
                script {
                    // Exécution du scan Trivy sur l'image Docker du client
                    sh """
                    docker run --rm -v /var/run/docker.sock:/var/run/docker.sock \
                    aquasec/trivy:latest image --exit-code 0 --severity LOW,MEDIUM,HIGH,CRITICAL \
                    ${IMAGE_NAME_CLIENT}
                    """
                }
            }
        }

        stage('Push Client Image to Docker Hub') {
            steps {
                script {
                    // Connexion au registre Docker Hub et push de l'image
                    docker.withRegistry('', "${DOCKERHUB_CREDENTIALS}") {
                        dockerImageClient.push()
                    }
                }
            }
        }
    }
}
