import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const ProductCard = ({ product }) => {
  return (
    <Card className="pb-4">
      {/* <CardBody className="overflow-visible py-2"> */}
        <Image
          alt="Card background"
          className="object-cover rounded-xl mix-blend-multiply bg-transparent"
          src="/images/shop/bp1.jpg"
          width={270}
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