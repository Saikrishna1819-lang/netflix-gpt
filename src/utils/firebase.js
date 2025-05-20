// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmEsOXIMYXTPnsZtuTELu1HvETmVLaftQ",
  authDomain: "netflix-gpt-b2174.firebaseapp.com",
  projectId: "netflix-gpt-b2174",
  storageBucket: "netflix-gpt-b2174.firebasestorage.app",
  messagingSenderId: "682192997960",
  appId: "1:682192997960:web:916a7162518a373adad27d",
  measurementId: "G-YRG98YJVQ8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
 export const auth = getAuth();