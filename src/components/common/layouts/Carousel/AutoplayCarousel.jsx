import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const NavButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`hidden sm:flex absolute ${
      direction === "left" ? "left-2" : "right-2"
    } top-1/2 -translate-y-1/2 z-10 bg-white/40 hover:bg-white rounded-full p-2 shadow-md`}
    aria-label={`${direction === "left" ? "Previous" : "Next"} slide`}
  >
    {direction === "left" ? (
      <FiChevronLeft className="w-4 h-4" />
    ) : (
      <FiChevronRight className="w-4 h-4" />
    )}
  </button>
);

export default function AutoplayCarousel({ items }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const autoPlayRef = useRef();
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const handlePrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(handleNext, 3000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  });

  const handleDragEnd = (_, info) => {
    const threshold = 50;
    if (Math.abs(info.offset.x) > threshold) {
      if (info.offset.x > 0) {
        handlePrevious();
      } else {
        handleNext();
      }
    }
    setIsDragging(false);
  };

  const handleClick = (id) => {
    if (!isDragging) {
      console.log(`Clicked on: ${id}`);
    }
  };

  const handleDotClick = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  if (!items || items.length === 0) {
    return null;
  }

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <div
      className="w-full overflow-hidden relative"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="relative h-56 sm:h-96">
        <NavButton direction="left" onClick={handlePrevious} />
        <NavButton direction="right" onClick={handleNext} />

        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute w-full h-full"
            drag="x"
            dragElastic={1}
            dragMomentum={true}
            dragConstraints={{ left: 0, right: 0 }}
            onDragStart={() => setIsDragging(true)}
            onDragEnd={handleDragEnd}
            whileDrag={{ cursor: "grabbing" }}
            style={{ cursor: "grab" }}
          >
            <div className="h-full">
              <div
                onClick={() => handleClick(items[currentIndex].id)}
                className="relative w-full h-full cursor-pointer"
              >
                <Image
                  src={items[currentIndex].imageURL}
                  alt={`Slide ${items[currentIndex].id}`}
                  fill
                  className="rounded-lg"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-4">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentIndex === index ? "bg-blue-500 w-4" : "bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
