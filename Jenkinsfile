pipeline{
    agent any

    parameters{
        string(name: 'spec', defaultValue: 'cypress/e2e/**/**', description: 'Cypress spec file to run')
        choice(name: 'browser', choices: ['chrome', 'edge'], description: 'Browser to run tests')
    }

    options{
        ansiColor('xterm')
    }

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
            echo "This will always run"
        }
    }
}