// src/firebase.js
import { initializeApp } from 'firebase/app'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRuNI_2LKerfPUVXkzEklywAYpSkMC0hk",
  authDomain: "tp-authentification.firebaseapp.com",
  projectId: "tp-authentification",
  storageBucket: "tp-authentification.appspot.com",
  messagingSenderId: "966333329413",
  appId: "1:966333329413:web:cfc860393e4d6e2eca6c6c",
  measurementId: "G-6XML26K226"
};

// Initialize Firebase and Firebase Authentication
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export {auth}
