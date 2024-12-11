"use client";

import React from "react";
import ListLayout from "@/components/common/layouts/ListLayout";
import ProductListItem from "@/components/shop/product/ProductListItem";
import EmptyCart from "@/components/shop/user/EmptyCart";
import ContentWrapper from "@/components/common/layouts/ContentWrapper";

const Cart = ({ products }) => {
  const items = products;
  const totalPrice = items.reduce((total, item) => total + item.price, 0);
  const totalDiscount = items.reduce((total, item) => total + item.discount, 0);
  const deliveryCharges = 0; // Set delivery charges as needed
  const EMPTYCARTSTYLES = "my-10 justify-center items-center";

  const handleQuantityChange = (id, change) => {
    // TODO: ADD LOGIC TO UPDATE QUANTITY 
  };

  const handleSaveForLater = (id) => {
    // TODO: ADD LOGIC TO SAVE ITEM FOR LATER
  };

  const handleRemove = (id) => {
    // TODO: ADD LOGIC TO REMOVE ITEM FROM CART
  };

  return (
    <ContentWrapper
      className={`pt-2 ${items.length === 0 ? EMPTYCARTSTYLES : ""}`}
    >
      {items.length === 0 && <EmptyCart />}
      {items.length > 0 && (
        // Cart Container
        <main className="flex flex-col md:flex-row w-full">
          {/* Left Side : Cart Items */}
          <section className="flex flex-col w-full md:w-3/4 overflow-hidden overflow-y-scroll scrollbar-hide md:order-1 order-2">
            <header className="flex text-lg font-semibold border p-4 gap-2">
              Deliver to: Thrissur - 680311
              <button className="text-blue-500">Change</button>
            </header>
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
                  onQuantityChange={(change) =>
                    handleQuantityChange(item.id, change)
                  }
                  onSaveForLater={() => handleSaveForLater(item.id)}
                  onRemove={() => handleRemove(item.id)}
                />
              ))}
            </ListLayout>
          </section>
          {/* Right Side : Price Details */}
          <section className="flex flex-col w-full md:w-1/4 p-4 border bg-background sticky top-4 md:order-2 order-1 ">
            {items.length > 0 && (
              <>
                <h2 className="text-lg font-bold">PRICE DETAILS</h2>
                <p>
                  Price ({items.length} items): ₹{totalPrice}
                </p>
                <p>Discount: -₹{totalDiscount}</p>
                <p>Delivery Charges: ₹{deliveryCharges}</p>
                <h3 className="text-xl font-bold">
                  Total Amount: ₹{totalPrice - totalDiscount + deliveryCharges}
                </h3>
                <p className="text-green-500">
                  You will save ₹{totalDiscount} on this order
                </p>
                <button className="mt-4 w-full bg-color-primary-p60 text-white py-2 rounded">
                  PLACE ORDER
                </button>
              </>
            )}
          </section>
        </main>
      )}
    </ContentWrapper>
  );
};

export default Cart;
