// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ_3O8nX1i3dYgY56W-kgnwfTTqKRn-y4",
  authDomain: "aisc-7ccbf.firebaseapp.com",
  projectId: "aisc-7ccbf",
  storageBucket: "aisc-7ccbf.appspot.com",
  messagingSenderId: "705159048068",
  appId: "1:705159048068:web:99a136aee825ee51560bd1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;