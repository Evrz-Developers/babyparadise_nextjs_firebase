import ContentWrapper from "@/components/common/layouts/ContentWrapper";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import CONSTANTS from "@/utilities/constants";
import useCartStore from "@/store/useCartStore";
import { toast } from "react-toastify";
import useDrawerStore from "@/store/useDrawerStore";

const ProductCard = ({ product, index }) => {
  const { addProduct } = useCartStore();
  const { onCartOpen, setdrawerContent } = useDrawerStore();

  const router = useRouter();

  const handleProductClick = () => {
    const productData = JSON.stringify(product);
    router.push(
      `/products/${product?.id}?product=${encodeURIComponent(productData)}`
    );
  };

  const handleAddToCart = async () => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      imageURL: product.imageURL,
      quantity: 1,
      discount: product.discount || 0,
    };

    // Show success toast immediately (optimistic update)
    const toastId = toast.success(
      <div className="flex flex-row items-center justify-between gap-2 px-2">
        <span>Item added!</span>
        <Button
          size="sm"
          onPress={onCartOpen}
          className="text-sm bg-color-primary-p100 text-color-primary-p40 hover:bg-color-primary-p80"
        >
          View Cart
        </Button>
      </div>,
      {
        autoClose: 1000,
      }
    );

    try {
      await addProduct(productToAdd);
    } catch (error) {
      // If the operation fails, update the toast to show error
      console.error("Error adding to cart:", error);
      toast.update(toastId, {
        render: "Failed to add product to cart. Please try again.",
        type: toast.TYPE.ERROR,
        autoClose: 3000,
      });
    }
  };

  return (
    <ContentWrapper>
      <Card
        shadow="sm"
        key={index}
        isPressable
        className="rounded-none rounded-t-md transition-all duration-200 hover:scale-[1.03] hover:-translate-y-1"
        onPress={handleProductClick}
      >
        <CardBody className="overflow-visible p-0">
          <Image
            shadow="sm"
            width="100"
            height={200}
            alt={product?.name}
            className="w-full object-cover h-[140px] rounded-none rounded-t-md"
            src={product?.imageURL}
            layout="fixed"
          />
        </CardBody>
        <CardFooter className="flex flex-col text-small items-start justify-between">
          <h6 className="text-small uppercase font-bold">
            {product?.price ? (
              <span className="text-tiny">
                {CONSTANTS.SYMBOLS.CURRENCY}
                {product?.price}
              </span>
            ) : (
              CONSTANTS.PLACEHOLDER.CURRENCY
            )}
          </h6>
          <h4 className="font-bold text-large">{product?.name}</h4>
        </CardFooter>
      </Card>
      <Button
        size="sm"
        className="flex bg-orange-50 rounded-none rounded-b-xl transition-all duration-200 hover:scale-[1.03] hover:-translate-y-1"
        variant="ghost"
        color="warning"
        onPress={handleAddToCart}
      >
        Add to Cart
      </Button>
    </ContentWrapper>
  );
};

export default ProductCard;
