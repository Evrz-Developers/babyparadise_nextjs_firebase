"use client";
import React, { useEffect, useState } from "react";
import Cart from "@/components/shop/user/Cart";
import CART_API from "@/utilities/api/cart.api";
import PageWrapper from "@/components/common/layouts/PageWrapper";
import { dummyCartItems } from "@/components/shop/user/dummyCartData";
export default function CartPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Remove this after testing
    const initializeDummyData = () => {
      localStorage.setItem("cartItems", JSON.stringify(dummyCartItems));
    };
    initializeDummyData(); // Call to set up dummy data
    const fetchCartData = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      const isLoggedIn = user ? true : false;

      let fetchedProducts;
      if (isLoggedIn) {
        console.log("isLoggedIn");
        const { data } = await CART_API.getProductsInCart();
        fetchedProducts = data;
      } else {
        // Fetch cart items from local storage if not logged in
        console.log("notLoggedIn");
        fetchedProducts = JSON.parse(localStorage.getItem("cartItems")) || [];
        console.log("cartItems", fetchedProducts);
      }

      setProducts(fetchedProducts);
      setLoading(false);
    };

    fetchCartData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <PageWrapper breadcrumbItems={[{ label: "Cart", href: `#` }]}>
      <Cart products={products} />
    </PageWrapper>
  );
}
