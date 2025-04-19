"use client"

import { useState } from "react"
import Navbar from "./Navbar"
import Modal from "../base/Modal"
import { WalletMinimal } from "lucide-react"

export default function Hero() {
  const [toggleConnect, setToggleConnect] = useState(false)

  const openModal = () => {
    setToggleConnect(true)
  }

  return (
    <>
      <div className="hero w-full">
        <Navbar />

        {/* TVL Card - Responsive container */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-4 md:py-6">
          <div className="bg-white rounded-2xl border border-zinc-200 p-4 md:p-6 w-full max-w-4xl mx-auto">
            <div className="flex justify-between items-center gap-2">
              {/* Left section: Icon + Label */}
              <div className="inline-flex items-center justify-start gap-1.5">
                <div className="text-[#E21717]">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8 2.66732C6.89543 2.66732 6 3.56275 6 4.66732C6 5.77189 6.89543 6.66732 8 6.66732C9.10457 6.66732 10 5.77189 10 4.66732C10 3.56275 9.10457 2.66732 8 2.66732ZM4.66667 4.66732C4.66667 2.82637 6.15905 1.33398 8 1.33398C9.84095 1.33398 11.3333 2.82637 11.3333 4.66732C11.3333 6.50827 9.84095 8.00065 8 8.00065C6.15905 8.00065 4.66667 6.50827 4.66667 4.66732ZM8 10.0007C6.18346 10.0007 4.64812 11.2121 4.1611 12.8726C4.12963 12.9799 4.153 13.0714 4.23198 13.1577C4.32078 13.2547 4.47787 13.334 4.66667 13.334H11.3333C11.5221 13.334 11.6792 13.2547 11.768 13.1577C11.847 13.0714 11.8704 12.9799 11.8389 12.8726C11.3519 11.2121 9.81655 10.0007 8 10.0007ZM2.88167 12.4973C3.53073 10.2844 5.57566 8.66732 8 8.66732C10.4243 8.66732 12.4693 10.2844 13.1183 12.4973C13.2941 13.0966 13.113 13.6629 12.7517 14.0578C12.4001 14.442 11.8809 14.6673 11.3333 14.6673H4.66667C4.11909 14.6673 3.59991 14.442 3.24835 14.0578C2.88697 13.6629 2.70589 13.0966 2.88167 12.4973Z"
                      fill="#E21717"
                    />
                  </svg>
                </div>
                <div className="text-zinc-500 text-sm font-normal leading-[20px]">Your Confirmed TVL</div>
              </div>

              {/* Right section: Value + Icon */}
              <div className="inline-flex items-center justify-end gap-2">
                <div className="text-zinc-900 text-lg sm:text-xl md:text-2xl font-semibold leading-tight">0</div>
                <img
                  src="/slides/mainnetBTCIcon.svg"
                  alt="BTC Icon"
                  width="29"
                  height="29"
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  loading="lazy"
                  decoding="async"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Airdrop Card - Responsive container */}
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-4 md:py-6">
          <div className="p-6 md:p-8 bg-[#B77339] rounded-3xl shadow-sm relative w-full max-w-4xl mx-auto overflow-hidden">
            {/* Decorative images - hidden on small screens, positioned relative to container on larger screens */}
            <div className="hidden md:block">
              <img
                alt=""
                loading="lazy"
                width="108"
                height="86"
                decoding="async"
                className="absolute left-8 top-8 w-16 lg:w-[108px]"
                src="/slides/leftAirdrop.png"
                style={{ color: "transparent" }}
              />
              <img
                alt=""
                loading="lazy"
                width="108"
                height="85"
                decoding="async"
                className="absolute right-8 top-8 w-16 lg:w-[108px]"
                src="/slides/rightAirdrop.png"
                style={{ color: "transparent" }}
              />
            </div>

            <div className="flex flex-col gap-6 md:gap-8 items-center justify-center">
              {/* Header text with sparkles icon */}
              <div className="inline-flex justify-start items-center gap-1.5">
                <img
                  alt=""
                  loading="lazy"
                  width="21"
                  height="20"
                  decoding="async"
                  className="w-5"
                  src="/slides/sparkles.svg"
                  style={{ color: "transparent" }}
                />
                <div className="text-[#fef9c3] text-sm font-normal leading-tight font-inter">
                  Babylon airdrop registration is now open.
                </div>
              </div>

              {/* Connect wallet section */}
              <div className="flex flex-col gap-3 justify-center items-center">
                <div className="text-white text-xl sm:text-2xl font-medium leading-7 font-loraItalic text-center">
                  Connect your wallet
                </div>
                <div className="text-center text-white text-sm font-normal leading-tight font-inter">
                  If you are eligible, we will collect your
                  <br className="hidden sm:block" /> Babylon wallet after verifying your identity.
                </div>
              </div>

              {/* Button */}
              <div className="w-full flex justify-center">
                <button
                  onClick={openModal}
                  type="button"
                  className="flex justify-center items-center gap-1 text-sm text-white bg-[#451e17] px-8 sm:px-12 rounded-full py-2 hover:opacity-90 transition-all"
                >
                  <WalletMinimal size={15} />
                  <p>Connect Wallet</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {toggleConnect && (
        <div>
          <Modal open={toggleConnect} onClose={() => setToggleConnect(false)} />
        </div>
      )}
    </>
  )
}
