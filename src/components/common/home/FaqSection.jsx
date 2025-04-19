import { useState } from "react"
const FAQItem = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full px-4 py-3 sm:px-6 sm:py-4 flex flex-col gap-1.5 border border-zinc-200 bg-white rounded-xl sm:rounded-2xl shadow-sm">
      <div className="flex justify-between items-start cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="text-zinc-900 text-xs sm:text-sm font-semibold w-[85%] sm:w-[90%]">{title}</div>
        <div className="min-w-[20px] min-h-[20px] sm:w-[22px] sm:h-[22px] flex justify-center items-center border border-zinc-200 bg-white rounded-md">
          <div className="h-3 sm:h-3.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className={`transform transition-transform ${isOpen ? "rotate-180" : ""}`}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.50419 4.83785C2.732 4.61004 3.10134 4.61004 3.32915 4.83785L7 8.5087L10.6709 4.83785C10.8987 4.61004 11.268 4.61004 11.4958 4.83785C11.7236 5.06565 11.7236 5.435 11.4958 5.6628L7.41248 9.74614C7.18468 9.97394 6.81533 9.97394 6.58752 9.74614L2.50419 5.6628C2.27638 5.435 2.27638 5.06565 2.50419 4.83785Z"
                fill="#18181B"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className={`text-zinc-600 text-xs sm:text-sm font-normal w-full mt-1 ${isOpen ? "block" : "hidden"}`}>
        {children}
      </div>
    </div>
  )
}

export default function FAQSection() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-8 sm:py-10 md:py-14">
      <div className="text-zinc-900 text-sm sm:text-base font-semibold leading-tight mb-4 sm:mb-6">FAQ</div>

      <div className="flex flex-col gap-2 sm:gap-3">
        <FAQItem title="What is Chakra?">
          Chakra Network is a high-performance middleware chain designed as a cross-chain settlement layer for major
          blockchains. Our mission is to securely bridge and efficiently settle native BTC and BTC-derived assets (e.g.,
          Wrapped BTC and ERC-20 LST/LRTs) across diverse ecosystems, unlocking new opportunities in yield-generating
          scenarios.
        </FAQItem>

        <FAQItem title="Can I stake Bitcoin on Babylon through Chakra?">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div>
              Currently, Chakra has paused its Bitcoin Staking Pool for Babylon as we undergo rebranding and prepare to
              launch our new settlement services, cross-chain mining feature, and upcoming Vault product. However,
              Chakra continues to serve as a top Finality Provider for Babylon Bitcoin Staking, securing over $122.05M
              TVL. You can still stake Bitcoin directly on Babylon and select Chakra as your Finality Provider for
              enhanced security and trust.
            </div>
            <div>
              For funds already in the Chakra Bitcoin Staking Pool, users have two options: withdraw, or keep them with
              Chakra for automatic transfer to the upcoming Vault product within the Chakra ecosystem, where you can
              unlock additional yield opportunities.
            </div>
          </div>
        </FAQItem>

        <FAQItem title="What fees are associated with withdrawing BTC from Chakra?">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div>
              BTC withdrawals will be processed on the BNB Chain, and users will only need to cover the BNB transaction
              costs, which are less than 0.00007 BNB per transaction.
            </div>
            <div>
              To minimize expenses for our users, Chakra has waived all administration fees. We remain committed to
              providing a cost-effective and user-friendly experience.
            </div>
          </div>
        </FAQItem>

        <FAQItem title="If I keep my staked BTC with Chakra, what will be the return?">
          Your returns will come from multiple yield streams: you will earn Babylon Points, allocated proportionally
          based on Babylon's Point System, and Chakra Pranas, where every 0.0001 BTC staked earns you 1 Prana daily,
          refreshed via snapshots in the Chakra Staking dApp. Additionally, with the launch of the Vault product, your
          staked BTC will participate in cross-chain mining, unlocking more layers of yield across EVM and non-EVM
          ecosystems. For more details on Babylon Points, visit:{" "}
          <a
            href="https://babylonlabs.io/blog"
            target="_blank"
            className="text-blue-500 text-xs sm:text-sm font-normal leading-tight"
            rel="noreferrer"
          >
            https://babylonlabs.io/blog.
          </a>
        </FAQItem>

        <FAQItem title="What is Prana, and can it be redeemed in the future?">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div>
              Prana is a reward point system for users staking Bitcoin on Chakra, serving as both an early participation
              credential and a key incentive within the Chakra ecosystem. While the exchange details for Prana have not
              yet been announced, it may have additional use cases or reward formats in the future.
            </div>
            <div>
              We will continue to enhance Prana's value based on ecosystem growth and community feedback. Keep
              participating in our campaigns to earn more Prana—exciting opportunities await!
            </div>
          </div>
        </FAQItem>

        <FAQItem title="What are Chakra's future plans?">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div>
              Chakra is dedicated to building a robust modular settlement network that unlocks Bitcoin's liquidity and
              enables seamless cross-chain settlements through our innovative Proof of Assets mechanism.
            </div>
            <div>
              Looking ahead, we plan to launch the Vault product in our ecosystem to unlock cross-chain mining and
              deliver multi-layered yield opportunities for BTC holders. At the same time, we are deepening our
              strategic collaboration with Babylon to drive broader adoption and integration.
            </div>
            <div>
              Chakra will continue to power true omnichain liquidity infrastructure and accelerate the growth of
              multi-chain ecosystems. Stay tuned for exciting updates as we advance our rebranding journey!
            </div>
          </div>
        </FAQItem>
      </div>
    </div>
  )
}
