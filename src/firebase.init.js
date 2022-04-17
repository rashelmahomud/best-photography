// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA9Jw_-UJl5GciYNBfcrj7Q8UdanB8x7Nk",
  authDomain: "best-photography-19d6d.firebaseapp.com",
  projectId: "best-photography-19d6d",
  storageBucket: "best-photography-19d6d.appspot.com",
  messagingSenderId: "36900166862",
  appId: "1:36900166862:web:c7484e7d2e3e9df216049f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;