pipeline {
    agent any

    environment {
        
        GIT_REPO_URL = 'git@github.com:ArijHammouda/reactTemplate.git'
        DOCKERHUB_CREDENTIALS = credentials('dockerhub')
        IMAGE_NAME_CLIENT = 'arijzhd/react-vite-dev'  // Remplacez "username" par votre utilisateur Docker Hub
        CLIENT_DIR = 'client' 
    }

    stages {
        stage('Clone Repository') {
            steps {
                git credentialsId: 'GitHub_ssh', url: "${GIT_REPO_URL}"  
            }
        }

        stage('Detect Changes') {
            steps {
                script {
                    
                    def changedFiles = sh(script: 'git diff --name-only $GIT_PREVIOUS_COMMIT $GIT_COMMIT', returnStdout: true).trim().split("\n")
                  
                    env.CLIENT_CHANGED = changedFiles.any { it.startsWith(CLIENT_DIR) }
                }
            }
        }

        stage('Build Client Image') {
            when {
                expression { return env.CLIENT_CHANGED == 'true' }
            }
            steps {
                script {
                    
                    dockerImageClient = docker.build("${IMAGE_NAME_CLIENT}")
                }
            }
        }

        stage('Scan Client Image') {
            when {
                expression { return env.CLIENT_CHANGED == 'true' }
            }
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
            when {
                expression { return env.CLIENT_CHANGED == 'true' }
            }
            steps {
                script {
                    
                    docker.withRegistry('', "${DOCKERHUB_CREDENTIALS}") {
                        dockerImageClient.push()
                    }
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline terminé'
        }
        success {
            echo 'Le pipeline a réussi!'
        }
        failure {
            echo 'Le pipeline a échoué.'
        }
    }
}
