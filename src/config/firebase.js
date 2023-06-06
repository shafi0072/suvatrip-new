import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArgUbqONitA8yEiipF-OSoDtEC9BM_R5A",
  authDomain: "suvatripuser.firebaseapp.com",
  projectId: "suvatripuser",
  storageBucket: "suvatripuser.appspot.com",
  messagingSenderId: "823050520840",
  appId: "1:823050520840:web:15b19c4146164889c544bd",
  measurementId: "G-CBMQ0P6776"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
