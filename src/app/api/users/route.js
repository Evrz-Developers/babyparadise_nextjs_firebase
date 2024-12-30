import { db, auth } from "@/app/firebase/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
// import { getAuth } from "firebase/auth";

export async function GET(req) {
  const uid = req.nextUrl.searchParams.get("uid"); // Get UID from query parameters

  if (!uid) {
    return new Response(JSON.stringify({ error: "UID is required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  // Get the authentication token from the request headers
  const token = req.headers.get("Authorization")?.split("Bearer ")[1];

  if (!token) {
    return new Response(JSON.stringify({ error: "Unauthorized" }), {
      status: 401,
      headers: { "Content-Type": "application/json" },
    });
  }

  try {
    // Verify the token
    await auth.verifyIdToken(token); // Ensure the token is valid
    console.log("auth", auth);

    const userDocRef = doc(db, "users", uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    const userData = userDoc.data();
    const isAdmin = userData.role === "admin"; // Check if the user is an admin

    return new Response(JSON.stringify({ ...userData, isAdmin }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch user" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
