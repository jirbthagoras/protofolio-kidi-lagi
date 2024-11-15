// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZfKPq6HHBeWAo03PM1dGDk-Ql-yp7INo",
  authDomain: "fir-portofolio-efed8.firebaseapp.com",
  projectId: "fir-portofolio-efed8",
  storageBucket: "fir-portofolio-efed8.firebasestorage.app",
  messagingSenderId: "524857552372",
  appId: "1:524857552372:web:d2c37cd21c36ab54e5dda1",
  measurementId: "G-1FLLZB19MP"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };