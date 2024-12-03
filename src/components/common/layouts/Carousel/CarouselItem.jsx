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
        fill 
        style={{ objectFit: 'cover' }} 
        className="rounded-md" 
      />
    </div>
  );
};

export default CarouselItem;