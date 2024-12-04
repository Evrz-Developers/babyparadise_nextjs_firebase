// CONTENTWRAPPER FOR WRAPPING THE CONTENTS WITH COMMON STYLING
const ContentWrapper = ({ children, className = "" }) => {
  return <div className={`py-4 ${className}`}>{children}</div>;
};

export default ContentWrapper;
