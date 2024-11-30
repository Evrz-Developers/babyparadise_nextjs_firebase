import { db } from "@/lib/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";

export async function GET(req) {
  const category = req.nextUrl.searchParams.get("category"); // Optionally filter by category

  try {
    const productsCollection = collection(db, "products");
    let q = query(productsCollection); // Fetch all products by default

    // Apply category filter if provided
    if (category) {
      q = query(q, where("category", "==", category));
    }

    const productSnapshot = await getDocs(q);
    const productList = productSnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data(),
    }));

    return new Response(JSON.stringify({ data: productList }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch products" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
