// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCCRj42ixgjArbLpixb9s0Y3U9HYYQVXFI",
    authDomain: "firegram-5b7d4.firebaseapp.com",
    projectId: "firegram-5b7d4",
    storageBucket: "firegram-5b7d4.appspot.com",
    messagingSenderId: "999682655710",
    appId: "1:999682655710:web:76a63d994fb9cc7db2094f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const projetStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projetStorage, projectFirestore }
