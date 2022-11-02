// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCCvLude9qAgwKnHBxqZl8X7s_0iL4kIY8",
  authDomain: "find-my-cocktail.firebaseapp.com",
  projectId: "find-my-cocktail",
  storageBucket: "find-my-cocktail.appspot.com",
  messagingSenderId: "391879084790",
  appId: "1:391879084790:web:85a3861f69dcf6b969bad7",
  measurementId: "G-823969QJJ2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);