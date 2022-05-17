import firebase from "firebase/app";
import "firebase/database";
import { FaNotesMedical } from "react-icons/fa";

const firebaseConfig = {
  apiKey: "AIzaSyCjfytbaUyAml4Gx6LibswUHskT2p6_Acg",

  authDomain: "task-tracker-1b5da.firebaseapp.com",

  databaseURL:
    "https://task-tracker-1b5da-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "task-tracker-1b5da",

  storageBucket: "task-tracker-1b5da.appspot.com",

  messagingSenderId: "466379930266",

  appId: "1:466379930266:web:ed291bf22c82e619883d23",

  measurementId: "G-X3S9YT9S1W",
};

firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const notesRef = databaseRef.child("notes");
export default firebase;
