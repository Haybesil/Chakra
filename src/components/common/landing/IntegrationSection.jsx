import { ArrowUpRight } from "lucide-react";

const IntegrationSection = () => {
    return (
      <div className="m-auto w-full overflow-hidden flex justify-between gap-16 max-xl:gap-12 max-lg:gap-9 items-center flex-col py-10 bg-white px-10">
        <div className="text-[#451e17] text-[46px] font-medium capitalize leading-[50.60px] max-xl:text-[40px] max-xl:leading-[44px] max-lg:text-[32px] max-lg:leading-9 max-sm:text-[28px] max-sm:leading-[30.80px]">
          <span className="italic">Integrate </span> With Us
        </div>
        
        <div className="flex max-lg:flex-col gap-8 max-lg:gap-6">
          {/* First Card - L2's and Execution Layers */}
          <div className="lg:h-[466px] rounded-xl flex-col justify-center items-start inline-flex overflow-hidden">
            <div 
              className="self-stretch grow shrink basis-0 p-12 max-xl:p-8 bg-[#fcebde] border-b flex-col justify-start items-center gap-8 flex"
              style={{borderBottom: "0.5px solid rgba(182, 114, 56, 0.50)"}}
            >
              <div className="text-[#b67238] text-xl font-normal uppercase leading-normal max-lg:text-base max-lg:leading-tight">
                L2's and Execution Layers
              </div>
              
              <img 
                alt="" 
                width="456" 
                height="100" 
                src="/slides/ingrate1.svg"
                className="w-full"
              />
              
              <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch text-center text-[#b67238] text-2xl font-medium leading-[28.80px] max-sm:text-xl max-sm:leading-normal">
                  L2 to Native BTC Liquidity Settlement
                </div>
                <div className="self-stretch opacity-70 text-center text-[#b67238] text-base font-normal leading-snug max-sm:text-sm max-sm:leading-tight">
                  Achieve fast, secure cross-chain settlements and tap into Native Bitcoin liquidity
                </div>
              </div>
            </div>
            
            <div className="self-stretch h-[68px] max-sm:h-[63px] bg-[#fcebde] flex-col justify-start items-center gap-8 flex">
              <button 
                href="https://forms.gle/oEy93cAF4KJLvyZ7A" 
                target="_blank"
                rel="noopener noreferrer" 
                className="items-center gap-1.5 inline-flex w-full h-[68px] max-sm:h-[63px] px-16 py-6 max-xl:px-8 cursor-pointer justify-center"
              >
                <div className="text-center text-[#b67238] text-base font-medium leading-tight">
                  How To
                </div>
                <ArrowUpRight className="text-[#b67238]"/>
              </button>
            </div>
          </div>
          
          {/* Second Card - LST/LRT */}
          <div className="lg:h-[466px] rounded-xl flex-col justify-center items-start inline-flex overflow-hidden">
            <div 
              className="self-stretch grow shrink basis-0 p-12 max-xl:p-8 bg-[#FFF6DB] border-b flex-col justify-start items-center gap-8 flex"
              style={{borderBottom: "0.5px solid rgba(185, 106, 30, 0.50)"}}
            >
              <div className="text-[#B96A1E] text-xl font-normal uppercase leading-normal max-lg:text-base max-lg:leading-tight">
                LST/LRT
              </div>
              
              <img 
                alt="" 
                width="456" 
                height="100" 
                src="/slides/ingrate2.svg"
                className="w-full"
              />
              
              <div className="self-stretch flex-col justify-start items-start gap-3 flex">
                <div className="self-stretch text-center text-[#B96A1E] text-2xl font-medium leading-[28.80px] max-sm:text-xl max-sm:leading-normal">
                  Leverage BTC Liquidity in Proof-of-Stake
                </div>
                <div className="self-stretch opacity-70 text-center text-[#B96A1E] text-base font-normal leading-snug max-sm:text-sm max-sm:leading-tight">
                  Allow users to stake Bitcoin derivatives while maintaining security and earning yields
                </div>
              </div>
            </div>
            
            <div className="self-stretch h-[68px] max-sm:h-[63px] bg-[#FFF6DB] flex-col justify-start items-center gap-8 flex">
              <button 
                href="https://forms.gle/oEy93cAF4KJLvyZ7A" 
                target="_blank"
                rel="noopener noreferrer" 
                className="items-center gap-1.5 inline-flex w-full h-[68px] max-sm:h-[63px]  px-16 py-6 max-xl:px-8 cursor-pointer justify-center"
              >
                <div className="text-center text-[#B96A1E] text-base font-medium leading-tight">
                  How To
                </div>
                <ArrowUpRight className="text-[#b67238]"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default IntegrationSection;