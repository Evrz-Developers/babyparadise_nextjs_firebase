"use client";
import { Button } from "@nextui-org/button";
import { FaArrowUp } from "react-icons/fa";
import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <Button
      isIconOnly
      size="lg"
      className={`fixed bottom-8 right-3 bg-color-primary-p100/45 text-color-primary-p40 p-4 rounded-full shadow-md ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      variant="shadow"
      color="primary"
      onPress={scrollToTop}
    >
      <FaArrowUp />
    </Button>
  );
};

export default ScrollToTop;
