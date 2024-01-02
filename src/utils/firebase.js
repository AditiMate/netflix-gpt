// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaZtjI_2BJCIM-qgGwAGTPFgeNdxNXP4E",
  authDomain: "netflixgpt-141dd.firebaseapp.com",
  projectId: "netflixgpt-141dd",
  storageBucket: "netflixgpt-141dd.appspot.com",
  messagingSenderId: "655277923543",
  appId: "1:655277923543:web:25a36d5fbcfc30ba212492",
  measurementId: "G-232QZRSWQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();