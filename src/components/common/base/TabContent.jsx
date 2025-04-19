import React, { useState } from 'react';
import { WalletMinimal } from 'lucide-react';
import Leaderboard from './LeaderBoard';
import Modal from './Modal';


export const StakeTab = () => {
  const [toggleConnect, setToggleConnect] = useState(false);

const openModal = () => {
  setToggleConnect(true);
};
  return (
    <>
      <div className="flex flex-col gap-6 z-10 w-">
        {/* Important Notice Card */}
        <div className=" p-8 bg-white rounded-3xl border border-zinc-200 flex max-sm:flex-col max-sm:gap-6 gap-6">
          <div className="flex flex-col gap-3 flex-1">
            <div className="text-zinc-900 text-base font-semibold leading-5">
              Important Notice
            </div>
            <div className="text-zinc-600 text-sm leading-5 flex flex-col gap-1">
              {[
                'Only full withdrawals are supported.',
                'Please double-check your BSC address carefully, as changes cannot be made once submitted.',
                'During the withdrawal application period, you will continue to earn Babylon Points and Chakra Prana rewards.',
                'BTC that is not applied for withdrawal will be automatically transferred to the upcoming Vault product, enabling you to enjoy additional yield opportunities.',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-2 mt-[2px]">
                  <div className="h-5 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="4"
                      height="4"
                      viewBox="0 0 4 4"
                      fill="none"
                    >
                      <path
                        d="M2.0105 3.44C1.1785 3.44 0.5225 2.784 0.5225 1.952C0.5225 1.136 1.1785 0.48 2.0105 0.48C2.8265 0.48 3.4825 1.136 3.4825 1.952C3.4825 2.784 2.8265 3.44 2.0105 3.44Z"
                        fill="#63646B"
                      />
                    </svg>
                  </div>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Divider for desktop */}
          <div className="w-[1px] min-h-[252px] bg-[#E4E4E7] max-sm:hidden" />
          {/* Divider for mobile */}
          <div className="w-full h-[1px] bg-[#E4E4E7] sm:hidden max-sm:block" />

          {/* Right Side Summary Section */}
          <div className="flex flex-col justify-between flex-1 relative max-sm:gap-6">
            <div className="flex flex-col gap-5 w-full">
              <div className="flex flex-col gap-2 w-full">
                {[
                  { label: 'You Will Receive', value: '-' },
                  {
                    label: 'Fees',
                    value: '-',
                    icon: true,
                  },
                  { label: 'Transaction Cost', value: '-' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center w-full"
                  >
                    <div className="flex items-center gap-1.5 text-zinc-500 text-sm">
                      {item.label}
                      {item.icon && (
                        <button type="button" className="p-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="none"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill="#71717A"
                              fillRule="evenodd"
                              d="M8 2.667a5.334 5.334 0 100 10.666A5.334 5.334 0 008 2.667zm-6.667 5.334a6.667 6.667 0 1113.334 0A6.667 6.667 0 011.333 8zm6-.667a.667.667 0 110-1.333.667.667 0 010 1.333zm-.667 2a.667.667 0 011.334 0v2h.667a.667.667 0 110 1.333H8a.667.667 0 01-.667-.666V9.334h-.667a.667.667 0 01-.667-.667z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                    <div className="text-zinc-900 text-sm font-semibold">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-end gap-6 items-center w-full z-20">
              <button
                type="button"
                onClick={openModal}
                className="bg-[#451e17] text-white text-sm px-4 py-1 rounded-full flex items-center gap-1 w-full justify-center"
              >
                <WalletMinimal size={15} />

                <span>Connect Wallet</span>
              </button>
            </div>
          </div>
        </div>

        {/* Additional Content Area */}
        <div className="w-full flex flex-col gap-4 bg-white rounded-[24px] relative z-10 border border-[#E4E4E7] p-8 max-sm:p-5 max-sm:w-[calc(100vw-48px)] shadow-[0_6px_18px_-3px_rgba(0,0,0,0.04)]">
          {/* Put additional content like tab panels or other components here */}
          <div className="py-16 px-12 flex flex-col gap-6 w-full max-w-[1280px]">
            <div className="flex flex-col gap-3 justify-center items-center">
              <div className="w-14 h-14 rounded-full overflow-hidden bg-[#F4F4F5] flex justify-center items-center">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                  >
                    <g id="System / menu-alt-2">
                      <path
                        id="Shape"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M4 8.00033C4 7.26395 4.59695 6.66699 5.33333 6.66699H26.6667C27.403 6.66699 28 7.26395 28 8.00033C28 8.73671 27.403 9.33366 26.6667 9.33366H5.33333C4.59695 9.33366 4 8.73671 4 8.00033ZM4 16.0003C4 15.2639 4.59695 14.667 5.33333 14.667H26.6667C27.403 14.667 28 15.2639 28 16.0003C28 16.7367 27.403 17.3337 26.6667 17.3337H5.33333C4.59695 17.3337 4 16.7367 4 16.0003ZM4 24.0003C4 23.2639 4.59695 22.667 5.33333 22.667H14.6667C15.403 22.667 16 23.2639 16 24.0003C16 24.7367 15.403 25.3337 14.6667 25.3337H5.33333C4.59695 25.3337 4 24.7367 4 24.0003Z"
                        fill="#18181B"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div className="text-base text-[#71717A]">No history</div>
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
  );
};

export const PranasTab = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isNewOpen, setIsNewOpen] = useState(true);
  const [toggleConnect, setToggleConnect] = useState(false);

const openModal = () => {
  setToggleConnect(true);
};
  return (
    <>
      <div className="flex flex-col gap-6 z-10 w-">
        {/* Important Notice Card */}
        <div className="">
          <div className="w-full p-8 bg-white rounded-2xl border border-zinc-200 flex justify-center items-center gap-8 shadow-[0px_6px_18px_-3px_rgba(0,0,0,0.04)] max-sm:flex-col max-sm:w-full max-sm:gap-5 max-sm:p-5">
            {/* Left Section */}
            <div className="w-[336px] flex flex-col justify-center items-center gap-4 max-sm:gap-2">
              <div className="text-[#18181B] text-base font-semibold leading-tight">
                Pranas earned
              </div>
              <div className="text-[#18181B] text-5xl font-semibold leading-[57.6px]">
                0
              </div>
              <div className="w-full h-5 flex justify-center items-center gap-1.5">
                <div className="text-zinc-500 text-sm font-normal leading-tight">
                  Active stake:
                </div>
                <div className="flex items-center gap-1">
                  <div className="text-zinc-900 text-sm font-semibold leading-tight">
                    0
                  </div>
                </div>
                <img
                  alt=""
                  loading="lazy"
                  width="29"
                  height="29"
                  className="w-4 h-4"
                  src="/slides/mainnetBTCIcon.svg"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="w-[1px] h-full min-h-[144px] bg-[#E4E4E7] max-sm:hidden"></div>
            <div className="w-full h-[1px] bg-[#E4E4E7] sm:hidden max-sm:block"></div>

            {/* Right Section */}
            <div className="w-[336px] max-sm:w-full flex flex-col justify-start items-center gap-6">
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <div className="w-full flex justify-between items-start">
                  <div className="h-5 flex items-center gap-1">
                    <div className="text-zinc-500 text-sm font-normal leading-tight max-sm:text-[14px] max-sm:leading-[20px]">
                      Invite people to Chakra
                    </div>
                    <button type="button" className="p-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill="#71717A"
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.00016 2.66732C5.05464 2.66732 2.66683 5.05513 2.66683 8.00065C2.66683 10.9462 5.05464 13.334 8.00016 13.334C10.9457 13.334 13.3335 10.9462 13.3335 8.00065C13.3335 5.05513 10.9457 2.66732 8.00016 2.66732ZM1.3335 8.00065C1.3335 4.31875 4.31826 1.33398 8.00016 1.33398C11.6821 1.33398 14.6668 4.31875 14.6668 8.00065C14.6668 11.6826 11.6821 14.6673 8.00016 14.6673C4.31826 14.6673 1.3335 11.6826 1.3335 8.00065ZM7.3335 5.33398C7.3335 4.96579 7.63197 4.66732 8.00016 4.66732H8.00683C8.37502 4.66732 8.6735 4.96579 8.6735 5.33398C8.6735 5.70217 8.37502 6.00065 8.00683 6.00065H8.00016C7.63197 6.00065 7.3335 5.70217 7.3335 5.33398ZM6.66683 8.00065C6.66683 7.63246 6.96531 7.33398 7.3335 7.33398H8.00016C8.36835 7.33398 8.66683 7.63246 8.66683 8.00065V10.0007C9.03502 10.0007 9.3335 10.2991 9.3335 10.6673C9.3335 11.0355 9.03502 11.334 8.66683 11.334H8.00016C7.63197 11.334 7.3335 11.0355 7.3335 10.6673V8.66732C6.96531 8.66732 6.66683 8.36884 6.66683 8.00065Z"
                        />
                      </svg>
                    </button>
                  </div>
                  <div className="text-blue-600 text-sm font-semibold leading-tight max-sm:text-[14px]">
                    +10% Pranas
                  </div>
                </div>
                <div className="w-full p-4 bg-gray-50 rounded-xl border border-zinc-200 flex justify-between items-center">
                  <div className="text-zinc-400 text-sm font-medium leading-tight">
                    Connect your wallet for an invitation link
                  </div>
                </div>
              </div>

              <div className="w-full">
                <div className="flex justify-end gap-6 items-center z-20 w-full">
                  <button
                    type="button"
                    onClick={openModal}
                    className="bg-[#451e17] text-white text-sm px-4 py-1 rounded-full flex items-center gap-1 w-full justify-center"
                  >
                    <WalletMinimal size={15} />

                    <span>Connect Wallet</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full p-8 bg-white rounded-2xl border border-zinc-200 flex justify-center items-center gap-8 max-sm:flex-col max-sm:w-full max-sm:gap-5 max-sm:p-5 shadow-[0px_6px_18px_-3px_rgba(0,0,0,0.04)] mt-8">
            {/* Babylon Points Section */}
            <div className="w-[336px] flex-col justify-center items-center gap-4 max-sm:gap-2 inline-flex">
              <div className="h-5 flex justify-start items-center gap-1">
                <div className="text-[#18181B] text-base font-semibold leading-tight">
                  Babylon Points
                </div>
                <button type="button" className="p-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.00016 2.66732C5.05464 2.66732 2.66683 5.05513 2.66683 8.00065C2.66683 10.9462 5.05464 13.334 8.00016 13.334C10.9457 13.334 13.3335 10.9462 13.3335 8.00065C13.3335 5.05513 10.9457 2.66732 8.00016 2.66732ZM1.3335 8.00065C1.3335 4.31875 4.31826 1.33398 8.00016 1.33398C11.6821 1.33398 14.6668 4.31875 14.6668 8.00065C14.6668 11.6826 11.6821 14.6673 8.00016 14.6673C4.31826 14.6673 1.3335 11.6826 1.3335 8.00065ZM7.3335 5.33398C7.3335 4.96579 7.63197 4.66732 8.00016 4.66732H8.00683C8.37502 4.66732 8.6735 4.96579 8.6735 5.33398C8.6735 5.70217 8.37502 6.00065 8.00683 6.00065H8.00016C7.63197 6.00065 7.3335 5.70217 7.3335 5.33398ZM6.66683 8.00065C6.66683 7.63246 6.96531 7.33398 7.3335 7.33398H8.00016C8.36835 7.33398 8.66683 7.63246 8.66683 8.00065V10.0007C9.03502 10.0007 9.3335 10.2991 9.3335 10.6673C9.3335 11.0355 9.03502 11.334 8.66683 11.334H8.00016C7.63197 11.334 7.3335 11.0355 7.3335 10.6673V8.66732C6.96531 8.66732 6.66683 8.36884 6.66683 8.00065Z"
                      fill="#71717A"
                    />
                  </svg>
                </button>
              </div>
              <div className="text-zinc-900 text-[32px] font-semibold font-inter leading-[38.40px]">
                0
              </div>
            </div>

            {/* Divider for large screens */}
            <div className="w-[1px] h-full min-h-[70px] bg-[#E4E4E7] max-sm:hidden"></div>

            {/* Divider for small screens */}
            <div className="w-full h-[1px] bg-[#E4E4E7] sm:hidden max-sm:block"></div>

            {/* Staked on Babylon Section */}
            <div className="w-[336px] flex-col justify-center items-center gap-4 max-sm:gap-2 inline-flex">
              <div className="h-5 flex justify-start items-center gap-1">
                <div className="text-[#18181B] text-base font-semibold leading-tight">
                  Staked on Babylon
                </div>
                <button type="button" className="p-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.00016 2.66732C5.05464 2.66732 2.66683 5.05513 2.66683 8.00065C2.66683 10.9462 5.05464 13.334 8.00016 13.334C10.9457 13.334 13.3335 10.9462 13.3335 8.00065C13.3335 5.05513 10.9457 2.66732 8.00016 2.66732ZM1.3335 8.00065C1.3335 4.31875 4.31826 1.33398 8.00016 1.33398C11.6821 1.33398 14.6668 4.31875 14.6668 8.00065C14.6668 11.6826 11.6821 14.6673 8.00016 14.6673C4.31826 14.6673 1.3335 11.6826 1.3335 8.00065ZM7.3335 5.33398C7.3335 4.96579 7.63197 4.66732 8.00016 4.66732H8.00683C8.37502 4.66732 8.6735 4.96579 8.6735 5.33398C8.6735 5.70217 8.37502 6.00065 8.00683 6.00065H8.00016C7.63197 6.00065 7.3335 5.70217 7.3335 5.33398ZM6.66683 8.00065C6.66683 7.63246 6.96531 7.33398 7.3335 7.33398H8.00016C8.36835 7.33398 8.66683 7.63246 8.66683 8.00065V10.0007C9.03502 10.0007 9.3335 10.2991 9.3335 10.6673C9.3335 11.0355 9.03502 11.334 8.66683 11.334H8.00016C7.63197 11.334 7.3335 11.0355 7.3335 10.6673V8.66732C6.96531 8.66732 6.66683 8.36884 6.66683 8.00065Z"
                      fill="#71717A"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="text-zinc-900 text-[32px] font-semibold font-inter leading-[38.40px]">
                  0
                </div>
                <img
                  alt=""
                  loading="lazy"
                  width={29}
                  height={29}
                  className="w-6 h-6 max-sm:w-5 max-sm:h-5"
                  src="/slides/mainnetBTCIcon.svg"
                />
              </div>
            </div>
          </div>

          <div className="w-full px-8 pt-8 pb-4 bg-white rounded-3xl shadow border border-zinc-200 flex-col justify-start items-start inline-flex max-sm:p-5 mt-8">
            {/* Header */}
            <div
              className="self-stretch justify-between items-center inline-flex pb-4 cursor-pointer max-sm:pb-0"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="text-[#18181B] font-semibold text-base leading-tight">
                Pranas Details
              </div>
              <div className="flex justify-end items-center gap-2">
                <div className="text-[#71717A] text-sm font-normal leading-tight max-sm:text-[12px]">
                  Last Updated: -
                </div>
                <div className="w-[22px] h-[22px] flex justify-center items-center bg-white rounded-[6px]">
                  <svg
                    className={`transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.58752 4.25386C6.81533 4.02606 7.18468 4.02606 7.41248 4.25386L11.4958 8.3372C11.7236 8.565 11.7236 8.93435 11.4958 9.16215C11.268 9.38996 10.8987 9.38996 10.6709 9.16215L7 5.4913L3.32915 9.16215C3.10134 9.38996 2.732 9.38996 2.50419 9.16215C2.27638 8.93435 2.27638 8.565 2.50419 8.3372L6.58752 4.25386Z"
                      fill="#18181B"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Collapsible Content */}
            {isOpen && (
              <div className="w-full flex-col justify-start items-start gap-2 inline-flex max-sm:mt-4">
                {/* Section 1 - Staking Pool */}
                <div className="w-full px-4 py-3 bg-[#f7f8fa] rounded-xl border border-zinc-100 flex justify-between items-start gap-4 max-sm:flex-col max-sm:gap-2">
                  <div className="w-1/2 max-sm:w-full text-left text-[#18181B] text-sm font-medium leading-tight">
                    Staking Pool
                  </div>
                  <div className="w-1/2 max-sm:w-full flex justify-end items-start gap-4">
                    <div className="w-1/2 flex items-center gap-1 text-sm text-zinc-500">
                      <div>Daily Pranas:</div>
                      <div className="text-[#18181B] font-medium">0</div>
                    </div>
                    <div className="w-1/2 flex items-center gap-1 text-sm text-zinc-500">
                      <div>Total Pranas:</div>
                      <div className="text-[#18181B] font-medium">0</div>
                    </div>
                  </div>
                </div>

                {/* Section 2 - Referrals */}
                <div className="w-full px-4 py-3 bg-[#f7f8fa] rounded-xl border border-zinc-100 flex justify-between items-start gap-4 max-sm:flex-col max-sm:gap-2">
                  <div className="w-1/2 max-sm:w-full text-left text-[#18181B] text-sm font-medium leading-tight">
                    Referrals
                  </div>
                  <div className="w-1/2 max-sm:w-full flex justify-end items-start gap-4">
                    <div className="w-1/2 flex items-center gap-1 text-sm text-zinc-500">
                      <div>Daily Pranas:</div>
                      <div className="text-[#18181B] font-medium">0</div>
                    </div>
                    <div className="w-1/2 flex items-center gap-1 text-sm text-zinc-500">
                      <div>Total Pranas:</div>
                      <div className="text-[#18181B] font-medium">0</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="w-full px-8 pt-8 pb-4 bg-white rounded-3xl shadow border border-zinc-200 flex flex-col justify-start items-start max-sm:w-full max-sm:p-5 mt-8">
            <button
              onClick={() => setIsNewOpen(!isNewOpen)}
              className="w-full justify-between items-center inline-flex pb-4 cursor-pointer max-sm:pb-0"
            >
              <div className="text-center text-[#18181B] font-semibold text-base leading-5">
                Pranas Boost
              </div>
              <div className="flex justify-end items-center gap-2">
                <div className="w-[22px] h-[22px] flex justify-center items-center bg-white rounded-[6px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    className={`transition-transform duration-300 ${
                      isNewOpen ? 'rotate-180' : ''
                    }`}
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.58752 4.25386C6.81533 4.02606 7.18468 4.02606 7.41248 4.25386L11.4958 8.3372C11.7236 8.565 11.7236 8.93435 11.4958 9.16215C11.268 9.38996 10.8987 9.38996 10.6709 9.16215L7 5.4913L3.32915 9.16215C3.10134 9.38996 2.732 9.38996 2.50419 9.16215C2.27638 8.93435 2.27638 8.565 2.50419 8.3372L6.58752 4.25386Z"
                      fill="#18181B"
                    />
                  </svg>
                </div>
              </div>
            </button>

            {isNewOpen && (
              <div className="w-full mb-4 max-sm:mt-4 max-sm:mb-1">
                <div className="flex flex-col gap-3 w-full">
                  <div className="px-4 py-3 rounded-xl bg-slate-50 w-full">
                    <button className="flex justify-between items-center gap-2.5 w-full">
                      <div className="text-sm font-medium text-zinc-900 text-left">
                        <p>Follow Chakra on X</p>
                      </div>
                      <div className="flex gap-0.5 items-center">
                        <span className="text-sm font-semibold text-blue-600">
                          +4% Pranas
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.6 9C3.6 6.02 6.03 3.6 9.03 3.6c1.87 0 3.52.94 4.5 2.36h-1.83c-.37 0-.67.3-.67.67 0 .37.3.67.67.67h2.97c.6 0 1.08-.49 1.08-1.08V3.26c0-.37-.3-.67-.67-.67-.37 0-.67.3-.67.67v1.61C13.16 3.28 11.22 2.25 9.03 2.25c-3.74 0-6.78 3.02-6.78 6.75 0 3.73 3.04 6.75 6.78 6.75 3.4 0 6.22-2.49 6.71-5.74a.67.67 0 00-1.33-.18c-.4 2.6-2.65 4.6-5.38 4.6-3 0-5.43-2.42-5.43-5.4Z"
                            fill="#A1A1AA"
                          />
                        </svg>
                      </div>
                    </button>
                    <div className="w-full h-px bg-[#E4E4E7] mt-3" />

                    {/* Info Block 1 */}
                    <div className="flex flex-col w-full pt-3">
                      <div className="flex flex-row gap-3 w-full">
                        <div className="flex flex-col items-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 21.6C17.3 21.6 21.6 17.3 21.6 12S17.3 2.4 12 2.4 2.4 6.7 2.4 12 6.7 21.6 12 21.6Z"
                              fill="#E4E4E7"
                            />
                          </svg>
                        </div>
                        <div className="flex w-full max-sm:gap-2 max-sm:flex-col justify-between">
                          <div className="text-sm leading-6 text-zinc-900">
                            <p> Follow Chakra on X</p>
                          </div>
                          <a
                            href="https://twitter.com/ChakraChain"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white bg-rose-950  text-sm px-3 py-1 rounded-full flex gap-1 items-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M17.4636 3.5H20.3771L14.012 10.7748L21.5 20.6742H15.637L11.0448 14.6703L5.79041 20.6742H2.87519L9.68324 12.893L2.5 3.5H8.51187L12.6628 8.98783L17.4636 3.5ZM16.4411 18.9304H18.0555L7.63466 5.15225H5.90226L16.4411 18.9304Z"
                                fill="white"
                              />
                            </svg>
                            Follow Chakra
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="w-[2px] h-[14px] bg-[#E4E4E7] ml-[11px]" />

                    {/* Info Block 2 */}
                    <div className="flex flex-col w-full">
                      <div className="flex flex-row gap-3 w-full">
                        <div className="flex flex-col items-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 21.6C17.3 21.6 21.6 17.3 21.6 12S17.3 2.4 12 2.4 2.4 6.7 2.4 12 6.7 21.6 12 21.6Z"
                              fill="#E4E4E7"
                            />
                          </svg>
                        </div>
                        <div className="flex w-full max-sm:gap-2 max-sm:flex-col justify-between">
                          <div className="text-sm leading-6 text-zinc-900">
                            <p>Connect X account to complete verification</p>
                          </div>
                          <button
                            onClick={openModal}
                            className="bg-rose-950 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1"
                          >
                            <WalletMinimal size={15} />
                            Connect Wallet
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <div className="w-[2px] h-[14px] bg-[#E4E4E7] ml-[11px]" /> */}
                  </div>
                  <div className="px-4 py-3 rounded-xl bg-slate-50 w-full">
                    <button className="flex justify-between items-center gap-2.5 w-full">
                      <div className="text-sm font-medium text-zinc-900 text-left">
                        <p>Join Chakra on Discord</p>
                      </div>
                      <div className="flex gap-0.5 items-center">
                        <span className="text-sm font-semibold text-blue-600">
                          +4% Pranas
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.6 9C3.6 6.02 6.03 3.6 9.03 3.6c1.87 0 3.52.94 4.5 2.36h-1.83c-.37 0-.67.3-.67.67 0 .37.3.67.67.67h2.97c.6 0 1.08-.49 1.08-1.08V3.26c0-.37-.3-.67-.67-.67-.37 0-.67.3-.67.67v1.61C13.16 3.28 11.22 2.25 9.03 2.25c-3.74 0-6.78 3.02-6.78 6.75 0 3.73 3.04 6.75 6.78 6.75 3.4 0 6.22-2.49 6.71-5.74a.67.67 0 00-1.33-.18c-.4 2.6-2.65 4.6-5.38 4.6-3 0-5.43-2.42-5.43-5.4Z"
                            fill="#A1A1AA"
                          />
                        </svg>
                      </div>
                    </button>
                    <div className="w-full h-px bg-[#E4E4E7] mt-3" />

                    {/* Info Block 1 */}
                    <div className="flex flex-col w-full pt-3">
                      <div className="flex flex-row gap-3 w-full">
                        <div className="flex flex-col items-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 21.6C17.3 21.6 21.6 17.3 21.6 12S17.3 2.4 12 2.4 2.4 6.7 2.4 12 6.7 21.6 12 21.6Z"
                              fill="#E4E4E7"
                            />
                          </svg>
                        </div>
                        <div className="flex w-full max-sm:gap-2 max-sm:flex-col justify-between">
                          <div className="text-sm leading-6 text-zinc-900">
                            <p> Join Chakra on Discord</p>
                          </div>
                          <button
                            href="https://twitter.com/ChakraChain"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white bg-rose-950  text-sm px-3 py-1 rounded-full flex gap-1 items-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M18.9308 5.76368C17.6561 5.17878 16.2892 4.74785 14.8599 4.50104C14.8339 4.49627 14.8079 4.50818 14.7945 4.53198C14.6187 4.84466 14.4239 5.25258 14.2876 5.5732C12.7503 5.34306 11.221 5.34306 9.71527 5.5732C9.57887 5.24545 9.37707 4.84466 9.20048 4.53198C9.18707 4.50897 9.16107 4.49707 9.13504 4.50104C7.70659 4.74706 6.33963 5.17799 5.06411 5.76368C5.05307 5.76844 5.04361 5.77638 5.03732 5.78669C2.44449 9.66033 1.73421 13.4387 2.08265 17.1703C2.08423 17.1886 2.09447 17.206 2.10867 17.2171C3.81934 18.4734 5.47642 19.2361 7.10273 19.7416C7.12876 19.7496 7.15634 19.74 7.1729 19.7186C7.55761 19.1933 7.90054 18.6393 8.19456 18.0568C8.21192 18.0227 8.19535 17.9822 8.15989 17.9687C7.61594 17.7624 7.098 17.5108 6.59977 17.2251C6.56037 17.2021 6.55721 17.1457 6.59347 17.1187C6.69831 17.0402 6.80318 16.9584 6.9033 16.8759C6.92141 16.8608 6.94665 16.8576 6.96794 16.8671C10.2411 18.3615 13.7846 18.3615 17.0191 16.8671C17.0404 16.8568 17.0657 16.86 17.0846 16.8751C17.1847 16.9576 17.2895 17.0402 17.3952 17.1187C17.4314 17.1457 17.4291 17.2021 17.3897 17.2251C16.8914 17.5163 16.3735 17.7624 15.8288 17.9679C15.7933 17.9814 15.7775 18.0227 15.7949 18.0568C16.0952 18.6385 16.4381 19.1924 16.8157 19.7178C16.8315 19.74 16.8599 19.7496 16.8859 19.7416C18.5201 19.2361 20.1772 18.4734 21.8879 17.2171C21.9028 17.206 21.9123 17.1894 21.9139 17.1711C22.3309 12.857 21.2154 9.10956 18.9568 5.78748C18.9513 5.77638 18.9419 5.76844 18.9308 5.76368ZM8.68335 14.8982C7.69792 14.8982 6.88594 13.9935 6.88594 12.8824C6.88594 11.7713 7.68217 10.8666 8.68335 10.8666C9.69239 10.8666 10.4965 11.7793 10.4807 12.8824C10.4807 13.9935 9.68451 14.8982 8.68335 14.8982ZM15.329 14.8982C14.3435 14.8982 13.5316 13.9935 13.5316 12.8824C13.5316 11.7713 14.3278 10.8666 15.329 10.8666C16.338 10.8666 17.1421 11.7793 17.1264 12.8824C17.1264 13.9935 16.338 14.8982 15.329 14.8982Z"
                                fill="white"
                              />
                            </svg>
                            Join Discord
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-[2px] h-[14px] bg-[#E4E4E7] ml-[11px]" />

                    {/* Info Block 2 */}
                    <div className="flex flex-col w-full">
                      <div className="flex flex-row gap-3 w-full">
                        <div className="flex flex-col items-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 21.6C17.3 21.6 21.6 17.3 21.6 12S17.3 2.4 12 2.4 2.4 6.7 2.4 12 6.7 21.6 12 21.6Z"
                              fill="#E4E4E7"
                            />
                          </svg>
                        </div>
                        <div className="flex w-full max-sm:gap-2 max-sm:flex-col justify-between">
                          <div className="text-sm leading-6 text-zinc-900">
                            <p>
                              Connect Discord account to complete verification
                            </p>
                          </div>
                          <button
                            onClick={openModal}
                            className="bg-rose-950 text-white text-sm px-3 py-1 rounded-full flex gap-1 items-center"
                          >
                            <WalletMinimal size={15} />
                            Connect Wallet
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* <div className="w-[2px] h-[14px] bg-[#E4E4E7] ml-[11px]" /> */}
                  </div>
                  <div className="px-4 py-3 rounded-xl bg-slate-50 w-full">
                    <button className="flex justify-between items-center gap-2.5 w-full">
                      <div className="text-sm font-medium text-zinc-900 text-left">
                        <p>Join Chakra on Telegram</p>
                      </div>
                      <div className="flex gap-0.5 items-center">
                        <span className="text-sm font-semibold text-blue-600">
                          +4% Pranas
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M3.6 9C3.6 6.02 6.03 3.6 9.03 3.6c1.87 0 3.52.94 4.5 2.36h-1.83c-.37 0-.67.3-.67.67 0 .37.3.67.67.67h2.97c.6 0 1.08-.49 1.08-1.08V3.26c0-.37-.3-.67-.67-.67-.37 0-.67.3-.67.67v1.61C13.16 3.28 11.22 2.25 9.03 2.25c-3.74 0-6.78 3.02-6.78 6.75 0 3.73 3.04 6.75 6.78 6.75 3.4 0 6.22-2.49 6.71-5.74a.67.67 0 00-1.33-.18c-.4 2.6-2.65 4.6-5.38 4.6-3 0-5.43-2.42-5.43-5.4Z"
                            fill="#A1A1AA"
                          />
                        </svg>
                      </div>
                    </button>
                    <div className="w-full h-px bg-[#E4E4E7] mt-3" />

                    <div className="flex flex-col w-full pt-3">
                      <div className="flex flex-row gap-3 w-full">
                        <div className="flex flex-col items-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 21.6C17.3 21.6 21.6 17.3 21.6 12S17.3 2.4 12 2.4 2.4 6.7 2.4 12 6.7 21.6 12 21.6Z"
                              fill="#E4E4E7"
                            />
                          </svg>
                        </div>
                        <div className="flex w-full max-sm:gap-2 max-sm:flex-col justify-between">
                          <div className="text-sm leading-6 text-zinc-900">
                            <p> Join Chakra on Telegram</p>
                          </div>
                          <button
                            href="https://twitter.com/ChakraChain"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white bg-rose-950 text-sm px-3 py-1 rounded-full flex gap-1 items-center"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M9.52401 19.2672L9.83464 14.5733L18.3568 6.89441C18.7341 6.55053 18.2792 6.38405 17.7798 6.68362L7.26031 13.3306L2.71073 11.8879C1.73418 11.6105 1.72313 10.9336 2.93261 10.4453L20.6538 3.60995C21.4639 3.24369 22.2407 3.80959 21.93 5.05243L18.9117 19.2672C18.7009 20.2769 18.0905 20.5211 17.2472 20.0551L12.6532 16.6595L10.445 18.8012C10.1898 19.0563 9.97892 19.2672 9.52401 19.2672Z"
                                fill="white"
                              />
                            </svg>
                            Follow Chakra
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="w-[2px] h-[14px] bg-[#E4E4E7] ml-[11px]" />

                    <div className="flex flex-col w-full">
                      <div className="flex flex-row gap-3 w-full">
                        <div className="flex flex-col items-center">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 21.6C17.3 21.6 21.6 17.3 21.6 12S17.3 2.4 12 2.4 2.4 6.7 2.4 12 6.7 21.6 12 21.6Z"
                              fill="#E4E4E7"
                            />
                          </svg>
                        </div>
                        <div className="flex w-full max-sm:gap-2 max-sm:flex-col justify-between">
                          <div className="text-sm leading-6 text-zinc-900">
                            <p>Connect X account to complete verification</p>
                          </div>
                          <button
                            onClick={openModal}
                            className="bg-rose-950 text-white text-sm px-3 py-1 rounded-full flex items-center gap-1"
                          >
                            <WalletMinimal size={15} />
                            Connect Wallet
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch text-zinc-500 text-sm font-normal leading-5 pt-5">
                  <p>
                    {' '}
                    * To get your boosted Pranas credited, please connect your
                    social accounts to complete task verifications.
                  </p>
                </div>
              </div>
            )}
          </div>
          <div className="mt-8">
            <Leaderboard />
          </div>
        </div>
      </div>
      {toggleConnect && (
        <div>
          <Modal open={toggleConnect} onClose={() => setToggleConnect(false)} />
        </div>
      )}
    </>
  );
};
