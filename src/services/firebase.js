
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import  'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC3QMxOjKEp3J5JgBfSIjn4RST7Rk-jXA",
  authDomain: "saathi-e878d.firebaseapp.com",
  projectId: "saathi-e878d",
  storageBucket: "saathi-e878d.appspot.com",
  messagingSenderId: "227699011708",
  appId: "1:227699011708:web:5728e1c3b6118c1f2259f9"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

// let postCollection = document.querySelector('#posts-collection');

export const auth = firebase.auth();
export const db = firebase.firestore();

// console.log(db);
export default firebase;
