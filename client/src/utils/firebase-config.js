//FIREBASE
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import "firebase/compat/database";
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyBxazrdqO_Q_7gD76Z0JQvsadr35NtB9UE",
  authDomain: "watchnow-7174b.firebaseapp.com",
  projectId: "watchnow-7174b",
  storageBucket: "watchnow-7174b.appspot.com",
  messagingSenderId: "651724729148",
  appId: "1:651724729148:web:f7506fd6948a3db6120c39",
  measurementId: "G-YLRCNZ4ZBP"
};
// INITIALIZE FIREBASE
firebase.initializeApp(firebaseConfig);
export default firebase;
export const provider = new firebase.auth.GoogleAuthProvider();