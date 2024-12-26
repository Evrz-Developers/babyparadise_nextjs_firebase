import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  serverTimestamp,
  writeBatch,
  doc,
} from "firebase/firestore";
import { db } from "@/app/firebase/firebaseConfig";
import useCartStore from "@/store/useCartStore";

const createOrder = async (
  userId,
  cartItems,
  shippingAddress,
  paymentMethod
) => {
  try {
    const batch = writeBatch(db);
    const orderRef = collection(db, "orders");
    const cartRef = collection(db, "cart");

    // Calculate total amount
    const totalAmount = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );

    // Create the order
    const order = {
      userId,
      orderDate: serverTimestamp(),
      status: "pending",
      totalAmount,
      shippingAddress,
      items: cartItems.map((item) => ({
        productRef: doc(db, "products", item.id),
        quantity: item.quantity,
        priceAtTime: item.price,
        productName: item.name,
        productImageURL: item.imageURL,
      })),
      paymentStatus: "pending",
      paymentMethod,
    };

    // Add order
    await addDoc(orderRef, order);

    // Clear user's cart after successful order
    const userCartQuery = query(cartRef, where("userId", "==", userId));
    const cartSnapshot = await getDocs(userCartQuery);

    cartSnapshot.docs.forEach((doc) => {
      batch.delete(doc.ref);
    });

    // Execute all operations
    await batch.commit();

    // Clear cart store
    const { clearCart } = useCartStore.getState();
    clearCart();

    return {
      success: true,
      message: "Order created successfully",
    };
  } catch (error) {
    console.error("Error creating order:", error);
    throw new Error("Failed to create order");
  }
};

const getOrders = async (userId) => {
  try {
    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, where("userId", "==", userId));
    const ordersSnapshot = await getDocs(q);

    const orders = ordersSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      orderDate: doc.data().orderDate?.toDate(), // Convert timestamp to Date
    }));

    return { data: orders };
  } catch (error) {
    console.error("Error fetching orders:", error);
    throw new Error("Failed to fetch orders");
  }
};

const getOrderById = async (userId, orderId) => {
  try {
    const orderRef = doc(db, "orders", orderId);
    const orderDoc = await getDoc(orderRef);

    if (!orderDoc.exists()) {
      throw new Error("Order not found");
    }

    const orderData = orderDoc.data();
    if (orderData.userId !== userId) {
      throw new Error("Unauthorized access to order");
    }

    return {
      id: orderDoc.id,
      ...orderData,
      orderDate: orderData.orderDate?.toDate(),
    };
  } catch (error) {
    console.error("Error fetching order:", error);
    throw error;
  }
};

const ORDERS_API = {
  createOrder,
  getOrders,
  getOrderById,
};

export default ORDERS_API;
