import React, { useEffect, useState } from "react";
import { Button } from "@nextui-org/button";
import { FaOpencart } from "react-icons/fa";
import useCartStore from "@/store/useCartStore";
import useLoggedUserStore from "@/store/useLoggedUserStore";
import useDrawerStore from "@/store/useDrawerStore";

const NavbarCart = ({ onOpen }) => {
  const { user } = useLoggedUserStore();
  const { products } = useCartStore();
  const { setdrawerContent } = useDrawerStore();
  const [mounted, setMounted] = useState(false);
  const [itemCount, setItemCount] = useState(0);

  // Handle hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const count = user?.uid ? products.length : 0;
    setItemCount(count);
  }, [products, user, mounted]);

  const handleCartOpen = () => {
    setdrawerContent("cart");
    onOpen();
  };

  // Don't show cart count until after hydration
  const showCount = mounted && itemCount > 0;

  return (
    <Button
      variant="flat"
      className="bg-color-primary-p100/35 text-color-secondary-s30 hover:bg-color-primary-p90 hover:text-color-secondary-s05"
      onPress={handleCartOpen}
    >
      <div className="flex items-center cursor-pointer relative">
        <FaOpencart className="h-5 w-5 mr-2" />
        <p className="font-medium">Cart</p>
        {showCount && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {itemCount}
          </span>
        )}
      </div>
    </Button>
  );
};

export default NavbarCart;
