pipeline {
    agent none
    options {

    buildDiscarder(
        logRotator(
            // number of build logs to keep
            numToKeepStr:'5',
            // history to keep in days
            daysToKeepStr: '15',
            // artifacts are kept for days
            artifactDaysToKeepStr: '15',
            // number of builds have their artifacts kept
            artifactNumToKeepStr: '5'
        )
    )
}

    stages {
        stage('Checkout') {
           agent any
            steps {
                checkout scm
            
            }
        }

        stage('compile') { 
            agent any
            steps {
               bat "npm install"
               bat "npm run build"
            }
        }

    }

}   
