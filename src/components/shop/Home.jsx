"use client";

import React, { useEffect, useState } from "react";
import Gridlayout from "@/components/layouts/Gridlayout";
import ProductCard from "@/components/layouts/ProductCard";
import SkeletonCard from "@/components/layouts/SkeletonProductCard";
import useProductStore from "@/store/useProductStore";

const Home = ({ initialProducts = [], category = "" }) => {
  const { products, setProducts } = useProductStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log("Setting initial products...");
    setProducts(initialProducts);
    setLoading(false);
    console.log("Initial products set:", initialProducts);
  }, [initialProducts, setProducts]);

  return (
    <div className="home-container">
      <Gridlayout>
        {loading ? (
          Array.from({ length: 6 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
        ) : products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
            Array.from({ length: 6 }).map((_, index) => (
                <SkeletonCard key={index} />
              ))
        )}
      </Gridlayout>
    </div>
  );
};

export default Home;
