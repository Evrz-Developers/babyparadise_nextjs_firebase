import React from "react";

const LoadingSpinner = ({ className }) => {
  return (
    <div className={`flex items-center justify-center h-full ${className}`}>
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
    </div>
  );
};

export default LoadingSpinner;
