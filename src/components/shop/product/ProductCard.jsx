import { CustomimageLoader } from "@/components/common/CustomImageLoader";
import ContentWrapper from "@/components/common/layouts/ContentWrapper";
import { Button } from "@nextui-org/button";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

const ProductCard = ({ product, index }) => {
  const router = useRouter();
  // PUSH TO DETAILS PAGE, WITH PRODUCT DATA IN QUERY PARAMS
  const handleProductClick = () => {
    const productData = JSON.stringify(product);
    router.push(
      `/products/${product?.id}?product=${encodeURIComponent(productData)}`
    );
  };

  return (
    // TODO: Remove log
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
            // radius="lg"
            width="100"
            height={200}
            alt={product?.name}
            className="w-full object-cover h-[140px] rounded-none rounded-t-md"
            src={product?.imageURL}
            layout="fixed"
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          {/* <p className="text-tiny uppercase font-bold">{product?.price}</p> */}
          <h4 className="font-bold text-large">{product?.name}</h4>
        </CardFooter>
      </Card>
      <Button
        size="sm"
        className=" flex bg-orange-50 rounded-none rounded-b-xl"
        variant="ghost"
        color="warning"
        // radius="md"
        onPress={() => console.log("button pressed")}
      >
        Add to Cart
      </Button>
    </ContentWrapper>
  );
};

export default ProductCard;
