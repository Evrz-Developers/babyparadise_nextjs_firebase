import React, { useEffect, useState } from "react";
import useCartStore from "@/store/useCartStore";
import useLoggedUserStore from "@/store/useLoggedUserStore";
import CART_API from "@/utilities/api/cart.api";
import { toast } from "react-toastify";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useLoggedUserStore();

  // Fetch cart items
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        if (user?.uid) {
          const { data } = await CART_API.getProductsInCart(user.uid);
          setCartItems(data);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart:", error);
        toast.error("Failed to load cart items");
        setLoading(false);
      }
    };

    fetchCartItems();
  }, [user]);

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

      await CART_API.updateProductQuantityInCart(
        cartItemId,
        newQuantity,
        user.uid
      );

      // Update local state
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === cartItemId ? { ...item, quantity: newQuantity } : item
        )
      );
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  // Handle remove item
  const handleRemoveItem = async (cartItemId) => {
    try {
      await CART_API.deleteProductFromCart(cartItemId, user.uid);

      // Update local state
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.id !== cartItemId)
      );
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (cartItems.length === 0) {
    return <div>Your cart is empty</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="border p-4 rounded-lg flex justify-between items-center"
          >
            <div>
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-gray-600">₹{item.price}</p>
            </div>

            <div className="flex items-center gap-4">
              {/* Quantity controls */}
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

              {/* Remove button */}
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

      {/* Cart total */}
      <div className="mt-6 text-right">
        <p className="text-lg font-bold">
          Total: ₹
          {cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
          )}
        </p>
      </div>
    </div>
  );
};

export default Cart;
