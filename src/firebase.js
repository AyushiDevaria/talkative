import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// Import the functions you need from the SDKs you need

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqXuvXuxgzxEiGG5-xs6XEi5kjLIiJVbk",
  authDomain: "talkative-v1.firebaseapp.com",
  projectId: "talkative-v1",
  storageBucket: "talkative-v1.appspot.com",
  messagingSenderId: "763373379609",
  appId: "1:763373379609:web:e8a11034e3fb5d51fcca88",
  measurementId: "G-DPEZHLXBJN"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig); 
export const auth = getAuth() 
export const storage = getStorage();
export const db = getFirestore();