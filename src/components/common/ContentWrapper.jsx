// CONTENTWRAPPER FOR WRAPPING THE CONTENTS
const ContentWrapper = ({ children, className = "" }) => {
  return (
    <div className={`mx-auto max-w-screen-2xl px-6 py-1 sm:px-8 ${className}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
