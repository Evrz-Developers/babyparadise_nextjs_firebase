import React from 'react';
import MainNavbar from '@/components/common/MainNavbar';

const DefaultHeader = () => {
  return (
    <header className="bg-primary-background text-primary text-center border-b flex flex-col mx-auto w-full">
      <div className="w-full h-5s bg-purple-100">
        {/* TODO: Change title once fixed */}
        <MainNavbar title="SHOP" />
      </div>
    </header>
  );
};

export default DefaultHeader;
