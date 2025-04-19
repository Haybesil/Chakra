import React from 'react';

export default function Services() {
  return (
    <div className="services px-10 lg:px-40 py-[4rem] text-center">
      <h2 className="text-[1.7rem] mb-[0.5rem] text-[hsl(0,0%,100%,95%)] font-bold">
        Our Services
      </h2>
      <p className="text-[hsl(0,0%,100%,80%)] text-[1.5rem] pb-[1.5rem]">
        We offer a wide range of services.
      </p>
      <div class="services-items flex flex-col lg:flex-row gap-10 items-center">
        <article class="animate flex flex-col items-center ">
          <div class="btc-exchange">
            <img src="/images/btc-exchange.svg" alt="" />
          </div>
          <h3 className="text-[2rem] pb-[1rem] text-[hsl(0,0%,100%,95%)] font-bold">
            Cryptocurrency Exchange
          </h3>
          <p className="text-[1rem] pb-[1rem] text-[hsl(0,0%,100%,80%)] font-semibold">
            {' '}
            Easily trade various cryptocurrencies including Bitcoin, Ethereum,
            Litecoin, and more. Our intuitive platform ensures smooth
            transactions at competitive rates.
          </p>
        </article>
        <article class="animate flex flex-col  items-center mt-36">
          <div className="card-exchange w-[35%] ">
            <div className="exchange exchange-amazon -ml-[5rem] -mt-[4rem] relative z-0 w-[100%]">
              <img src="/images/amazon.svg" alt="amazon" className="h-10" />
            </div>
            <div className="exchange exchange-apple -ml-[3rem] -mt-[4rem] relative z-10 w-[100%]">
              <img src="/images/apple.svg" alt="apple" className="h-10" />
            </div>
            <div className="exchange exchange-steam -ml-[1rem] -mt-[4rem] relative z-20 w-[100%]">
              <img src="/images/steam.svg" alt="steam" className="h-10" />
            </div>
          </div>

          <h3 className="text-[2rem] pb-[1rem] text-[hsl(0,0%,100%,95%)] font-bold mt-5">
            Gift Card Exchange
          </h3>
          <p className="text-[1rem] pb-[1rem] text-[hsl(0,0%,100%,80%)] font-semibold">
            Our platform allows you to exchange gift cards from a wide range of
            retailers for digital assets, providing you with more flexibility
            and liquidity.
          </p>
        </article>
      </div>
    </div>
  );
}
