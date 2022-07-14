// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
    apiKey: "AIzaSyB1_Sb361tfwrXv_qhzDgegMvQSIh3RMEo",
    authDomain: "sparta-react-base.firebaseapp.com",
    projectId: "sparta-react-base",
    storageBucket: "sparta-react-base.appspot.com",
    messagingSenderId: "491276694232",
    appId: "1:491276694232:web:9fc097484c4179fe3f5dad",
    measurementId: "G-YH6SBSL546"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export const db = getFirestore();
