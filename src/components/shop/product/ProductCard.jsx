import { CustomimageLoader } from "@/components/common/CustomImageLoader";
import ContentWrapper from "@/components/common/layouts/ContentWrapper";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import CONSTANTS from "@/utilities/constants";
import useCartStore from "@/store/useCartStore";
import useLoggedUserStore from "@/store/useLoggedUserStore";
import { toast } from "react-toastify";
import useDrawerStore from "@/store/useDrawerStore";

const ProductCard = ({ product, index }) => {
  const { addProduct } = useCartStore();
  const {
    onCartOpen,
    setCartDrawerContent,
  } = useDrawerStore();

  const router = useRouter();

  const handleProductClick = () => {
    const productData = JSON.stringify(product);
    router.push(
      `/products/${product?.id}?product=${encodeURIComponent(productData)}`
    );
  };

  const handleAddToCart = async () => {
    try {
      const productToAdd = {
        id: product.id,
        name: product.name,
        price: product.price,
        imageURL: product.imageURL,
        quantity: 1,
        discount: product.discount || 0,
      };

      await addProduct(productToAdd);

      toast.success(
        <div className="flex flex-col">
          <span>{product?.name} added to cart!</span>
          <button
            onClick={() => {
              setCartDrawerContent("cart");
              onCartOpen();
            }}
            className="mt-2 text-sm bg-orange-100 text-orange-600 px-2 py-1 rounded hover:bg-orange-200"
          >
            Go to Cart
          </button>
        </div>,
        {
          autoClose: 5000,
          closeOnClick: false,
        }
      );
    } catch (error) {
      console.error("Error adding to cart:", error);
      toast.error("Failed to add product to cart. Please try again.");
    }
  };

  return (
    <ContentWrapper>
      <Card
        shadow="sm"
        key={index}
        isPressable
        className="rounded-none rounded-t-md"
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
        className="flex bg-orange-50 rounded-none rounded-b-xl"
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
