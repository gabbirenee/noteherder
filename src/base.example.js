//Copy this file to base.js and add in your app details 

import firebase from 'firebase/app'

import Rebase from 're-base'
import 'firebase/database'
import 'firebase/auth'

// Initialize Firebase
const config = {
apiKey: "YOUR API KEY",
authDomain: "YOUR DOMAIN HERE",
databaseURL: "YOUR URL HERE",
projectId: "YOUR PROJECT ID HERE",
storageBucket: "YOUR STORAGE BUCKET HERE",
messagingSenderId: "YOUR MESSAGIN SENDER ID"
}

const app = firebase.initializeApp(config)
const db = firebase.database(app)
Rebase.createClass(db)     //this is the rebase class

export const githubProvider = new firebase.auth.GithubAuthProvider();
export const auth = app.auth()

export default Rebase.createClass(db)
