import { dummyCartItems } from "@/utilities/demo/demoCart";
import { db } from "../app/firebase/firebaseConfig"; // Adjust the import path as necessary
import { collection, addDoc } from "firebase/firestore";

const addDataToCollection = async (collectionName, data) => {
  try {
    const docRef = await addDoc(collection(db, collectionName), data);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

// Example usage
const main = async () => {
  const collectionName = "cart"; // Change to your collection name

  for (const item of dummyCartItems) {
    await addDataToCollection(collectionName, item);
  }
};

main();
