// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4IhgcfeTYZDu75zkfvB_nGxd0qDPZCm0",
  authDomain: "geochat-e80d1.firebaseapp.com",
  projectId: "geochat-e80d1",
  storageBucket: "geochat-e80d1.appspot.com",
  messagingSenderId: "462315820673",
  appId: "1:462315820673:web:f80d79869624003ac65f80"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)