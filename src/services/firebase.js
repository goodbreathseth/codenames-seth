import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";


console.log("Exporting FIREBASE stuff")

firebase.initializeApp({
  apiKey: "AIzaSyCeXoL4qlrMD2_gi3yvkyiDQr1a6MS0cWw",
  authDomain: "codenames-seth.firebaseapp.com",
  databaseURL: "https://codenames-seth.firebaseio.com",
  projectId: "codenames-seth",
  storageBucket: "codenames-seth.appspot.com",
  messagingSenderId: "465634619945",
  appId: "1:465634619945:web:608cd3a66d2259dcf82238",
  measurementId: "G-V9KNFXY02P",
});

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const db = firebase.firestore();
