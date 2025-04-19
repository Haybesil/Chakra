import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div class="flex flex-col gap-[2rem] px-10 lg:px-40">
        <div>
          <img src="/images/logo2.png" alt="logo" className="h-9" />
        </div>
        <p className="text-[hsl(0,0%,100%,80%)] text-[1rem] pb-[1.5rem] max-w-[800px]">
          Your security is our priority. We employ advanced encryption and
          strict security measures to safeguard your assets.
        </p>
        <div class="flex gap-3">
          <div>
            <a href="https://wa.me/2348139915048">
              <img
                src="/images/whatsapp.svg"
                alt="whatsapp-icon"
                className="h-8"
              />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/coinflowxchange_?utm_source=qr&amp;igsh=MXQ1bmNlamNvdzZ6cA==">
              <img
                src="/images/instagram.svg"
                alt="instagram-logo"
                className="h-8"
              />
            </a>
          </div>
          <div>
            <a>
              <img
                src="/images/twitter.svg"
                alt="twitter-icon"
                className="h-8"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
