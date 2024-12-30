import admin from "firebase-admin";
import path from "path";
import { config } from "dotenv";

config(); // Load environment variables from .env file

const serviceAccountPath = path.resolve(
  process.env.FIREBASE_SERVICE_ACCOUNT_KEY
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(require(serviceAccountPath)),
  });
}

const db = admin.firestore();
const auth = admin.auth();

export { db, auth };
