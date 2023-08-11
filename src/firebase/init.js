// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZF10kFR1kj32qsRvRIkkBVIraFYY6PqM",
  authDomain: "weatherclothes-8b2d7.firebaseapp.com",
  projectId: "weatherclothes-8b2d7",
  storageBucket: "weatherclothes-8b2d7.appspot.com",
  messagingSenderId: "1002326561399",
  appId: "1:1002326561399:web:73e010fb662d846c8d6c72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();
