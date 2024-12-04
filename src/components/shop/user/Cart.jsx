// Cart.js
"use client"
import React from 'react';
import ListLayout from '@/components/common/layouts/ListLayout';
import ProductListItem from '@/components/shop/product/ProductListItem';
import EmptyCart from '@/components/shop/user/EmptyCart';
import { dummyCartItems } from '@/components/shop/user/dummyCartData'; // Import the dummy data

const Cart = () => {
  const items = dummyCartItems; // Use dummy data here
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const totalDiscount = items.reduce((total, item) => total + item.discount, 0);
  const deliveryCharges = 0; // Set delivery charges as needed

  const handleQuantityChange = (id, change) => {
    // Logic to update quantity
  };

  const handleSaveForLater = (id) => {
    // Logic to save item for later
  };

  const handleRemove = (id) => {
    // Logic to remove item from cart
  };

  return (
    <div className="cart-container w-full flex my-10">
        {/* Left Side : Cart Items */}
      <div className="w-3/4 p-4 overflow-hidden max-h-[calc(100lvh-100px)] overflow-y-scroll scrollbar-hide" >
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            <div className="my-4">
              <h2 className="text-lg font-semibold">Deliver to: Thrissur - 680311</h2>
              <button className="text-blue-500">Change</button>
            </div>
            <ListLayout>
              {items.map((item) => (
                <ProductListItem
                  key={item.id}
                  productName={item.name}
                  productDescription={item.description}
                  seller={item.seller}
                  price={item.price}
                  discount={item.discount}
                  quantity={item.quantity}
                  onQuantityChange={(change) => handleQuantityChange(item.id, change)}
                  onSaveForLater={() => handleSaveForLater(item.id)}
                  onRemove={() => handleRemove(item.id)}
                />
              ))}
            </ListLayout>
          </>
        )}
      </div>
      {/* Right Side : Price Details */}
      <div className="w-1/4 p-4 border-l sticky top-0 h-screen">
        {items.length > 0 && (
          <>
            <h2 className="text-lg font-bold">PRICE DETAILS</h2>
            <p>Price ({items.length} items): ₹{totalPrice}</p>
            <p>Discount: -₹{totalDiscount}</p>
            <p>Delivery Charges: ₹{deliveryCharges}</p>
            <h3 className="text-xl font-bold">Total Amount: ₹{totalPrice - totalDiscount + deliveryCharges}</h3>
            <p className="text-green-500">You will save ₹{totalDiscount} on this order</p>
            <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded">PLACE ORDER</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;