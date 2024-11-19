import React from "react";
import DefaultFooter from "@/components/layouts/DefaultFooter";
import DefaultHeader from "@/components/layouts/DefaultHeader";
import PageWrapper from "@/components/layouts/PageWrapper";
import ContentWrapper from "@/components/layouts/ContentWrapper";

const DefaultLayout = ({ children, className = "", header = true, footer = true }) => {
  return (
    <PageWrapper className={className}>
      {header && <DefaultHeader />}
      <main className="flex flex-col flex-grow max-w-screen-2xl mx-auto w-full px-4 lg:px-6">
        <ContentWrapper>{children}</ContentWrapper>
      </main>
      {footer && <DefaultFooter />}
    </PageWrapper>
  );
};

export default DefaultLayout;
