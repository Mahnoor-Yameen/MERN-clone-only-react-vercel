// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// FOR LOGIN / REGISTER
import { getAuth } from "firebase/auth";  //imported authentication
import { getFirestore, collection, getDocs } from "firebase/firestore";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtR0t7-nFpMk3LrLGaax8_PBuhNiSpHMo",
  authDomain: "goldsalon-7ceb0.firebaseapp.com",
  projectId: "goldsalon-7ceb0",
  storageBucket: "goldsalon-7ceb0.appspot.com",
  messagingSenderId: "76624420932",
  appId: "1:76624420932:web:3f5b38a39f9652fe005c11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);  //created a const named auth for authentication works in firebse
const firestore = getFirestore(app);

export { app, auth, firestore };