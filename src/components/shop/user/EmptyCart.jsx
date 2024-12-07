// EmptyCart.js
import React from "react";
import { FaOpencart } from "react-icons/fa6";
import LinkAsButton from "@/components/common/LinkAsButton";
const EmptyCart = ({ className }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center h-full ${className}`}
    >
      <div className="mb-4">
        <FaOpencart size={128} className="text-4xl text-color-primary-p40" />
      </div>
      <h2 className="text-xl font-bold">Missing Cart items?</h2>
      <p className="text-gray-600">
        Login to see the items you added previously
      </p>
      <LinkAsButton href="/login" className="mt-4">
        Login
      </LinkAsButton>
    </div>
  );
};

export default EmptyCart;
