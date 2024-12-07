import React from "react";
import { db } from "@/app/firebase/firebaseConfig"; // Adjust the import path as necessary
import { collection, addDoc } from "firebase/firestore";
import { dummyCartItems } from "@/utilities/demo/demoCart";

const AddDataButton = () => {
  const addDataToCollection = async (collectionName, data) => {
    try {
      const docRef = await addDoc(collection(db, collectionName), data);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleAddData = async () => {
    const collectionName = "cart"; // Change to your collection name

    for (const item of dummyCartItems) {
      await addDataToCollection(collectionName, item);
    }
    alert("Data added successfully!");
  };

  return (
    <button onClick={handleAddData} className="btn-add-data">
      Add Dummy Data to Firestore
    </button>
  );
};

export default AddDataButton;
