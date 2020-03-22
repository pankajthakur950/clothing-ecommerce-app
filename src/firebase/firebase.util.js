import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyCX2eRdPV5MwPsmPPahqM0oqTU06FyK2e0",
  authDomain: "clothesecommerceapp.firebaseapp.com",
  databaseURL: "https://clothesecommerceapp.firebaseio.com",
  projectId: "clothesecommerceapp",
  storageBucket: "clothesecommerceapp.appspot.com",
  messagingSenderId: "862344572290",
  appId: "1:862344572290:web:8eb0925db0382632d3339b",
  measurementId: "G-L5EKVLQ28R"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;