pipeline {
    agent any
    options {
        skipStagesAfterUnstable()
    }
    environment {
        APP_FOLDER = 'lemon-web-app'
        PUBLIC_URL = ''
        REACT_APP_API_URL = sh(script: 'echo ${API_URL}', , returnStdout: true).trim()
        REACT_APP_BRANCH_NAME = sh(script: 'echo ${branchName}', , returnStdout: true).trim()
        ENV = sh(script: 'echo ${ENV}', , returnStdout: true).trim()
    }
    stages {
        stage('Check App folders') {
            steps {
                sh 'sudo mkdir /var/www/apps -p'
                sh 'sudo chmod -R 777 /var/www/apps'
                sh 'sudo mkdir /var/www/apps/$ENV -p'
                sh 'sudo chmod -R 777 /var/www/apps/$ENV'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm i'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh 'rm -rf /var/www/apps/$ENV/$APP_FOLDER'
                sh 'cp -r build /var/www/apps/$ENV'
                sh 'mv /var/www/apps/$ENV/build /var/www/apps/$ENV/$APP_FOLDER'
                sh 'cp -r deploy /var/www/apps/$ENV/$APP_FOLDER'
            }
        }
        stage('Build Mobile App') {
            environment {
                REACT_APP_IS_MOBILE_APP = 'true'
            }
            steps {
                sh 'npm run build'
            }
        }
        stage('Builid Android App') {
            steps {
                sh 'rm -rf app'
                sh 'cordova create app'
                sh 'cp -r build app/'
                sh 'rm -rf app/www'
                sh 'mv app/build app/www'
                sh './android/prepare-index.sh'
                sh 'rm app/config.xml'
                sh 'cp android/config.xml app/'
                sh 'cp android/logo.jpg app/'
                sh 'cp android/splash.jpg app/'
                dir('app') {
                    sh 'cordova platform add android'
                    sh 'cordova plugin add cordova-plugin-device'
                    sh 'cordova plugin add cordova-plugin-splashscreen'
                    sh 'cordova build android'
                }
                sh 'cp app/platforms/android/app/build/outputs/apk/debug/app-debug.apk /var/www/apps/$ENV/$APP_FOLDER/static/app.apk'
                sh 'chmod 777 /var/www/apps/$ENV/$APP_FOLDER/static/app.apk'
            }
        }
    }
}