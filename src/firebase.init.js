// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZn7Vnib-pMZllN3moVvA9t1Awz2oO9_s",
  authDomain: "router-firebase-integration-re.firebaseapp.com",
  projectId: "router-firebase-integration-re",
  storageBucket: "router-firebase-integration-re.appspot.com",
  messagingSenderId: "874188621118",
  appId: "1:874188621118:web:bb147367397fd8380c986f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;