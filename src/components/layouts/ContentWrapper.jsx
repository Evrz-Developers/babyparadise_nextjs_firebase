import React from 'react';

const ContentWrapper = ({ children }) => {
  return <div className="p-4 md:px-8 lg:px-16 mx-auto max-w-screen-xl">{children}</div>;
};

export default ContentWrapper;
