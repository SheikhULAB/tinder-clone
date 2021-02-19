import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAJbS7ikhGejCTOXbrgSgb1vjES3pMw9qE",
  authDomain: "tinder-clone-44d34.firebaseapp.com",
  projectId: "tinder-clone-44d34",
  storageBucket: "tinder-clone-44d34.appspot.com",
  messagingSenderId: "478208721893",
  appId: "1:478208721893:web:40a1c062c36f88bdec250c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
