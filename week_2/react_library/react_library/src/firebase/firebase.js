// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBt9KdOLnrk4MNL-4-dh6ZT8hUz_fNKzIg",
  authDomain: "react-library-9fd52.firebaseapp.com",
  projectId: "react-library-9fd52",
  storageBucket: "react-library-9fd52.appspot.com",
  messagingSenderId: "976540762831",
  appId: "1:976540762831:web:876c77f030fe9b09392dba",
  measurementId: "G-4NFFLVCMKP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
