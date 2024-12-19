import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  writeBatch,
  serverTimestamp,
  query,
  where,
  getDoc,
} from "firebase/firestore";
import { db } from "@/app/firebase/firebaseConfig";

const DEFAULT_HOST = process.env.NEXT_PUBLIC_API_URL;
// const DEFAULT_HOST = process.env.NEXT_PUBLIC_API_URL_PROD;

export async function addProductToCart(product, userId) {
  try {
    const cartRef = collection(db, "cart");
    const productRef = doc(db, "products", product.id);

    // Check if product already exists in cart
    const q = query(
      cartRef,
      where("userId", "==", userId),
      where("productRef", "==", productRef)
    );
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // Product exists, update quantity
      const existingCartItem = querySnapshot.docs[0];
      const currentQuantity = existingCartItem.data().quantity;
      await updateDoc(existingCartItem.ref, {
        quantity: currentQuantity + (product.quantity || 1),
      });
    } else {
      // Product doesn't exist, add new item
      const cartItem = {
        userId: userId,
        productRef: productRef,
        quantity: product.quantity || 1,
        addedAt: serverTimestamp(),
      };
      await addDoc(cartRef, cartItem);
    }

    return { message: "Product added to cart successfully" };
  } catch (error) {
    console.error("Error adding product to cart:", error);
    throw new Error("Failed to add product to cart");
  }
}

const addProductsToCart = async (
  products,
  host = DEFAULT_HOST,
  isLoggedIn = false
) => {
  try {
    const cartCollection = collection(db, "cart");
    const batch = writeBatch(db);

    products.forEach((product) => {
      const docRef = doc(cartCollection);
      batch.set(docRef, product);
    });

    await batch.commit();
    return { message: "Products added to cart successfully" };
  } catch (error) {
    console.error("Error adding products to cart:", error);
    throw error;
  }
};

const getProductsInCart = async (userId) => {
  try {
    const cartRef = collection(db, "cart");
    const cartSnapshot = await getDocs(
      query(cartRef, where("userId", "==", userId))
    );

    const cartItems = await Promise.all(
      cartSnapshot.docs.map(async (doc) => {
        const cartData = doc.data();
        const productDoc = await getDoc(cartData.productRef);
        const productData = productDoc.data();

        return {
          id: doc.id,
          quantity: cartData.quantity,
          addedAt: cartData.addedAt,
          ...productData,
        };
      })
    );

    return { data: cartItems };
  } catch (error) {
    console.error("Error fetching cart:", error);
    throw error;
  }
};

const deleteProductFromCart = async (cartItemId, userId) => {
  try {
    const cartRef = doc(db, "cart", cartItemId);
    await deleteDoc(cartRef);
    return { message: "Product removed from cart successfully" };
  } catch (error) {
    console.error("Error removing product from cart:", error);
    throw error;
  }
};

const updateProductQuantityInCart = async (cartItemId, quantity, userId) => {
  try {
    const cartRef = doc(db, "cart", cartItemId);
    await updateDoc(cartRef, { quantity });
    return { message: "Quantity updated successfully" };
  } catch (error) {
    console.error("Error updating quantity:", error);
    throw error;
  }
};

const CART_API = {
  getProductsInCart,
  addProductsToCart,
  deleteProductFromCart,
  updateProductQuantityInCart,
  addProductToCart,
};

export default CART_API;
