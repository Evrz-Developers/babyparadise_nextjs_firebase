import React, { useState, useEffect } from "react";

const LoadingSpinner = ({
  className,
  initialMessage = "",
  delayedMessage = "",
  delay = null,
}) => {
  const [showDelayedMessage, setShowDelayedMessage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowDelayedMessage(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`flex flex-col items-center justify-center h-full gap-4 ${className}`}
    >
      {initialMessage && (
        <p className="text-sm text-gray-500">
          {showDelayedMessage ? delayedMessage : initialMessage}
        </p>
      )}
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  );
};

export default LoadingSpinner;
