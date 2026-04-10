pipeline {
    agent any

    stages {

        stage('Clone') {
            steps {
                git 'git@github.com:your-username/resume.git'
            }
        }

        stage('Deploy') {
            steps {
                sshagent(['ec2-key']) {
                    sh '''
                    ssh -o StrictHostKeyChecking=no ubuntu@YOUR_EC2_IP << EOF
                    sudo rm -rf /var/www/html/*
                    sudo cp -r * /var/www/html/
                    sudo systemctl restart nginx
                    EOF
                    '''
                }
            }
        }
    }
}
