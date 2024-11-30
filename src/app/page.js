"use client"; // Move fetch to client-side

import React, { useEffect, useState } from "react";
import Home from "@/components/shop/Home";

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(`data/products.json`); // Fetch from public folder
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data); // Set products after fetching
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <Home initialProducts={products} />
    </div>
  );
}
