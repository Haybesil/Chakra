import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <header className="pt-3">
        <div
          className="text-[#F2EEE3] h-[44px] max-sm:h-[70px] text-center font-inter justify-center fixed top-0 w-full z-30 flex items-center p-3"
          style={{ background: 'rgb(183, 115, 57)' }}
        >
          <a
            href="https://btcstaking.babylonlabs.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center items-center gap-6 max-sm:flex-col max-sm:gap-[6px]"
          >
            <div className="text-[#f2eee3] text-sm font-medium font-inter leading-tight">
              Gain priority access by staking with Chakra today!
            </div>
            <div className="flex justify-center items-center gap-1 text-[#f2eee3] text-sm font-medium font-inter leading-tight">
              Stake Now
              <div style={{ height: '16px' }}>
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
          </a>
        </div>
        <div className="flex items-center justify-between max-w-[1280px] m-[20px] lg:m-auto py-4 max-lg:py-5 mt-[47px] lg:pt-[55px] ">
          {/* Logo Section */}
          <div className="flex items-center min-w-[20%]">
            <a className="w-full" href="/home">
              {/* Desktop Logo */}
              <div className="max-lg:hidden">
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

              {/* Mobile Logo */}
              <div className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="144"
                  height="40"
                  viewBox="0 0 144 40"
                  fill="none"
                >
                  <g id="Logo / Style I">
                    <path
                      id="Union"
                      d="M18.3099 0.74148C17.9062 -0.220715 16.591 -0.254572 16.1422 0.687427C12.3937 8.55467 15.9057 11.2372 19.728 14.1568C22.7384 16.4563 25.9414 18.9029 25.9414 24.1454C25.9414 29.1245 21.7312 33.1608 16.5376 33.1608C11.3441 33.1608 7.13388 29.1245 7.13388 24.1454C7.13388 19.9999 7.85141 16.0854 9.80272 12.5868C10.427 11.4675 9.44344 10.0609 8.31579 10.6699C3.33667 13.359 0 18.373 0 24.1454C0 32.9017 7.40416 40 16.5376 40C25.6711 40 33.0753 32.9017 33.0753 24.1454C33.0753 17.8449 31.0398 14.4562 25.0858 9.89457C20.6216 6.47439 20.0514 5.05506 18.8638 2.09868C18.6958 1.68039 18.5154 1.23133 18.3099 0.74148Z"
                      fill="#451E17"
                    />
                    <path
                      id="Union_2"
                      d="M16.2137 28.5354C19.0791 28.5354 21.4019 26.2125 21.4019 23.3471C21.4019 20.4817 19.0791 18.1588 16.2137 18.1588C13.3483 18.1588 11.0254 20.4817 11.0254 23.3471C11.0254 26.2125 13.3483 28.5354 16.2137 28.5354Z"
                      fill="#451E17"
                    />
                    <path
                      id="Union_3"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M40 23.42C40 29.9659 44.3741 34.34 50.92 34.34C55.9671 34.34 60.0047 30.8835 61.0141 25.6835H57.0682C56.2424 28.6812 53.7953 30.6694 50.92 30.6694C46.8212 30.6694 44.0988 27.7635 44.0988 23.42C44.0988 19.0765 46.8212 16.1706 50.92 16.1706C53.4894 16.1706 55.8753 17.9753 56.8847 20.6671H60.9224C59.6988 15.7729 55.6918 12.5 50.92 12.5C44.3741 12.5 40 16.8741 40 23.42ZM63.2244 33.9118V12.9283H66.895V19.7494C67.9044 18.8012 69.5561 18.1894 71.055 18.1894C75.2456 18.1894 78.0291 20.6671 78.0291 24.3988V33.9118H74.3585V24.8271C74.3585 22.7777 72.8597 21.4318 70.6267 21.4318C68.3938 21.4318 66.895 22.7777 66.895 24.8271V33.9118H63.2244ZM99.6375 33.9118V12.9283H103.308V23.8177L108.478 18.6177H113.616L107.132 24.98L114.35 33.9118H109.64L104.501 27.5494L103.308 28.7424V33.9118H99.6375ZM133.504 34.3399C128.733 34.3399 125.551 31.0976 125.551 26.2646C125.551 21.4317 128.733 18.1893 133.504 18.1893C135.309 18.1893 137.297 19.0152 138.46 20.2693V18.6176H142.13V33.9117H138.46V32.2599C137.297 33.514 135.309 34.3399 133.504 34.3399ZM133.871 31.0976C136.624 31.0976 138.46 29.1705 138.46 26.2646C138.46 23.3587 136.624 21.4317 133.871 21.4317C131.088 21.4317 129.222 23.3587 129.222 26.2646C129.222 29.1705 131.088 31.0976 133.871 31.0976ZM116.425 18.6176V33.9117H120.096V24.8576C120.096 22.8082 121.717 21.4317 124.164 21.4317H125.418V18.6176C124.99 18.434 124.348 18.3117 123.797 18.3117C122.39 18.3117 120.891 19.1682 120.096 20.4223V18.6176H116.425ZM80.2367 26.2646C80.2367 31.0976 83.4179 34.3399 88.1896 34.3399C89.9943 34.3399 91.9826 33.514 93.1449 32.2599V33.9117H96.8155V18.6176H93.1449V20.2693C91.9826 19.0152 89.9943 18.1893 88.1896 18.1893C83.4179 18.1893 80.2367 21.4317 80.2367 26.2646ZM93.1449 26.2646C93.1449 29.1705 91.3096 31.0976 88.5567 31.0976C85.7731 31.0976 83.9073 29.1705 83.9073 26.2646C83.9073 23.3587 85.7731 21.4317 88.5567 21.4317C91.3096 21.4317 93.1449 23.3587 93.1449 26.2646Z"
                      fill="#451E17"
                    />
                  </g>
                </svg>
              </div>
            </a>
          </div>

          {/* Navigation Links - Desktop Only */}
          <div className="flex gap-8 max-lg:gap-4 max-lg:hidden">
            <div>
              <a
                className="text-[#451e17] text-base font-normal font-inter leading-tight"
                href="/home"
              >
                Home
              </a>
            </div>
            <div>
              <a
                className="text-[#451e17] text-base font-normal font-inter leading-tight"
                href="/community"
              >
                Community
              </a>
            </div>
            <div>
              <a
                className="text-[#451e17] text-base font-normal font-inter leading-tight"
                href="/ecosystem"
              >
                Ecosystem
              </a>
            </div>
            <div>
              <a
                className="text-[#451e17] text-base font-normal font-inter leading-tight"
                href="/blog"
              >
                Blog
              </a>
            </div>
            <div>
              <a
                className="text-[#451e17] text-base font-normal font-inter leading-tight"
                href="/careers"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Launch App Button - Desktop */}
          <Link
            to="/connect-wallet"
            target="_blank"
            className="max-lg:hidden bg-[#451e17] text-[#F5F1E6] rounded-full cursor-pointer items-center justify-center h-8 px-4 py-[6px] text-center text-sm font-medium leading-tight font-manrope"
            rel="noreferrer"
          >
            <div className="text-[#fff] text-sm font-bold font-manrope leading-tight">
              Withdraw
            </div>
          </Link>

          {/* Mobile Menu */}
          <div className="lg:hidden max-lg:flex justify-end items-center gap-5">
            {/* Launch App Button - Mobile */}
            <Link
              to="/connect-wallet"
              target="_blank"
              className="bg-[#451e17] text-[#F5F1E6] rounded-full cursor-pointer items-center justify-center h-8 px-4 py-[6px] text-center text-sm font-medium leading-tight font-manrope"
              rel="noreferrer"
            >
              Withdraw
            </Link>

            {/* Hamburger Menu */}
            <div>
              <div
                className="cursor-pointer"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M2.66669 6H29.3334M2.66669 16H29.3334M2.66669 26H29.3334"
                    stroke="#121212"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-[70px]">
          {/* Close Button */}
          <div
            className="absolute top-5 right-5 cursor-pointer"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
            >
              <path
                d="M24 8L8 24M8 8L24 24"
                stroke="#451e17"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Mobile Menu Links */}
          <div className="px-6 py-8 flex flex-col gap-8">
            <div className="flex justify-between items-center cursor-pointer h-[38px]">
              <a
                className="w-full text-[#451e17] text-[44px] font-normal font-lora capitalize leading-[44px]"
                href="/home"
              >
                Home
              </a>
            </div>
            <div className="flex justify-between items-center cursor-pointer h-[38px]">
              <a
                className="w-full text-[#451e17] text-[44px] font-normal font-lora capitalize leading-[44px]"
                href="/community"
              >
                Community
              </a>
            </div>
            <div className="flex justify-between items-center cursor-pointer h-[38px]">
              <a
                className="w-full text-[#451e17] text-[44px] font-normal font-lora capitalize leading-[44px]"
                href="/ecosystem"
              >
                Ecosystem
              </a>
            </div>
            <div className="flex justify-between items-center cursor-pointer h-[38px]">
              <a
                className="w-full text-[#451e17] text-[44px] font-normal font-lora capitalize leading-[44px]"
                href="/blog"
              >
                Blog
              </a>
            </div>
            <div className="flex justify-between items-center cursor-pointer h-[38px]">
              <a
                className="w-full text-[#451e17] text-[44px] font-normal font-lora capitalize leading-[44px]"
                href="/careers"
              >
                Careers
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
