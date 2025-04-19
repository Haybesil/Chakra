import React from 'react';

export default function Review() {

    const cardTitleStyle = "text-[0.8rem] mb-[0.5rem] text-[hsl(0,0%,100%,95%)] font-bold";
    const cardTextStyle = "text-[1rem] mb-[0.5rem] text-[hsl(0,0%,100%,95%)] font-semibold";

  return (
    <div className=''>
      <section class="reviews px-10 lg:px-40">
        <div class="container">
          <h2 className='text-[1.7rem] mb-[0.5rem] text-[hsl(0,0%,100%,95%)]'>Reviews</h2>
          <p className="text-[hsl(0,0%,100%,80%)] text-[1.5rem] pb-[1.5rem]">We can be trusted, but don't just take our word for it</p>
          <div class="review-list">
            <div class="review animate">
              <h3 className={cardTitleStyle}>Maro Valentino Tebu</h3>
              <p className={cardTextStyle}>
                Coinflow Xchange is a game-changer! Seamless interface, secure
                transactions, responsive support, efficient crypto and giftcard
                trading. Highly recommend!
              </p>
              <div class="star"></div>
            </div>
            <div class="review animate">
              <h3 className={cardTitleStyle}>Ganrede Destiny</h3>
              <p className={cardTextStyle}>
                I wanted to share my thoughts on Cionflow Exchange. Their rates
                are absolutely fantastic! I've been using their services for a
                while now, and I'm really impressed with the competitive rates
                they offer. It's definitely a great choice if you're looking for
                an exchange company with good rates. Give them a try, and I'm
                sure you'll be pleased with their service too!
              </p>
              <div class="star"></div>
            </div>
            <div class="review animate">
              <h3 className={cardTitleStyle}>Thekar Leegray</h3>
              <p className={cardTextStyle}>They have good rate And real fast with payment</p>
              <div class="star"></div>
            </div>
            <div>
              <a href="https://www.trustpilot.com/review/coinflowxchange.com" className='inline-block py-[0.8rem] px-[2rem] rounded-[6px] bg-blue-600 font-medium text-white'>
                View all
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
