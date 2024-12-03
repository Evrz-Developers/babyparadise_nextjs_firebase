import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const ProductCard = ({ product }) => {
  return (
    <Card className="pb-2" isPressable onPress={() => console.log("item pressed")}>
      {/* <CardBody className="overflow-visible py-2"> */}
        <Image
          alt="Card background"
          className="object-center rounded-xl mix-blend-multiply bg-white"
          src={product?.imageURL}
          layout="fixed" // Ensures the image maintains its aspect ratio
          width={200} // Fixed width
          height={200} // Fixed height
        />
      {/* </CardBody> */}
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold">{product?.price}</p>
        <h4 className="font-bold text-large">{product?.name}</h4>
      </CardHeader>
    </Card>
  );
};

export default ProductCard;