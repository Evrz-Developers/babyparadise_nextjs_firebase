"use client";

import React from "react";
import Loader from "@/components/common/Loader";
import { Image } from "@nextui-org/image";
import ContentWrapper from "@/components/common/layouts/ContentWrapper";
import { Button } from "@nextui-org/button";

const ProductDetails = ({ product }) => {
  console.log("product", product);
  return (
    <>
      {!product ? ( // Check if product data is available
        <Loader className="bg-opacity-30" />
      ) : product &&
        typeof product === "object" &&
        Object.keys(product).length > 0 ? (
        <ContentWrapper className="flex flex-col md:flex-row justify-centerd md:justify-between items-center bg-color-primary-p40 rounded-md">
          <div className="flex flex-col justify-center items-center bg-color-primary-p80 rounded-md">
            <Image
              src={product?.imageURL}
              alt={product?.name}
              width={300}
              height={300}
            />
            <p>{product?.id}</p>
          </div>
          <div className="flex flex-col justify-center items-center bg-color-primary-p60 rounded-md">
            <h2 className="title flex justify-center text-heading-4 pb-2">
              {product?.name}
            </h2>
            <p>{product?.description}</p>
          </div>
          <Button
            size="sm"
            className=" flex bg-warning rounded-none rounded-b-lg"
            variant="solid"
            color="warning"
            // radius="md"
            onClick={() => console.log("button pressed")}
          >
            Add to Cart
          </Button>
        </ContentWrapper>
      ) : (
        <div>
          <h2 className="title flex justify-center text-heading-4 pb-2">
            No details to show!
          </h2>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
