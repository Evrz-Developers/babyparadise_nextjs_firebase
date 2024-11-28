// CONTENTWRAPPER FOR WRAPPING THE CONTENTS
const ContentWrapper = ({ children, className = "" }) => {
  return (
    <div className={`container mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default ContentWrapper;
