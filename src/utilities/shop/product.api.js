import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

const getAllProducts = async () => {
  try {
    const productsCollection = collection(db, "products");
    const productSnapshot = await getDocs(productsCollection);
    const productList = productSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    return { data: productList };
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

const PRODUCT_API = {
  getAllProducts,
};

export default PRODUCT_API;
