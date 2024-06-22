pipeline{
    agent any

    parameters{
        string(name: 'spec', defaultValue: 'cypress/e2e/**/**', description: 'Cypress spec file to run')
        choice(name: 'browser', choices: ['chrome', 'edge'], description: 'Browser to run tests')
    }

    // options{
    //     ansiColor('authorizationMatrix')
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
                    bat 'bun install'
                }
            }
        }

        stage('Run tests'){
            steps{
                script{
                    bat "bun cy:run --spec '${params.spec}' --browser '${params.browser}'"
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
            publishHTML(target: [allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/reports', reportFiles: 'index.html', reportName: 'Cypress Test Report', reportTitles: ''])
        }
    }
}