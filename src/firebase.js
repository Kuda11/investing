import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyALnA8czK_693nW1z_qH2M0_pPDvDfvpQI",
  authDomain: "investing-42895.firebaseapp.com",
  databaseURL: "https://investing-42895.firebaseio.com",
  projectId: "investing-42895",
  storageBucket: "investing-42895.appspot.com",
  messagingSenderId: "627244380367",
  appId: "1:627244380367:web:aefea17e34b7dc0b3007ba"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();

export const provider = new firebase.auth.GoogleAuthProvider();

export default firebase;
