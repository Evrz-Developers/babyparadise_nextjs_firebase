// CarouselItem
import Image from "next/image";

const CarouselItem = ({ src, alt, className, onClick }) => {
  return (
    <div
      className={`relative min-w-full ${className} flex items-center justify-center cursor-pointer`}
      onClick={onClick}
      style={{ height: "auto", aspectRatio: "851 / 315" }} // Maintain aspect ratio
    >
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "contain" }}
        className="rounded-md"
        priority
      />
    </div>
  );
};

export default CarouselItem;
