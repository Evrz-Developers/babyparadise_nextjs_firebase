// CONTENTWRAPPER FOR WRAPPING THE CONTENTS WITH COMMON STYLING
const ContentWrapper = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
