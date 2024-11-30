import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const ProductCard = ({ product }) => {
  return (
    <Card className="pb-2 bg-white" isPressable onPress={() => console.log("item pressed")}>
      {/* <CardBody className="overflow-visible py-2"> */}
        <Image
          alt="Card background"
          className="object-center rounded-xl mix-blend-soft-light bg-white"
          src="/images/shop/test.jpg"
          layout="fixed" // Ensures the image maintains its aspect ratio
          width={200} // Fixed width
          height={200} // Fixed height
        />
      {/* </CardBody> */}
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{product?.price}</p>
        <h4 className="font-bold text-large">{product?.name}</h4>
        <small className="text-default-500">{product?.productCode}</small>
      </CardHeader>
    </Card>
  );
};

export default ProductCard;