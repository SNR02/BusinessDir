// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALQFugF0FDvB3BXJKkkkRDbwwkgCJRY44",
  authDomain: "businessdir-4a61b.firebaseapp.com",
  projectId: "businessdir-4a61b",
  storageBucket: "businessdir-4a61b.appspot.com",
  messagingSenderId: "607920793189",
  appId: "1:607920793189:web:dc7d8bed13c19173dc488c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);