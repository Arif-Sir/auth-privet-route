// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBkjx68tU7xlqC-7M2Kxk1gGW_-qTnH6E",
  authDomain: "auth-privet-route2.firebaseapp.com",
  projectId: "auth-privet-route2",
  storageBucket: "auth-privet-route2.appspot.com",
  messagingSenderId: "892780968657",
  appId: "1:892780968657:web:a273a2ce3c27492476a3f0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;