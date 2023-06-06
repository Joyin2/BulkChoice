// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyDWHgjOku5bQ1Vntyb_8jnpJW6wMOgcEhs",
  authDomain: "maltimart-af500.firebaseapp.com",
  projectId: "maltimart-af500",
  storageBucket: "maltimart-af500.appspot.com",
  messagingSenderId: "691414961509",
  appId: "1:691414961509:web:b1989871130fa8bfd6a58c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
export const storage = getStorage(app)

export default app;
