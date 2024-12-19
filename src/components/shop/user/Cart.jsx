import React from "react";
import ListLayout from "@/components/common/layouts/ListLayout";
import ProductListItem from "@/components/shop/product/ProductListItem";
import EmptyCart from "@/components/shop/user/EmptyCart";
import ContentWrapper from "@/components/common/layouts/ContentWrapper";
import useCartStore from "@/store/useCartStore";
import CART_API from "@/utilities/api/cart.api";
import LoadingSpinner from "@/components/common/LoadingSpinner";

const Cart = ({ onClose, isLoggedIn }) => {
  const {
    products,
    removeProduct,
    updateQuantity,
    totalPrice,
    totalDiscount,
    isLoading,
  } = useCartStore();
  const deliveryCharges = 0;

  const handleRemoveProduct = async (id) => {
    if (isLoggedIn) {
      await CART_API.deleteProductFromCart(id);
    }
    removeProduct(id);
  };

  const handleUpdateQuantity = async (id, quantity) => {
    if (isLoggedIn) {
      await CART_API.updateProductQuantityInCart(id, quantity);
    }
    updateQuantity(id, quantity);
  };

  const handlePlaceOrder = () => {
    onClose();
  };

  if (isLoading) {
    return (
      <ContentWrapper className="flex justify-center items-center h-64">
        <LoadingSpinner />
      </ContentWrapper>
    );
  }

  return (
    <ContentWrapper
      className={`pt-2 ${
        products.length === 0 ? "my-10 justify-center items-center" : ""
      }`}
    >
      {products.length === 0 ? (
        <EmptyCart />
      ) : (
        <main className="flex flex-col md:flex-row w-full">
          <section className="flex flex-col w-full md:w-3/4 overflow-hidden overflow-y-scroll scrollbar-hide md:order-1 order-2">
            <header className="flex text-lg font-semibold border p-4 gap-2">
              Deliver to: Thrissur - 680311
              <button className="text-blue-500">Change</button>
            </header>
            <ListLayout>
              {products.map((item) => (
                <ProductListItem
                  key={item.id}
                  productName={item.name}
                  productDescription={item.description}
                  seller={item.seller}
                  price={item.price}
                  discount={item.discount}
                  quantity={item.quantity}
                  onQuantityChange={(quantity) =>
                    handleUpdateQuantity(item.id, quantity)
                  }
                  onRemove={() => handleRemoveProduct(item.id)}
                />
              ))}
            </ListLayout>
          </section>
          <section className="flex flex-col w-full md:w-1/4 p-4 border bg-background sticky top-4 md:order-2 order-1">
            <h2 className="text-lg font-bold">PRICE DETAILS</h2>
            <p>
              Price ({products.length} items): ₹{totalPrice()}
            </p>
            <p>Discount: -₹{totalDiscount()}</p>
            <p>Delivery Charges: ₹{deliveryCharges}</p>
            <h3 className="text-xl font-bold">
              Total Amount: ₹{totalPrice() - totalDiscount() + deliveryCharges}
            </h3>
            <p className="text-green-500">
              You will save ₹{totalDiscount()} on this order
            </p>
            <button className="mt-4 w-full bg-color-primary-p60 text-white py-2 rounded">
              PLACE ORDER
            </button>
          </section>
        </main>
      )}
    </ContentWrapper>
  );
};

export default Cart;
