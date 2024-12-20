import React, { useEffect, useState } from "react";
import useCartStore from "@/store/useCartStore";
import useLoggedUserStore from "@/store/useLoggedUserStore";
import CART_API from "@/utilities/api/cart.api";
import { toast } from "react-toastify";
import EmptyCart from "./EmptyCart";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const Cart = () => {
  const { products, setProducts } = useCartStore();
  const [loading, setLoading] = useState(true);
  const { user } = useLoggedUserStore();

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (user?.uid) {
          const { data } = await CART_API.getProductsInCart(user.uid);
          const mappedData = data.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            imageURL: item.imageURL,
          }));
          setProducts(mappedData);
        } else {
          // Get items from localStorage when not logged in
          const localCartItems =
            JSON.parse(localStorage.getItem("cartItems")) || [];
          setProducts(localCartItems);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart:", error);
        toast.error("Failed to load cart items");
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [user, setProducts]);

  // Handle quantity update
  const handleUpdateQuantity = async (
    cartItemId,
    currentQuantity,
    increment
  ) => {
    try {
      const newQuantity = increment ? currentQuantity + 1 : currentQuantity - 1;

      if (newQuantity < 1) {
        return; // Don't allow quantity less than 1
      }

      // Optimistically update the UI first
      setProducts(
        products.map((item) =>
          item.id === cartItemId ? { ...item, quantity: newQuantity } : item
        )
      );

      // Then make the API call
      try {
        await CART_API.updateProductQuantityInCart(
          cartItemId,
          newQuantity,
          user.uid
        );
      } catch (error) {
        // If API call fails, revert the optimistic update
        setProducts(
          products.map((item) =>
            item.id === cartItemId
              ? { ...item, quantity: currentQuantity }
              : item
          )
        );
        toast.error("Failed to update quantity. Please try again.");
        console.error("Error updating quantity:", error);
      }
    } catch (error) {
      console.error("Error in quantity update:", error);
    }
  };

  // Handle remove item
  const handleRemoveItem = async (cartItemId) => {
    try {
      // Optimistically remove item from UI
      const previousProducts = [...products];
      setProducts(products.filter((item) => item.id !== cartItemId));

      // Then make the API call
      try {
        await CART_API.deleteProductFromCart(cartItemId, user.uid);
      } catch (error) {
        // If API call fails, revert the optimistic update
        setProducts(previousProducts);
        toast.error("Failed to remove item. Please try again.");
        console.error("Error removing item:", error);
      }
    } catch (error) {
      console.error("Error in remove item:", error);
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (products.length === 0) {
    return <EmptyCart isLoggedIn={user ? true : false} />;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <div className="space-y-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">₹{item.price}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    handleUpdateQuantity(item.id, item.quantity, false)
                  }
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    handleUpdateQuantity(item.id, item.quantity, true)
                  }
                  className="px-2 py-1 bg-gray-200 rounded"
                >
                  +
                </button>
              </div>

              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 text-right">
        <p className="text-lg font-bold">
          Total: ₹
          {products.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
        </p>
      </div>
    </div>
  );
};

export default Cart;
