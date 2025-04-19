import React from 'react';

export default function Hero() {
  return (
    <>
      <div
        className="max-w-7xl w-full py-12 flex sm:items-center justify-between z-10 min-h-screen sm:min-h-[calc(100vh-170px)] max-sm:pt-0 max-sm:py-12 max-sm:gap-8 max-sm:flex-col m-auto mx-8"
        style={{
          background: 'url(/slides/content1Bg.svg) top',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right',
        }}
      >
        <div className="flex flex-col gap-8 z-10">
          <div className="flex flex-col gap-5 max-sm:gap-4 z-10">
            <div className="text-stone-800 text-6xl font-medium capitalize leading-[45px] lg:leading-tight z-10 max-sm:text-5xl w-[200px] lg:w-full">
              The First Modular
              <br />
              <span className="italic">Settlement Network</span>
            </div>
          </div>
          <div className="text-stone-800 text-lg font-medium leading-relaxed z-10 max-sm:text-base max-sm:leading-snug">
            Fast and Secure. Easy to Integrate.
            <br />
            Unlock Bitcoin's liquidity across every blockchain.
          </div>
        </div>
        <div></div>
      </div>

      <div className="max-w-7xl w-full h-16 py-6 flex justify-end items-center max-sm:justify-center gap-2.5 z-10">
        <img
          alt="Powered by"
          loading="lazy"
          width="421"
          height="20"
          decoding="async"
          className="max-sm:hidden"
          style={{ color: 'transparent' }}
          src="/slides/powerBy.svg"
        />
        <img
          alt="Powered by"
          loading="lazy"
          width="316"
          height="16"
          decoding="async"
          className="sm:hidden"
          style={{ color: 'transparent' }}
          src="/slides/powerBy.svg"
        />
      </div>
    </>
  );
}
