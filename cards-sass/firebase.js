// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-oLO0q2MpbeCjdJx_2t3p-kf84CNfpk0",
  authDomain: "flashcards-742b7.firebaseapp.com",
  projectId: "flashcards-742b7",
  storageBucket: "flashcards-742b7.appspot.com",
  messagingSenderId: "686464382835",
  appId: "1:686464382835:web:9f929f8e445d1d8eb63706",
  measurementId: "G-BS5JH1B9FW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);