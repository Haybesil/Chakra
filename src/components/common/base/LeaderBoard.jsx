// import Link from "next/link" 
import { ArrowUpRight } from "lucide-react"

// Renamed from 'a' to 'ExternalLink' and properly defined as a component
function ExternalLink({ address, href }) {
  return (
    <a href={href} target="_blank" className="flex justify-start items-center gap-[6px]">
      <div className="text-sm font-medium leading-tight">{address}</div>
      <div className="cursor-pointer">
        <ArrowUpRight className="w-5 h-5 text-[#A1A1AA]" />
      </div>
    </a>
  )
}

function FirstPlaceMedal() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M2.88 4.2C2.88 3.53726 3.41726 3 4.08 3H19.92C20.5827 3 21.12 3.53726 21.12 4.2V16.1696C21.12 16.5956 20.8941 16.9897 20.5266 17.205L12.6066 21.8447C12.232 22.0641 11.768 22.0641 11.3934 21.8447L3.47345 17.205C3.10586 16.9897 2.88 16.5956 2.88 16.1696V4.2Z"
        fill="url(#paint0_linear_first)"
      />
      <path
        d="M5.64001 6.11953C5.64001 5.78816 5.90864 5.51953 6.24001 5.51953H17.76C18.0914 5.51953 18.36 5.78816 18.36 6.11953V14.8053C18.36 15.013 18.2526 15.2059 18.076 15.3153L12.316 18.8838C12.1224 19.0037 11.8776 19.0037 11.684 18.8838L5.92403 15.3153C5.74745 15.2059 5.64001 15.013 5.64001 14.8053V6.11953Z"
        fill="#FECC2B"
      />
      <path d="M12.9586 15H11.7886V9.852L10.4836 10.986V9.726L11.7886 8.592H12.9586V15Z" fill="#F5F5F5" />
      <defs>
        <linearGradient
          id="paint0_linear_first"
          x1="8.29501"
          y1="3.50526"
          x2="16.0039"
          y2="19.8609"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDF0D5" />
          <stop offset="1" stopColor="#F8D169" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function SecondPlaceMedal() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M2.88 4.2C2.88 3.53726 3.41726 3 4.08 3H19.92C20.5827 3 21.12 3.53726 21.12 4.2V16.1696C21.12 16.5956 20.8941 16.9897 20.5266 17.205L12.6066 21.8447C12.232 22.0641 11.768 22.0641 11.3934 21.8447L3.47345 17.205C3.10586 16.9897 2.88 16.5956 2.88 16.1696V4.2Z"
        fill="url(#paint0_linear_second)"
      />
      <path
        d="M5.64001 6.11953C5.64001 5.78816 5.90864 5.51953 6.24001 5.51953H17.76C18.0914 5.51953 18.36 5.78816 18.36 6.11953V14.8053C18.36 15.013 18.2526 15.2059 18.076 15.3153L12.316 18.8838C12.1224 19.0037 11.8776 19.0037 11.684 18.8838L5.92403 15.3153C5.74745 15.2059 5.64001 15.013 5.64001 14.8053V6.11953Z"
        fill="#9B9DA2"
      />
      <path
        d="M13.9846 15H10.0876V13.947L12.4816 11.166C12.7156 10.887 12.8146 10.689 12.8146 10.392C12.8146 9.915 12.5356 9.591 12.0406 9.591C11.6536 9.591 11.2576 9.789 11.2576 10.41H10.0876C10.0876 9.24 10.9426 8.538 12.0406 8.538C13.1746 8.538 13.9846 9.249 13.9846 10.401C13.9846 11.022 13.7416 11.355 13.3006 11.868L11.5096 13.947H13.9846V15Z"
        fill="#F5F5F5"
      />
      <defs>
        <linearGradient
          id="paint0_linear_second"
          x1="3.96001"
          y1="3"
          x2="13.02"
          y2="21.54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ECEFF7" />
          <stop offset="1" stopColor="#B5B5B6" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function ThirdPlaceMedal() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M2.88 4.2C2.88 3.53726 3.41726 3 4.08 3H19.92C20.5827 3 21.12 3.53726 21.12 4.2V16.1696C21.12 16.5956 20.8941 16.9897 20.5266 17.205L12.6066 21.8447C12.232 22.0641 11.768 22.0641 11.3934 21.8447L3.47345 17.205C3.10586 16.9897 2.88 16.5956 2.88 16.1696V4.2Z"
        fill="url(#paint0_linear_third)"
      />
      <path
        d="M5.64001 6.11953C5.64001 5.78816 5.90864 5.51953 6.24001 5.51953H17.76C18.0914 5.51953 18.36 5.78816 18.36 6.11953V14.8053C18.36 15.013 18.2526 15.2059 18.076 15.3153L12.316 18.8838C12.1224 19.0037 11.8776 19.0037 11.684 18.8838L5.92403 15.3153C5.74745 15.2059 5.64001 15.013 5.64001 14.8053V6.11953Z"
        fill="#DA9062"
      />
      <path
        d="M14.0116 13.146C14.0116 14.424 13.0756 15.054 11.9776 15.054C10.9336 15.054 9.95264 14.505 9.93464 13.164H11.1046C11.1226 13.74 11.5186 14.001 11.9776 14.001C12.4816 14.001 12.8416 13.686 12.8416 13.11C12.8416 12.579 12.5176 12.228 11.9416 12.228H11.7706V11.211H11.9416C12.5086 11.211 12.7516 10.86 12.7516 10.41C12.7516 9.87 12.3916 9.591 11.9686 9.591C11.5276 9.591 11.2036 9.879 11.1766 10.365H10.0066C10.0336 9.222 10.8886 8.538 11.9686 8.538C13.1026 8.538 13.9216 9.294 13.9216 10.374C13.9216 11.067 13.6066 11.463 13.1836 11.688C13.6426 11.931 14.0116 12.372 14.0116 13.146Z"
        fill="#F5F5F5"
      />
      <defs>
        <linearGradient id="paint0_linear_third" x1="12" y1="3" x2="12" y2="22.2" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FFC190" />
          <stop offset="1" stopColor="#C35A2A" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export default function Leaderboard() {
  return (
    <div
      className="flex flex-col gap-4 bg-white rounded-[24px] relative z-10 border border-[#E4E4E7] max-sm:p-5 p-8 max-sm:w-[calc(100vw-48px)]"
      style={{ boxShadow: "rgba(0, 0, 0, 0.04) 0px 6px 18px -3px" }}
    >
      <div className="w-full flex items-center justify-between">
        <div className="text-center text-[#121212] text-base font-semibold leading-snug">Leaderboard</div>
        <div className="text-[#71717A] max-sm:text-xs text-sm font-normal leading-tight text-right">
          Last Updated: 19 Apr 25 01:00
        </div>
      </div>
      <div>
        <div className="overflow-auto max-sm:no-scrollbar">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-[#A1A1AA] border-b border-[#F4F4F5] text-left p-3">Rank</th>
                <th className="text-[#A1A1AA] border-b border-[#F4F4F5] text-left p-3">Address</th>
                <th className="text-[#A1A1AA] border-b border-[#F4F4F5] text-left p-3">Invited By</th>
                <th className="text-[#A1A1AA] border-b border-[#F4F4F5] text-left p-3">Pranas</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div>
                    <FirstPlaceMedal />
                  </div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm leading-tight font-medium">bc1p8c...aaz4m</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <ExternalLink
                    address="0x0000...0001"
                    href="https://mempool.space/address/0x0000000000000000000000000000000000000001"
                  />
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm font-medium leading-tight">7,862,400</div>
                </td>
              </tr>
              <tr>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div>
                    <SecondPlaceMedal />
                  </div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm leading-tight font-medium">bc1pye...ypz04</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <ExternalLink
                    address="0x0000...0001"
                    href="https://mempool.space/address/0x0000000000000000000000000000000000000001"
                  />
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm font-medium leading-tight">571,120</div>
                </td>
              </tr>
              <tr>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div>
                    <ThirdPlaceMedal />
                  </div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm leading-tight font-medium">bc1pka...4m696</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <ExternalLink
                    address="bc1pjm...0cgk"
                    href="https://mempool.space/address/bc1pjmnrq4e7wrr8ggvcz24kr5caccdltjlw7uz3rnmarc3jw7234m9qqp0cgk"
                  />
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm font-medium leading-tight">543,884</div>
                </td>
              </tr>
              <tr>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="w-6 text-center font-medium">4</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm leading-tight font-medium">bc1pfg...jg8rr</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <ExternalLink
                    address="bc1pna...tq80"
                    href="https://mempool.space/address/bc1pna5fgzqdas8s4jj88dhvsnckdwpsj753hgk7excyrvlj46pfa3pqm4tq80"
                  />
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm font-medium leading-tight">330,193</div>
                </td>
              </tr>
              <tr>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="w-6 text-center font-medium">5</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm leading-tight font-medium">bc1pls...8utfk</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <ExternalLink
                    address="0x5Dec...c083"
                    href="https://mempool.space/address/0x5Dec7BBDbF0BA7612Bbd24c066F492783de5c083"
                  />
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm font-medium leading-tight">288,000</div>
                </td>
              </tr>
              <tr>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="w-6 text-center font-medium">6</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm leading-tight font-medium">bc1qux...jwnww</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <ExternalLink
                    address="0x5Dec...c083"
                    href="https://mempool.space/address/0x5Dec7BBDbF0BA7612Bbd24c066F492783de5c083"
                  />
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm font-medium leading-tight">262,800</div>
                </td>
              </tr>
              <tr>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="w-6 text-center font-medium">7</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm leading-tight font-medium">bc1p6t...cf35z</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <ExternalLink
                    address="0x0000...0001"
                    href="https://mempool.space/address/0x0000000000000000000000000000000000000001"
                  />
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm font-medium leading-tight">234,738</div>
                </td>
              </tr>
              <tr>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="w-6 text-center font-medium">8</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm leading-tight font-medium">bc1pav...ralys</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <ExternalLink
                    address="0xb271...1da9"
                    href="https://mempool.space/address/0xb271769c54B07E33e7F9f337faC2988C404e1da9"
                  />
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm font-medium leading-tight">212,300</div>
                </td>
              </tr>
              <tr>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="w-6 text-center font-medium">9</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm leading-tight font-medium">bc1pv9...prtf5</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <ExternalLink
                    address="bc1pcq...w3rg"
                    href="https://mempool.space/address/bc1pcqdmm0uc2trs456704v48yuklg4666xrgcuxgyqej9lqsm73kz3s53w3rg"
                  />
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm font-medium leading-tight">203,874</div>
                </td>
              </tr>
              <tr>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="w-6 text-center font-medium">10</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm leading-tight font-medium">bc1pl4...tjf6x</div>
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <ExternalLink
                    address="0x0000...0001"
                    href="https://mempool.space/address/0x0000000000000000000000000000000000000001"
                  />
                </td>
                <td className="border-b border-[#F4F4F5] p-3">
                  <div className="text-sm font-medium leading-tight">168,469</div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex items-center justify-between py-2 px-3">
            <div></div>
            <p className="text-sm">1–10 of 100</p>
            <div className="flex">
              <button className="p-1 text-gray-400 cursor-not-allowed" disabled aria-label="Previous page">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" fill="currentColor" />
                </svg>
              </button>
              <button className="p-1 text-gray-700" aria-label="Next page">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Export the Medal components if needed elsewhere
export { FirstPlaceMedal, SecondPlaceMedal, ThirdPlaceMedal, ExternalLink }