import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCSiNoUJV1YTf04yTVxGiwfh205t8X-CsI",
  authDomain: "bulletin-board-tutorial.firebaseapp.com",
  projectId: "bulletin-board-tutorial",
  storageBucket: "bulletin-board-tutorial.appspot.com",
  messagingSenderId: "702471317873",
  appId: "1:702471317873:web:4952b6c471bd233338eed0",
});

const db = firebaseApp.firestore();
export { db };
