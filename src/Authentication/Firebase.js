// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBoFYqAGo0DnPrf2bBmWciEcd2bQxk-QD0",
  authDomain: "pharma-market-5fbb8.firebaseapp.com",
  projectId: "pharma-market-5fbb8",
  storageBucket: "pharma-market-5fbb8.firebasestorage.app",
  messagingSenderId: "967701067807",
  appId: "1:967701067807:web:8a7156ca753153a90e3d2a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;