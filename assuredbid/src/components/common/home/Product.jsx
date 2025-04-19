import React from 'react';

export default function Product() {
const resonIconStyle = 'w-[3rem] h-[3rem] bg-[hsl(0,0%,100%,80%)] rounded-[50%] my-0 mx-auto mb-[1rem] flex items-center justify-center';
const cardTitleStyle = "text-[1.4rem] mb-[0.5rem] text-[hsl(0,0%,100%,95%)] font-bold";
const cardTextStyle = "text-[1rem] mb-[0.5rem] text-[hsl(0,0%,100%,95%)] font-semibold"

  return (
    <div className="py-[4rem] text-center">
      <div className="product animate-bounce flex justify-center pt-[4rem]">
        <img src="/images/ethereum-img.png" alt="" className="h-96" />
      </div>
      <div className='reasons w-[90%] my-0 mx-auto px-10 lg:px-40'>
        <h2 className="text-[1.4rem] mb-[0.5rem] text-[hsl(0,0%,100%,95%)] font-bold">
          Why Choose Us?
        </h2>
        <p className="text-[hsl(0,0%,100%,80%)] text-[1.5rem] pb-[1.5rem]">
          Coinflow Xchange features seamless and eas in crypto and gift card
          exchange
        </p>
      </div>
      <div class="mt-[2rem] flex flex-wrap justify-center gap-[2rem] px-10 lg:px-40">
        <div class="reason animate">
          <div className={resonIconStyle}>
            <img src="/images/convenience.svg" alt="convenience" />
          </div>
          <h3 className={cardTitleStyle}> Convenience</h3>
          <p className={cardTextStyle}>Convert your cryptocurrency and gift cards into assets quickly.</p>
        </div>
        <div class="reason animate">
          <div class={resonIconStyle}>
            <img src="/images/options-btc.svg" alt="options" />
          </div>
          <h3 className={cardTitleStyle}>Wide Range of Options</h3>
          <p className={cardTextStyle}>
            Exchange your cryptocurrency or gift cards from leading retailers.
          </p>
        </div>
        <div class="reason animate">
          <div class={resonIconStyle}>
            <img src="images/security.svg" alt="security" />
          </div>
          <h3 className={cardTitleStyle}>Security First</h3>
          <p className={cardTextStyle}>
            We adhere to strict security measures to safeguard your
            transactions.
          </p>
        </div>
        <div class="reason animate">
          <div class={resonIconStyle}>
            <img src="/images/transaction.svg" alt="transaction" />
          </div>
          <h3 className={cardTitleStyle}>Fast Transactions</h3>
          <p className={cardTextStyle}>
            Transactions are executed swiftly, allowing for access to funds.
          </p>
        </div>
        <div class="reason animate">
          <div class={resonIconStyle}>
            <img src="/images/support.svg" alt="support" />
          </div>
          <h3 className={cardTitleStyle}>Dedicated Support</h3>
          <p className={cardTextStyle}>We strive to provide prompt and helpful assistance.</p>
        </div>
      </div>
    </div>
  );
}
