import { firestore } from "../firebase";
import {
  collection,
  getDocs,
  addDoc,
  orderBy,
  query,
} from "@firebase/firestore";

const userInfoRef = collection(firestore, "user_info");

export const getUsers = () =>
  getDocs(query(userInfoRef, orderBy("created_at")));

export const addUser = (values) => addDoc(userInfoRef, values);
