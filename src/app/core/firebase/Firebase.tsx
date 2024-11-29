// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZhCWpnSkj3lNTcufVlTJnq2Vwg3Ju9cg",
  authDomain: "webpage-c6188.firebaseapp.com",
  projectId: "webpage-c6188",
  storageBucket: "webpage-c6188.firebasestorage.app",
  messagingSenderId: "525014268707",
  appId: "1:525014268707:web:f4bafd9f817a5395d8aa96",
  measurementId: "G-SMJ4CYL574"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);

export default db