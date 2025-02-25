// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrGOQgwscLcZ0h8xN7C768Q17JgguLhd0",
  authDomain: "netflip-a5d2f.firebaseapp.com",
  projectId: "netflip-a5d2f",
  storageBucket: "netflip-a5d2f.firebasestorage.app",
  messagingSenderId: "841857622743",
  appId: "1:841857622743:web:6574871b71e230783e8692",
  measurementId: "G-N59MEZBVVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();