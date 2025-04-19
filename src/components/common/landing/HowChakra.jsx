import React from 'react';

const HowChakraWorks = () => {
  return (
    <div className="w-full relative bg-[#f5f1e6] py-12 sm:py-16 xl:py-[100px] px-6 sm:px-10 xl:px-20" id="works">
      <div className="w-full sm:max-w-[1280px] mx-auto flex flex-col justify-between items-center gap-9 lg:gap-12 xl:gap-16">
        <div className="inline-flex flex-col justify-between items-center gap-4 lg:gap-6">
          <div className="text-[#451e17] text-[28px] sm:text-[32px] lg:text-[40px] xl:text-5xl font-medium capitalize leading-none">
            <span className="italic">How</span> Chakra Works
          </div>
          <div className="text-center text-[#451e17] text-base lg:text-xl xl:text-2xl font-normal capitalize leading-[19px] lg:leading-[20px] xl:leading-[24px]">
            the first modular design of BTC settlement
          </div>
        </div>
        
        <div className="w-full">
          {/* Desktop image */}
          <img 
            alt="How Chakra Works diagram" 
            className="hidden sm:block w-full h-auto" 
            width="944" 
            height="393" 
            src="/slides/how1.svg" 
          />
          
          {/* Mobile image */}
          <img 
            alt="How Chakra Works diagram" 
            className="block sm:hidden w-full h-auto" 
            width="345" 
            height="442" 
            src="/slides/how2.svg" 
          />
        </div>
      </div>
    </div>
  );
};

export default HowChakraWorks;