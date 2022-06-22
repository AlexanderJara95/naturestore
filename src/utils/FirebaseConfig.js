// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDc3lBYAizzV7rwW-TGS_ZebbCIYqZATfA",
  authDomain: "naturestore-6501f.firebaseapp.com",
  projectId: "naturestore-6501f",
  storageBucket: "naturestore-6501f.appspot.com",
  messagingSenderId: "913676219332",
  appId: "1:913676219332:web:3851c855caee606bb32a91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;