"use client";

import React, { useEffect, useState } from "react";
import Gridlayout from "@/components/common/layouts/Gridlayout";
import ProductCard from "@/components/shop/product/ProductCard";
import useProductStore from "@/store/useProductStore";
import CarouselLayout from "@/components/common/layouts/Carousel/CarouselLayout"; 
import CarouselItem from "@/components/common/layouts/Carousel/CarouselItem";
import FUNCTIONS from "@/utilities/functions";
import Loader from "@/components/common/Loader";

const Home = ({ initialData, category = "" }) => {
  const { products, setProducts } = useProductStore();
  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    // TODO: Remove log
    console.log("Setting initial data...");
    setProducts(initialData.PRODUCTS);
    setImageUrls(initialData.CAROUSEL);
    setLoading(false);
    // TODO: Remove log
    console.log("Initial data set:", initialData);
  }, [initialData, setProducts]);


  return (
    <div className="home-container w-full">
      {/* Carousel */}
      {imageUrls.length > 0 && (
        <CarouselLayout className="md:max-h-[60vh]f" items={imageUrls.map((url, index) => (
          <CarouselItem
            key={index}
            src={url}
            alt={`Carousel Image ${index + 1}`}
            className="h-64 md:h-80"
            // TODO: Remove log
            onClick={() => console.log(`Clicked on image ${index + 1}`)} // Example onClick function
          />
        ))} />
      )}
      {/* Offers */}
      {/* <div className="mb-4">
        <h2 className="text-lg md:text-xl font-bold">Offers here</h2>
      </div> */}
      {/* Products */}
      <Gridlayout>
        {loading ? (
          <Loader />
        ) : products && products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <Loader />
        )}
      </Gridlayout>
    </div>
  );
};

export default Home;
