import firebase from "firebase";

const firebaseapp = firebase.initializeApp({
  apiKey: "AIzaSyAXoYfph-adhhGnW34D4TJLlLctm9JywtE",
  authDomain: "todo-app-f1780.firebaseapp.com",
  databaseURL: "https://todo-app-f1780.firebaseio.com",
  projectId: "todo-app-f1780",
  storageBucket: "todo-app-f1780.appspot.com",
  messagingSenderId: "730574159700",
  appId: "1:730574159700:web:b3dbb78555c38e457212c1",
  measurementId: "G-D1TPBTP2KN",
});

const db = firebaseapp.firestore();

export default db;
