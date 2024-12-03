"use client";

import React, { useEffect, useState } from "react";
import Gridlayout from "@/components/common/layouts/Gridlayout";
import ProductCard from "@/components/shop/product/ProductCard";
import SkeletonCard from "@/components/shop/product/SkeletonProductCard";
import useProductStore from "@/store/useProductStore";
import CarouselLayout from "@/components/common/layouts/Carousel/CarouselLayout"; 
import CarouselItem from "@/components/common/layouts/Carousel/CarouselItem";
import FUNCTIONS from "@/utilities/functions";
import Image from "next/image";

const Home = ({ initialProducts = [], category = "" }) => {
  const { products, setProducts } = useProductStore();
  const [loading, setLoading] = useState(false);
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    console.log("Setting initial products...");
    setProducts(initialProducts);
    setLoading(false);
    console.log("Initial products set:", initialProducts);
  }, [initialProducts, setProducts]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const imageUrls = await FUNCTIONS.CAROUSEL.GET_IMAGES();
        console.log("Image URLs:", imageUrls);
        setImageUrls(imageUrls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="home-container w-full">
      {/* Carousel */}
      {imageUrls.length > 0 && (
        <CarouselLayout className="mb-4 md:max-h-[60vh]k" items={imageUrls.map((url, index) => (
          <CarouselItem
            key={index}
            src={url}
            alt={`Carousel Image ${index + 1}`}
            className="h-64 md:h-96"
            onClick={() => console.log(`Clicked on image ${index + 1}`)} // Example onClick function
          />
        ))} />
      )}
      {/* Offers */}
      <div className="mb-4">
        <h2 className="text-lg md:text-xl font-bold">Offers here</h2>
      </div>
      {/* Products */}
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
