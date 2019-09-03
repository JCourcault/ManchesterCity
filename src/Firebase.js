import firebase from "firebase/app";

import "firebase/app";

import "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhk4QR9FrwsJ65c4D6lyg9cx3ImGgq5Yg",
  authDomain: "m-city-4d402.firebaseapp.com",
  databaseURL: "https://m-city-4d402.firebaseio.com",
  projectId: "m-city-4d402",
  storageBucket: "",
  messagingSenderId: "690042935372",
  appId: "1:690042935372:web:81bfdee9ab44cc57"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseMatches = firebaseDB.ref("matches");

export { firebase, firebaseMatches };
