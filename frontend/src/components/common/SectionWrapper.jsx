const SectionWrapper = ({ children, className = "" }) => {
    return (
      <section className={`min-h-[calc(100vh-4.6rem)] pt-[4.6rem] md:pt-[4.2rem] w-[98%] md:w-[96%] mx-auto mb-14  ${className}`}>
        {children}
      </section>
    );
  };
  
  export default SectionWrapper;
  