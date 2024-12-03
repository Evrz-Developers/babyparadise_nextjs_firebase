// CarouselItem.js
import Image from 'next/image';

const CarouselItem = ({ src, alt, className, onClick }) => {
  return (
    <div
      className={`relative min-w-full ${className} flex items-center justify-center cursor-pointer`} // Set position to relative
      onClick={onClick}
    >
      <Image 
        src={src} 
        alt={alt} 
        layout="fill" // Use fill layout to cover the parent div
        objectFit="cover" // Cover the entire area
        className="rounded-md" // Add any additional classes if needed
      />
    </div>
  );
};

export default CarouselItem;