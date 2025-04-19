import React from 'react';
import Navbar from './Navbar';

export default function Hero() {
  const linkStyle =
    'text-[18px] font-medium flex gap-2 items-center text-white rounded-[10px] py-2 px-4';

  return (
    <div className="hero px-10 lg:px-40 h-[140vh] lg:h-[90vh]">
      <Navbar />
      <div className="mt-24 flex flex-col lg:flex-row justify-center gap-[60px] lg:gap-0 lg:justify-between">
        <div className="max-w-[480px]">
          <h1 className="text-[hsl(0,0%,100%,95%)] text-[2rem] font-semibold pb-[1rem] leading-[3rem]">
            Discover the Ease of Trading Cryptocurrency and Gift Cards
          </h1>
          <p className="text-[rgba(255,255,255,0.8)] text-[17px] font-normal leading-[1.5rem] pb-[1rem]">
            Experience the simplicity and convenience of exchanging your
            cryptocurrencies and gift cards with our platform.
          </p>
          <p className="text-white font-medium text-[16px] pb-[0.5rem]">
            Trade with us on:
          </p>
          <div className="flex gap-4 flex-wrap">
            <a
              href="https://wa.me/2348139915048"
              className={`${linkStyle} bg-[#35bb49]`}
            >
              <span>Whatsapp</span>
              <img src="/images/whatsapp.svg" alt="whatsapp" className="h-6" />
            </a>
            <a
              href="https://wa.me/2348139915048"
              className={`${linkStyle} bg-[#cd377d]`}
            >
              <span>Instagram</span>
              <img src="/images/instagram.svg" alt="whatsapp" className="h-6" />
            </a>
            <a
              href="https://wa.me/2348139915048"
              className={`${linkStyle} bg-[#00a8eb]`}
            >
              <span>Twitter</span>
              <img src="/images/twitter.svg" alt="whatsapp" className="h-6" />
            </a>
          </div>
        </div>
        <div className="hero_cards flex lg:relative lg:left-10 h-[15rem] lg:h-[18rem] w-[25rem] lg:w-[30rem]">
            <div className="float-item amazon">
                <img src="/images/amazon.svg" alt="amazon" className="float-img"/>
            </div>
            <div className="float-item apple w-[100%] lg:w-[40%]">
                <img src="/images/apple.svg" alt="apple" className="float-img"/>
            </div>
            <div className="float-item steam w-[100%] lg:w-[40%]">
                <img src="/images/steam.svg" alt="steam" className="float-img"/>
            </div>
        </div>
      </div>
    </div>
  );
}
