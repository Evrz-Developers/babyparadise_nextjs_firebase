"use client";

import React, { useEffect, useState } from "react";
import Gridlayout from "@/components/common/layouts/Gridlayout";
import ProductCard from "@/components/shop/product/ProductCard";
import useProductStore from "@/store/useProductStore";
import useCarouselStore from "@/store/useCarouselStore";
import CarouselLayout from "@/components/common/layouts/Carousel/CarouselLayout";
import CarouselItem from "@/components/common/layouts/Carousel/CarouselItem";
import LoadingSpinner from "@/components/common/LoadingSpinner";
import ContentWrapper from "@/components/common/layouts/ContentWrapper";

const Home = ({ initialData }) => {
  const { products, setProducts } = useProductStore();
  const { carousel, setCarousel } = useCarouselStore();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setProducts(initialData.PRODUCTS);
    setCarousel(initialData.CAROUSEL);
    setLoading(false);
  }, [initialData.CAROUSEL, initialData.PRODUCTS, setCarousel, setProducts]);

  return (
    <ContentWrapper className="gap-4">
      {/* Carousel */}
      {carousel.length > 0 && (
        <CarouselLayout
          items={carousel.map((item, index) => (
            <CarouselItem
              key={index}
              src={item?.imageURL}
              alt={`slide ${index + 1}`}
              className="h-64 md:h-80"
              // TODO: Add link once ready
              // href={item?.link}
              href="#"
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
          <LoadingSpinner />
        ) : products && products.length > 0 ? (
          products.map((product, index) => (
            <ProductCard key={product?.id} product={product} index={index} />
          ))
        ) : (
          <LoadingSpinner />
        )}
      </Gridlayout>
    </ContentWrapper>
  );
};

export default Home;
