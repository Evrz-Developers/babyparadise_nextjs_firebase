"use client";
import React, { useState } from "react";
import Cart from "@/components/shop/user/Cart";
import PageWrapper from "@/components/common/layouts/PageWrapper";
import CartInitializer from "@/components/shop/user/CartInitializer";

export default function CartPage() {
  const [products, setProducts] = useState([]);

  return (
    <PageWrapper breadcrumbItems={[{ label: "Cart", href: `#` }]}>
      <CartInitializer setProducts={setProducts} />
      <Cart products={products} />
    </PageWrapper>
  );
}
