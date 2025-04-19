import React, { useState } from 'react';

import { WalletMinimal } from 'lucide-react';
import Modal from '../base/Modal';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [toggleConnect, setToggleConnect] = useState(false);

  const openModal = () => {
    setToggleConnect(true);
  };

  return (
    <div>
      <header className="pt-3">
        <div
          className="text-white h-14 sm:h-11 text-center font-inter justify-center fixed top-0 w-full z-30 flex items-center p-3"
          style={{ background: 'rgb(183, 115, 57)' }}
        >
          <Link
            to="/connect-wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-2 flex-col sm:flex-row sm:gap-6"
          >
            <div className="text-white text-sm font-medium font-inter leading-tight">
              Gain priority access by staking with Chakra today!
            </div>
            <div className="flex justify-center items-center gap-1 text-white text-sm font-medium font-inter leading-tight">
              Stake Now
              <div className="h-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                >
                  <g id="System / cheveron-right">
                    <path
                      id="Shape"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.02876 2.86128C6.28911 2.60093 6.71122 2.60093 6.97157 2.86128L11.6382 7.52794C11.7633 7.65297 11.8335 7.82254 11.8335 7.99935C11.8335 8.17616 11.7633 8.34573 11.6382 8.47075L6.97157 13.1374C6.71122 13.3978 6.28911 13.3978 6.02876 13.1374C5.76841 12.8771 5.76841 12.455 6.02876 12.1946L10.224 7.99935L6.02876 3.80409C5.76841 3.54374 5.76841 3.12163 6.02876 2.86128Z"
                      fill="#F2EEE3"
                    />
                  </g>
                </svg>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-full px-10 max-sm:px-6 z-10 bg-[#fff] pt-[44px] max-sm:pt-[70px]">
          <div className="flex items-center justify-between max-w-[1280px] max-sm:max-w-full m-auto py-4 max-sm:py-4 z-10">
            {/* Logo Section */}
            <div className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="115"
                height="32"
                viewBox="0 0 115 32"
                fill="none"
              >
                <g id="Logo / Style I">
                  <path
                    id="Union"
                    d="M14.6479 0.593184C14.3249 -0.176572 13.2728 -0.203658 12.9137 0.549942C9.915 6.84373 12.7245 8.98977 15.7824 11.3255C18.1907 13.1651 20.7531 15.1223 20.7531 19.3164C20.7531 23.2996 17.385 26.5286 13.2301 26.5286C9.07527 26.5286 5.70711 23.2996 5.70711 19.3164C5.70711 15.9999 6.28113 12.8683 7.84217 10.0694C8.34159 9.174 7.55475 8.04869 6.65263 8.53591C2.66934 10.6872 0 14.6984 0 19.3164C0 26.3213 5.92332 32 13.2301 32C20.5369 32 26.4602 26.3213 26.4602 19.3164C26.4602 14.2759 24.8318 11.5649 20.0686 7.91566C16.4973 5.17951 16.0412 4.04405 15.0911 1.67895C14.9567 1.34431 14.8123 0.985065 14.6479 0.593184Z"
                    fill="#451E17"
                  />
                  <path
                    id="Union_2"
                    d="M12.9709 22.8282C15.2633 22.8282 17.1216 20.9699 17.1216 18.6776C17.1216 16.3853 15.2633 14.527 12.9709 14.527C10.6786 14.527 8.82031 16.3853 8.82031 18.6776C8.82031 20.9699 10.6786 22.8282 12.9709 22.8282Z"
                    fill="#451E17"
                  />
                  <path
                    id="Union_3"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M32 18.736C32 23.9727 35.4993 27.472 40.736 27.472C44.7736 27.472 48.0038 24.7068 48.8113 20.5468H45.6546C44.9939 22.9449 43.0362 24.5355 40.736 24.5355C37.4569 24.5355 35.2791 22.2108 35.2791 18.736C35.2791 15.2612 37.4569 12.9365 40.736 12.9365C42.7915 12.9365 44.7002 14.3802 45.5078 16.5336H48.7379C47.7591 12.6184 44.5534 10 40.736 10C35.4993 10 32 13.4993 32 18.736ZM50.5795 27.1294V10.3426H53.516V15.7995C54.3235 15.041 55.6449 14.5515 56.844 14.5515C60.1965 14.5515 62.4233 16.5337 62.4233 19.5191V27.1294H59.4868V19.8617C59.4868 18.2221 58.2877 17.1454 56.5014 17.1454C54.715 17.1454 53.516 18.2221 53.516 19.8617V27.1294H50.5795ZM79.71 27.1294V10.3426H82.6465V19.0541L86.782 14.8941H90.8931L85.7053 19.984L91.4804 27.1294H87.7119L83.6009 22.0395L82.6465 22.9939V27.1294H79.71ZM106.804 27.4719C102.986 27.4719 100.441 24.8781 100.441 21.0117C100.441 17.1454 102.986 14.5515 106.804 14.5515C108.247 14.5515 109.838 15.2122 110.768 16.2155V14.8941H113.704V27.1294H110.768V25.8079C109.838 26.8112 108.247 27.4719 106.804 27.4719ZM107.097 24.8781C109.3 24.8781 110.768 23.3364 110.768 21.0117C110.768 18.687 109.3 17.1454 107.097 17.1454C104.87 17.1454 103.378 18.687 103.378 21.0117C103.378 23.3364 104.87 24.8781 107.097 24.8781ZM93.1402 14.8941V27.1294H96.0766V19.8861C96.0766 18.2465 97.3736 17.1454 99.3312 17.1454H100.335V14.8941C99.9919 14.7472 99.4781 14.6494 99.0376 14.6494C97.9119 14.6494 96.7129 15.3345 96.0766 16.3378V14.8941H93.1402ZM64.1893 21.0117C64.1893 24.8781 66.7343 27.4719 70.5517 27.4719C71.9955 27.4719 73.586 26.8112 74.5159 25.8079V27.1294H77.4524V14.8941H74.5159V16.2155C73.586 15.2122 71.9955 14.5515 70.5517 14.5515C66.7343 14.5515 64.1893 17.1454 64.1893 21.0117ZM74.5159 21.0117C74.5159 23.3364 73.0477 24.8781 70.8453 24.8781C68.6185 24.8781 67.1258 23.3364 67.1258 21.0117C67.1258 18.687 68.6185 17.1454 70.8453 17.1454C73.0477 17.1454 74.5159 18.687 74.5159 21.0117Z"
                    fill="#451E17"
                  />
                </g>
              </svg>
            </div>

            {/* Connect Wallet Button */}
            <div className="z-20">
              <div className="flex justify-end gap-6 items-center z-20 w-full">
                <button className="" type="button" onClick={openModal}>
                  <div className="flex justify-center items-center text-[#FFF] py-1 px-4 rounded-full text-sm gap-1 cursor-pointer bg-[#451e17]">
                    <div className="bg-[#451e17]">
                      <WalletMinimal size={15} />
                    </div>
                    <div>Connect Wallet</div>
                  </div>
                  <span className="MuiTouchRipple-root css-w0pj6f"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      {toggleConnect && (
        <div>
          <Modal open={toggleConnect} onClose={() => setToggleConnect(false)} />
        </div>
      )}
    </div>
  );
}
