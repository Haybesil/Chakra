import React from 'react';

const Bg = '/slides/whyChakraBg.svg'

const WhyChakra = () => {
  return (
    <div 
      className="w-full overflow-hidden py-12 sm:py-[100px] px-6 sm:px-10 xl:px-20" 
      id="product" 
      style={{ background: "url(/slides/whyChakraBg.svg) top" }}
    >
      <div className="max-w-[1280px] mx-auto w-full overflow-hidden flex flex-col justify-between items-center gap-9 lg:gap-12 xl:gap-16">
        <div className="inline-flex flex-col justify-start items-center gap-4 lg:gap-6">
          <div className="text-[#36351e] text-[28px] lg:text-[32px] xl:text-[40px] 2xl:text-[46px] font-medium capitalize leading-none">
            <span className="italic">Why </span> Chakra ?
          </div>
          <div className="text-center text-[#36351e] text-base lg:text-2xl font-normal capitalize leading-[19px] lg:leading-[28.80px]">
            Enhance and secure your cross-chain liquidity with ease
          </div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Card 1 */}
          <div className="bg-white w-full p-6 sm:p-12 rounded-xl border border-[#36351e]/10 flex-col justify-start items-start gap-8 inline-flex">
            <img 
              alt="Efficient Transaction Processing" 
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]" 
              width="100" 
              height="100" 
              src="/slides/whyChakra1.svg" 
            />
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-[#36351e] text-xl sm:text-2xl font-medium leading-normal sm:leading-[28.80px]">
                Efficient Transaction Processing
              </div>
              <div className="self-stretch text-[#36351e] text-sm sm:text-base font-normal leading-tight sm:leading-snug">
                Chakra reduces the number of votes required by utilizing Merkle Tree Root voting. Validation of the transactions are within 3 seconds
              </div>
            </div>
          </div>
          
          {/* Card 2 */}
          <div className="bg-white w-full p-6 sm:p-12 rounded-xl border border-[#36351e]/10 flex-col justify-start items-start gap-8 inline-flex">
            <img 
              alt="Optimized Resource Utilization" 
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]" 
              width="101" 
              height="100" 
              src="/slides/whyChakra2.svg" 
            />
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-[#36351e] text-xl sm:text-2xl font-medium leading-normal sm:leading-[28.80px]">
                Optimized Resource Utilization for Scalability
              </div>
              <div className="self-stretch text-[#36351e] text-sm sm:text-base font-normal leading-tight sm:leading-snug">
                Chakra dynamically optimizes validators into collectors and verifiers to enhance scalability
              </div>
            </div>
          </div>
          
          {/* Card 3 */}
          <div className="bg-white w-full p-6 sm:p-12 rounded-xl border border-[#36351e]/10 flex-col justify-start items-start gap-8 inline-flex">
            <img 
              alt="Enhanced Security and Reliability" 
              className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px]" 
              width="101" 
              height="100" 
              src="/slides/whyChakra3.svg" 
            />
            <div className="self-stretch flex-col justify-start items-start gap-4 flex">
              <div className="self-stretch text-[#36351e] text-xl sm:text-2xl font-medium leading-normal sm:leading-[28.80px]">
                Enhanced Security and Reliability
              </div>
              <div className="self-stretch text-[#36351e] text-sm sm:text-base font-normal leading-tight sm:leading-snug">
                Chakra adopts shared consensus information within the Merkle Tree to ensure validators collectively agree on transactions
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChakra;