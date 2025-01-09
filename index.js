/* === Imports === */
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";



/* === Firebase Setup === */
const firebaseConfig = {
    apiKey: "AIzaSyBwbFRtGBxXB9lavQKq7SFR6_bydPiHX2c",
    authDomain: "hot-and-cold-1ea35.firebaseapp.com",
    projectId: "hot-and-cold-1ea35",
    storageBucket: "hot-and-cold-1ea35.firebasestorage.app",
    messagingSenderId: "999165085253",
    appId: "1:999165085253:web:5ac3738010fc5d6588c52c"
  };
  const app = initializeApp(firebaseConfig);
  console.log(app.options.projectId)
  const auth = getAuth(app)
  console.log(auth)
/* === UI === */

/* == UI - Elements == */

const viewLoggedOut = document.getElementById("logged-out-view")
const viewLoggedIn = document.getElementById("logged-in-view")

const signInWithGoogleButtonEl = document.getElementById("sign-in-with-google-btn")

const emailInputEl = document.getElementById("email-input")
const passwordInputEl = document.getElementById("password-input")

const signInButtonEl = document.getElementById("sign-in-btn")
const createAccountButtonEl = document.getElementById("create-account-btn")

/* == UI - Event Listeners == */

signInWithGoogleButtonEl.addEventListener("click", authSignInWithGoogle)

signInButtonEl.addEventListener("click", authSignInWithEmail)
createAccountButtonEl.addEventListener("click", authCreateAccountWithEmail)

/* === Main Code === */

showLoggedOutView()

/* === Functions === */

/* = Functions - Firebase - Authentication = */

function authSignInWithGoogle() {
    console.log("Sign in with Google")
}

function authSignInWithEmail() {
    console.log("Sign in with email and password")
}

function authCreateAccountWithEmail() {
    console.log("Sign up with email and password")
}

/* == Functions - UI Functions == */

function showLoggedOutView() {
    hideElement(viewLoggedIn)
    showElement(viewLoggedOut)
}

function showLoggedInView() {
    hideElement(viewLoggedOut)
    showElement(viewLoggedIn)
}

function showElement(element) {
    element.style.display = "flex"
}

function hideElement(element) {
    element.style.display = "none"
}

//Part A




//credit: coursera