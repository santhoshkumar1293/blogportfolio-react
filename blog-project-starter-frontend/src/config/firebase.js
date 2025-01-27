
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD52qHnGWl8Bbyy2TJl2owHe6O-a21xs8A",
  authDomain: "blog-app-5391a.firebaseapp.com",
  projectId: "blog-app-5391a",
  storageBucket: "blog-app-5391a.firebasestorage.app",
  messagingSenderId: "79740364810",
  appId: "1:79740364810:web:7dcf77043b0e9174cbd7f3",
  measurementId: "G-TGR80BF3V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth
