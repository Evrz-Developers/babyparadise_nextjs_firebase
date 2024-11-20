import React from 'react';

const ComponentWrapper = ({
  children,
  className,
}) => {
  return (
    <div className={`py-[54px] md:py-[120px] ${className}`}>{children}</div>
  );
};

export default ComponentWrapper;
