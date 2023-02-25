import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyCSy5NUF7LaygnnEVkn5AwL2kSF3B_OrA8",
  authDomain: "allotment-69f1f.firebaseapp.com",
  projectId: "allotment-69f1f",
  storageBucket: "allotment-69f1f.appspot.com",
  messagingSenderId: "919008954878",
  appId: "1:919008954878:web:ed3ecbf512a1626e2658af",
  measurementId: "G-HCML5X2MS4"
});

const firebaseConfig = {
  apiKey: "AIzaSyCSy5NUF7LaygnnEVkn5AwL2kSF3B_OrA8",
  authDomain: "allotment-69f1f.firebaseapp.com",
  projectId: "allotment-69f1f",
  storageBucket: "allotment-69f1f.appspot.com",
  messagingSenderId: "919008954878",
  appId: "1:919008954878:web:ed3ecbf512a1626e2658af",
  measurementId: "G-HCML5X2MS4"
};

const firestore = firebase.firestore();

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db, firestore } 