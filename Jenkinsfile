pipeline{
    agent any

    parameters{
        string(name: 'SPEC', defaultValue: 'cypress/e2e/**/**', description: 'Cypress spec file to run')
        choice(name: 'BROWSER', choices: ['chrome', 'edge'], description: 'Browser to run tests')
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
                    bat 'npm install'
                }
            }
        }

        stage('Run tests'){
            steps{
                withEnv(['FORCE_COLOR=0']) {
                    def browser = params.browser.toLowerCase()
                    bat "npx cypress run --spec '${params.spec}' --browser '${browser}'"
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