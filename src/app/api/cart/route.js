import { db } from "@/app/firebase/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";

export async function GET(req) {
  try {
    const cartCollection = collection(db, "cart");
    const cartSnapshot = await getDocs(cartCollection);
    const cartList = cartSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return new Response(JSON.stringify({ data: cartList }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching cart:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch cart" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
