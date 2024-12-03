import React, { useState, useEffect } from "react";
import PRODUCT_API from "@/utilities/api/products";
import { useRouter } from "next/navigation";
import ProductGrid from "./ProductGrid";
import Loader from "@/components/common/Loader";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const router = useRouter();

  const handleClick = (productId) => {
    router.push(`product/${productId}`);
  };

  // Fetch products
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await PRODUCT_API.getAllProducts();
        setProducts(response?.data);
      } catch (error) {
        // TODO: Remove log
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false); 
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        // TODO: Show loader if needed
        <div className="flex justify-center items-center h-full pb-60">
          {/* <Loader className="bg-opacity-30" /> */}
        </div>
      ) : (
        <div className="px-4 overflow-y-auto overscroll-y-none">
          <ProductGrid
            items={products}
            handleListItemClick={handleClick}
            clickable={true}
            showImage={true}
            className={""} />
        </div>
      )}
    </>
  );
};

export default Product;
