import React from 'react';

const PageWrapper = ({ children, className = "" }) => {
  return (
    <div className={`min-h-screen flex flex-col ${className}`}>
      {children}
    </div>
  );
};

export default PageWrapper;
