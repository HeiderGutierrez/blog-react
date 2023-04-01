import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCt_mdwx8TVxpzusCQAC0Uc8fmzc9APDJA",
  authDomain: "blog-1671e.firebaseapp.com",
  databaseURL: "https://blog-1671e-default-rtdb.firebaseio.com",
  projectId: "blog-1671e",
  storageBucket: "blog-1671e.appspot.com",
  messagingSenderId: "972790003448",
  appId: "1:972790003448:web:1662fe9de5bc78b18aad0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };