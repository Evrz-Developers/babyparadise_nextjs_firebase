import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

export default function App() {
  return (
    <Card className="pb-2 bg-white">
      {/* <CardBody className="overflow-visible py-2"> */}
      <Image
          alt="Card background"
          className="object-center rounded-xl mix-blend-soft-light bg-white"
          src={null}
          width={200} // Fixed width
          height={250} // Fixed height
        />
      {/* </CardBody> */}
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="text-tiny uppercase font-bold"></p>
        <h4 className="font-bold text-large"></h4>
      </CardHeader>
    </Card>
  );
}