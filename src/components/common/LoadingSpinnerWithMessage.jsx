import React, { useState, useEffect } from "react";

const LoadingSpinnerWithMessage = ({
  className,
  initialMessage = "",
  delayMessage = "",
  secondaryMessage = "",
  delay = null,
  secondaryDelay = null,
}) => {
  const [currentMessage, setCurrentMessage] = useState(initialMessage);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentMessage(delayMessage);
    }, delay);

    const secondaryTimer = setTimeout(() => {
      setCurrentMessage(secondaryMessage);
    }, secondaryDelay);

    return () => {
      clearTimeout(secondaryTimer);
      clearTimeout(timer);
    };
  }, [delayMessage, secondaryMessage, delay, secondaryDelay]);

  return (
    <div
      className={`flex flex-col items-center justify-center h-full gap-4 ${className}`}
    >
      {initialMessage && (
        <p className="text-sm text-gray-500">{currentMessage}</p>
      )}
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  );
};

export default LoadingSpinnerWithMessage;
