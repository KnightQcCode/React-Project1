// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

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
const app = firebase.initializeApp(firebaseConfig);
const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp }
