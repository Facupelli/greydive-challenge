import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDKzGQB2MmnrNVfD-OBgKZ2NHlABqkNohE",
  authDomain: "greydive-challenge-8a72f.firebaseapp.com",
  projectId: "greydive-challenge-8a72f",
  storageBucket: "greydive-challenge-8a72f.appspot.com",
  messagingSenderId: "997898682555",
  appId: "1:997898682555:web:82dac17140bc378d85e99e",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
