import { firestore } from "../firebase";
import { collection, getDocs, addDoc } from "@firebase/firestore";

export const getUsers = () => getDocs(collection(firestore, "user_info"));

export const addUser = (values) =>
  addDoc(collection(firestore, "user_info"), values);
