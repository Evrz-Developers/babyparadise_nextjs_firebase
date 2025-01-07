import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { db } from "@/app/firebase/firebaseConfig";

export async function addUser(user) {
  try {
    const userRef = collection(db, "users");
    await addDoc(userRef, user);
    return { message: "User added successfully" };
  } catch (error) {
    console.error("Error adding user:", error);
    throw error;
  }
}

const getUsers = async () => {
  try {
    const userRef = collection(db, "users");
    const userSnapshot = await getDocs(userRef);
    const users = userSnapshot.docs.map((doc) => {
      const userData = doc.data();
      return {
        id: doc.id,
        ...userData,
      };
    });

    return { data: users };
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

export async function getUser(userId) {
  try {
    console.log("userId", userId);
    const userRef = doc(db, "users", userId);
    const userSnapshot = await getDoc(userRef);
    if (userSnapshot.exists()) {
      return { data: userSnapshot.data() };
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  }
}

export async function updateUser(userId, userData) {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, userData);
    return { message: "User updated successfully" };
  } catch (error) {
    console.error("Error updating user:", error);
    throw error;
  }
}

export async function deleteUser(userId) {
  try {
    const userRef = doc(db, "users", userId);
    await deleteDoc(userRef);
    return { message: "User deleted successfully" };
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  }
}

const USER_API = {
  addUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
};

export default USER_API;
