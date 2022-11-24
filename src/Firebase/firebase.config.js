import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFbyKda37DCw-FHxjc-pqnFzeNAg3zILo",
  authDomain: "lens-mart.firebaseapp.com",
  projectId: "lens-mart",
  storageBucket: "lens-mart.appspot.com",
  messagingSenderId: "731713197218",
  appId: "1:731713197218:web:f8c8fa1a2089238934f3fb"
};

const app = initializeApp(firebaseConfig);

export default app;