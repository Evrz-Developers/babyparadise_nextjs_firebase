// EmptyCart.js
import React from "react";
import { FaOpencart } from "react-icons/fa6";
import { Button } from "@nextui-org/button";
import useDrawerStore from "@/store/useDrawerStore";
import Image from "next/image";

const EmptyCart = ({ className = "", isLoggedIn = false }) => {
  const { openLoginDrawer, onCartClose } = useDrawerStore();

  return (
    <div
      className={`flex flex-col items-center justify-center h-full ${className}`}
    >
      <div className="mb-4">
        {/* <FaOpencart size={128} className="text-4xl text-color-primary-p40" /> */}
        <Image
          src="/images/empty_cart.png"
          alt="Empty Cart"
          width={128}
          height={128}
          priority
        />
      </div>
      {isLoggedIn ? (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-2">Oops! Cart empty??</h2>
          <p className="text-gray-600 text-xs mb-2">Add some products!</p>
          <Button
            onPress={onCartClose}
            className="mt-4 bg-color-primary-p60 text-white"
          >
            Shop
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-2">Oops! Missing Cart items?</h2>
          <p className="text-gray-600 text-xs mb-2">Log in now to shop!</p>
          <Button
            onPress={openLoginDrawer}
            className="mt-4 bg-color-primary-p60 text-white"
          >
            Log in
          </Button>
        </div>
      )}
    </div>
  );
};

export default EmptyCart;
