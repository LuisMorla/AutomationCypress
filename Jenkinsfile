pipeline{
    agent any

    parameters{
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**/**', description: 'Cypress spec file to run')
        choice(name: 'BROWSER', choices: ['electron', 'edge'], description: 'Browser to run tests')
    }

    // options {
    //     ansiColor('xterm')
    // }

    stages{
        stage('Build'){
            steps{
                echo("Building the project")
            }
        }

        stage('Install dependencies'){
            steps{
                script{
                    bat 'npm install'
                }
            }
        }

        stage('Run tests'){
            steps{
                script{
                    bat "npx cypress run --spec ${SPEC} --browser ${BROWSER}"
                }
            }
        }

        stage('Deploy'){
            steps{
                echo("Deploying the project")
            }
        }
    }

    post{
        always{
            publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'Cypress Test Report', reportTitles: ''])
        }
    }
}