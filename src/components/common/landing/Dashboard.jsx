import React from 'react';
import SlidingImages from '../base/Sliders';

// Main TVL Dashboard Component
const TVLDashboard = () => {
  return (
    <div className="w-full overflow-hidden bg-[#441d16] py-32 max-lg:py-24 max-sm:py-16 max-sm:px-6 px-20 max-xl:px-10 z-30" id="tvl-dashboard">
      <div className="max-w-7xl m-auto w-full flex gap-32 max-lg:gap-10 max-sm:gap-9 items-center justify-between max-sm:flex-col max-lg:flex-col">
        <div className="max-w-1/2 grow shrink basis-0 self-stretch flex-col justify-between items-start inline-flex gap-4">
          <div className="self-stretch flex-col justify-start items-start gap-8 flex">
            <div className="text-stone-100 max-sm:text-3xl font-medium italic text-left capitalize max-sm:leading-8 text-5xl leading-tight">
              Redefining Cross-Chain Settlement
            </div>
            <div className="text-stone-100 text-lg font-normal capitalize leading-7 max-sm:text-sm max-sm:leading-5">
              Chakra, the first modular settlement network, resolves liquidity fragmentation with its cross-chain PoS architecture and shared settlement layer. Enabling secure bridging of native BTC and BTC-derived assets across ecosystems, it boasts $114M+ TVL, 50K+ users, and integrations with 20+ blockchains, expanding Bitcoin's liquidity and full potential.
            </div>
          </div>
          <div className="justify-start items-center gap-1.5 inline-flex">
            <a href="https://defillama.com/protocol/chakra" target="_blank" className="text-stone-100 text-2xl font-normal capitalize leading-9">
              <div>
                <span className="text-stone-100 opacity-50 text-base font-medium leading-tight">Source of data: </span>
                <span className="text-stone-100 opacity-50 text-base font-medium underline leading-tight">defillama.com</span>
              </div>
            </a>
            <img 
              alt="DeFi Llama Icon" 
              loading="lazy" 
              width="28" 
              height="28" 
              className="w-7 h-7"
              src="/slides/image (23).webp"
            />
          </div>
        </div>
        
        <div className="flex-col justify-center items-start gap-8 inline-flex w-[44%] max-sm:w-full max-sm:gap-6 max-lg:gap-6 max-lg:w-full">
          <div className="self-stretch p-8 rounded-xl border border-opacity-20 border-stone-100 flex-col justify-start items-start gap-6 flex max-lg:p-6 max-lg:gap-4">
            <div className="text-stone-100 text-lg font-normal capitalize leading-snug">Total TVL</div>
            <div className="text-stone-100 text-6xl font-semibold capitalize leading-tight max-lg:text-5xl max-lg:leading-tight">
              <span>$122,581,500</span>
            </div>
          </div>
          
          <div className="self-stretch justify-start items-center gap-8 inline-flex max-sm:flex-col max-lg:flex-col max-sm:gap-6 max-lg:gap-6">
            <div className="max-lg:w-full grow shrink basis-0 p-8 rounded-xl border border-opacity-20 border-stone-100 flex-col justify-start items-start gap-6 inline-flex max-lg:p-6 max-lg:gap-4">
              <div className="text-stone-100 text-lg font-normal capitalize leading-snug">Total Users</div>
              <div className="text-stone-100 text-5xl font-semibold capitalize leading-tight">
                <span>52K+</span>
              </div>
            </div>
            
            <div className="max-lg:w-full grow shrink basis-0 p-8 rounded-xl border border-opacity-20 border-stone-100 flex-col justify-start items-start gap-6 inline-flex max-lg:p-6 max-lg:gap-4">
              <div className="text-stone-100 text-lg font-normal capitalize leading-snug">Supported Blockchains</div>
              <div className="text-stone-100 text-5xl font-semibold capitalize leading-tight">
                <span>20+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <TVLConfigs />
    </div>
  );
};

// Scrolling Images Component
const TVLConfigs = () => {
  return (
    <div>
        <SlidingImages/>
    </div>
  );
};

// Main export component that combines both sections
export default function Dashboard() {
  return <TVLDashboard />;
}