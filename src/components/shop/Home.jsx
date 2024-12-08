"use client";

import React, { useEffect, useState } from "react";
import Gridlayout from "@/components/common/layouts/Gridlayout";
import ProductCard from "@/components/shop/product/ProductCard";
import useProductStore from "@/store/useProductStore";
import CarouselLayout from "@/components/common/layouts/Carousel/CarouselLayout";
import CarouselItem from "@/components/common/layouts/Carousel/CarouselItem";
import FUNCTIONS from "@/utilities/functions";
import Loader from "@/components/common/Loader";
import ContentWrapper from "@/components/common/layouts/ContentWrapper";

const Home = ({ initialData, category = "" }) => {
  const { products, setProducts } = useProductStore();
  const [loading, setLoading] = useState(false);
  const [imageURLs, setImageUrls] = useState([]);

  useEffect(() => {
    setProducts(initialData.PRODUCTS);
    setImageUrls(initialData.CAROUSEL);
    setLoading(false);
  }, [initialData, setProducts]);

  return (
    <ContentWrapper className="gap-4">
      {/* Carousel */}
      {imageURLs.length > 0 && (
        <CarouselLayout
          items={imageURLs.map((url, index) => (
            <CarouselItem
              key={index}
              src={url}
              alt={`Carousel Image ${index + 1}`}
              className="h-64 md:h-80"
              // TODO: Remove log
              onClick={() => console.log(`Clicked on image ${index + 1}`)} // Example onClick function
            />
          ))}
        />
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
          products.map((product, index) => (
            <ProductCard key={product?.id} product={product} index={index} />
          ))
        ) : (
          <Loader />
        )}
      </Gridlayout>
    </ContentWrapper>
  );
};

export default Home;
