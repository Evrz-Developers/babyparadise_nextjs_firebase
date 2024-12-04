import React from "react";
import Loader from "@/components/common/Loader";
import Image from "next/image";

const ProductDetails = ({ product }) => {
  console.log("product", product);
  return (
    <>
      {!product ? ( // Check if product data is available
        <Loader className="bg-opacity-30" />
      ) : product &&
        typeof product === "object" &&
        Object.keys(product).length > 0 ? (
        <div className="flex flex-col justify-center items-center">
          <h2 className="title flex justify-center text-heading-4 pb-2">
            {product?.name}
          </h2>
          <Image
            src={product?.imageURL}
            alt={product?.name}
            width={300}
            height={300}
          />
          <p>{product?.id}</p>
        </div>
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
