// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzOWIjGOar6dLNVcZ3_ECR99Gsgn1DN4U",
  authDomain: "netflixgpt-7d18b.firebaseapp.com",
  projectId: "netflixgpt-7d18b",
  storageBucket: "netflixgpt-7d18b.appspot.com",
  messagingSenderId: "213813130154",
  appId: "1:213813130154:web:8d4ce69bdfdde33d1671d3",
  measurementId: "G-DF6C2G28FN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
