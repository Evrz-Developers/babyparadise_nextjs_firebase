import { useState, useRef, useEffect } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

// SlideItem Component
const SlideItem = ({ item }) => (
  <div className="min-w-full h-full flex-shrink-0 snap-start">{item}</div>
);

// CarouselIndicator Component
const CarouselIndicator = ({ index, currentIndex, onClick }) => (
  <div
    className={`w-1 h-1 md:w-3 md:h-3 rounded-sm cursor-pointer transition-colors duration-300 ${
      currentIndex === index ? "bg-blue-500" : "bg-gray-200"
    }`}
    onClick={onClick}
  />
);

// CarouselButton Component
const CarouselButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute top-1/2 transform -translate-y-1/2 ${
      direction === "left" ? "left-4" : "right-4"
    } rounded-full`}
  >
    {direction === "left" ? (
      <FaArrowCircleLeft
        size={22}
        className="md:size-10 text-color-primary-p100 hover:text-color-primary-p80"
      />
    ) : (
      <FaArrowCircleRight
        size={22}
        className="md:size-10 text-color-primary-p100 hover:text-color-primary-p80"
      />
    )}
  </button>
);

// CarouselLayout Component
const CarouselLayout = ({ items, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = (prevIndex + 1) % items.length;
      scrollToCurrentIndex(nextIndex);
      return nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => {
      const prevIndexValue = (prevIndex - 1 + items.length) % items.length;
      scrollToCurrentIndex(prevIndexValue);
      return prevIndexValue;
    });
  };

  const scrollToCurrentIndex = (index) => {
    if (scrollRef.current) {
      const scrollPosition = scrollRef.current.clientWidth * index;
      scrollRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const index = Math.round(scrollLeft / scrollRef.current.clientWidth);
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
    }

    // Auto-scroll
    const intervalId = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener("scroll", handleScroll);
      }
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div
        ref={scrollRef}
        className="flex transition-transform duration-300"
        style={{
          scrollSnapType: "x mandatory",
          overflowX: "auto",
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For Internet Explorer and Edge
        }}
      >
        {items.map((item, index) => (
          <SlideItem key={index} item={item} />
        ))}
      </div>
      {/* <CarouselButton direction="left" onClick={handlePrev} />
      <CarouselButton direction="right" onClick={handleNext} /> */}
      <div className="absolute bottom-2 left-[13%] md:left-[5%] transform -translate-x-1/2 flex space-x-2">
        {items.map((_, index) => (
          <CarouselIndicator
            key={index}
            index={index}
            currentIndex={currentIndex}
            onClick={() => {
              setCurrentIndex(index);
              scrollToCurrentIndex(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselLayout;
