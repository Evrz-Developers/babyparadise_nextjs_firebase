"use client";

import React, { useEffect, useState } from "react";
import Gridlayout from "@/components/common/layouts/Gridlayout";
import ProductCard from "@/components/shop/product/ProductCard";
import useProductStore from "@/store/useProductStore";
import useCarouselStore from "@/store/useCarouselStore";
import ContentWrapper from "@/components/common/layouts/ContentWrapper";
import { Skeleton } from "@nextui-org/skeleton";
import AutoplayCarousel from "@/components/common/layouts/Carousel/AutoplayCarousel";

const Home = ({ initialData }) => {
  const { products, setProducts } = useProductStore();
  const { carousel, setCarousel } = useCarouselStore();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setProducts(initialData.PRODUCTS);
    setCarousel(initialData.CAROUSEL);
    setIsLoaded(true);
  }, [initialData.CAROUSEL, initialData.PRODUCTS, setCarousel, setProducts]);
  console.log(carousel);
  return (
    <ContentWrapper className="gap-4">
      {/* Carousel */}
      {carousel.length > 0 && (
        <Skeleton isLoaded={true}>
          <AutoplayCarousel items={carousel} />
        </Skeleton>
      )}
      {/* Offers */}
      {/* <div className="mb-4">
        <h2 className="text-lg md:text-xl font-bold">Offers here</h2>
        </div> */}
      {/* Products */}
      <Skeleton isLoaded={isLoaded}>
        <Gridlayout>
          {products.map((product, index) => (
            <Skeleton key={product?.id} isLoaded={true}>
              <ProductCard key={product?.id} product={product} index={index} />
            </Skeleton>
          ))}
        </Gridlayout>
      </Skeleton>
    </ContentWrapper>
  );
};

export default Home;
