// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfAYLI1HzA871K2GKjO57khJfbiRiTAOs",
  authDomain: "inventory-mangement-ca6fc.firebaseapp.com",
  projectId: "inventory-mangement-ca6fc",
  storageBucket: "inventory-mangement-ca6fc.appspot.com",
  messagingSenderId: "402698050858",
  appId: "1:402698050858:web:e4ddb8deafc5d8e9f65253",
  measurementId: "G-6022PZV4ET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestore=getFirestore(app)

export {firestore};