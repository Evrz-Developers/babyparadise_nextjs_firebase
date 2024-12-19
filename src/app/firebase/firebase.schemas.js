import { Timestamp } from "firebase/firestore";

// Cart Item Schema (Collection: cart)
export const CartItemSchema = {
  userId: "string", // Reference to user's ID
  productRef: "reference", // Reference to products collection
  quantity: "number",
  addedAt: "timestamp",
  productName: "string",
  productPrice: "number",
  productImageURL: "string",
};

// Order Schema (Collection: orders)
export const OrderSchema = {
  userId: "string", // Reference to users collection
  orderDate: "timestamp",
  status: ["pending", "processing", "shipped", "delivered"],
  totalAmount: "number",
  shippingAddress: {
    street: "string",
    city: "string",
    state: "string",
    postalCode: "string",
    country: "string",
  },
  items: [
    {
      productRef: "reference", // Reference to products collection
      quantity: "number",
      priceAtTime: "number",
      productName: "string", // Denormalized data
      productImageURL: "string", // Denormalized data
    },
  ],
  paymentStatus: ["pending", "paid", "failed"],
  paymentMethod: "string",
};

// Wishlist Schema (Collection: wishlist)
export const WishlistSchema = {
  userId: "string", // Reference to users collection
  productRef: "reference", // Reference to products collection
  addedAt: "timestamp",
};
