// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp4L4svhA1K0dEqhbaepWfHCmaCvMOaTE",
  authDomain: "air-vnv.firebaseapp.com",
  projectId: "air-vnv",
  storageBucket: "air-vnv.appspot.com",
  messagingSenderId: "374943886485",
  appId: "1:374943886485:web:e2e407b089aff5f07dbf9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;