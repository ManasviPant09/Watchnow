// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxazrdqO_Q_7gD76Z0JQvsadr35NtB9UE",
  authDomain: "watchnow-7174b.firebaseapp.com",
  projectId: "watchnow-7174b",
  storageBucket: "watchnow-7174b.appspot.com",
  messagingSenderId: "651724729148",
  appId: "1:651724729148:web:f7506fd6948a3db6120c39",
  measurementId: "G-YLRCNZ4ZBP"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);