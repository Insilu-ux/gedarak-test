import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCmVqTe1UfJbsYClcxbQsCNhviGBl4tsTs",
  authDomain: "gedarak-26ca6.firebaseapp.com",
  projectId: "gedarak-26ca6",
  storageBucket: "gedarak-26ca6.firebasestorage.app",
  messagingSenderId: "590567011952",
  appId: "1:590567011952:web:b2657ad09b27280225e6b5"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };
