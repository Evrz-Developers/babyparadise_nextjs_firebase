// EmptyCart.js
import React from "react";
import { FaOpencart } from "react-icons/fa6";
import { Button } from "@nextui-org/button";
import useDrawerStore from "@/store/useDrawerStore";

const EmptyCart = ({ className = "", isLoggedIn = false }) => {
  const { openLoginDrawer, onCartClose } = useDrawerStore();

  return (
    <div
      className={`flex flex-col items-center justify-center h-full ${className}`}
    >
      <div className="mb-4">
        <FaOpencart size={128} className="text-4xl text-color-primary-p40" />
      </div>
      <h2 className="text-xl font-bold mb-2">Oops! Missing Cart items?</h2>
      {isLoggedIn ? (
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-600 text-xs mb-2">
            Add products to your cart.
          </p>
          <Button
            onPress={onCartClose}
            className="mt-4 bg-color-primary-p60 text-white"
          >
            Add Products
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <p className="text-gray-600 text-xs mb-2">
            Log in to proceed with checkout
          </p>
          <Button
            onPress={openLoginDrawer}
            className="mt-4 bg-color-primary-p60 text-white"
          >
            Login
          </Button>
        </div>
      )}
    </div>
  );
};

export default EmptyCart;
