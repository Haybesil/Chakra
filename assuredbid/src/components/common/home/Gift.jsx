import React from 'react';

export default function Gift() {
  return (
    <div className='text-[hsl(0,0%,100%,95%)]'>
      <section className="gift-cards container px-10 lg:px-40">
        <h2 style={{ marginBottom: '2rem' }} className="text-[1.4rem] mb-[0.5rem] text-[hsl(0,0%,100%,95%)] font-bold">Check Your Gift Cards Balance</h2>
        <div>
          <div className="gift-cards-item amazon-item animate">
            <img src="/images/amazon.svg" alt="amazon" className='h-12'/>
            <div>Amazon</div>
            <a href="https://www.amazon.com/gc/balance/?ref=sxts_aspa_qna&amp;pf_rd_p=741c6963-e777-4496-8269-cc240626c3ac&amp;_encoding=UTF8&amp;pf_rd_r=1HEZRKMZ3A1081G8XNCP&amp;pd_rd_wg=zryPP&amp;pd_rd_w=8WgWk&amp;content-id=amzn1.sym.741c6963-e777-4496-8269-cc240626c3ac:amzn1.sym.741c6963-e777-4496-8269-cc240626c3ac&amp;%2Aentries%2A=0&amp;%2AVersion%2A=1&amp;qid=1712773643&amp;pd_rd_r=840a5b63-a82c-4293-9660-a9b86eb5d57a&amp;c_c=-829820099"></a>
          </div>
          <div className="gift-cards-item steam-item animate">
            <img src="/images/steam.svg" alt="steam" className='h-12'/>
            <div>Steam</div>
            <a href="https://store.steampowered.com/login/"></a>
          </div>
          <div className="gift-cards-item play-item animate">
            <img src="/images/google-play.svg" alt="play" className='h-12'/>
            <div>Google Play</div>
            <a href="https://play.google.com/redeem"></a>
          </div>
          <div className="gift-cards-item apple-item animate">
            <img src="/images/apple.svg" alt="apple" className='h-12'/>
            <div>Apple</div>
            <a href="https://www.apple.com/shop/gift-cards"></a>
          </div>
          <div className="gift-cards-item xbox-item animate">
            <img src="/images/xbox.svg" alt="xbox" className='h-12'/>
            <div>Xbox</div>
            <a href="https://gear.xbox.com/pages/gift-card-balance"></a>
          </div>
          <div className="gift-cards-item spotify-item animate">
            <img src="/images/spotify.svg" alt="spotify" className='h-12'/>
            <div>Spotify</div>
            <a href="https://support.spotify.com/uk/article/gift-cards/"></a>
          </div>
          <div className="gift-cards-item nike-item animate">
            <img src="/images/nike.svg" alt="nike" className='h-12'/>
            <div>Nike</div>
            <a href="https://www.nike.com/orders/gift-card-lookup"></a>
          </div>
          <div className="gift-cards-item ebay-item animate">
            <img src="/images/ebay.svg" alt="ebay" className='h-12'/>
            <div>Ebay</div>
            <a href="https://www.ebay.com/gft/balance"></a>
          </div>
        </div>
      </section>
    </div>
  );
}
