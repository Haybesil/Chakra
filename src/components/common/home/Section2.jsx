"use client"

import { useState } from "react"
import Modal from "../base/Modal"
import { PranasTab, StakeTab } from "../base/TabContent"

export default function Section2() {
  const [toggleConnect, setToggleConnect] = useState(false)
  const [activeTab, setActiveTab] = useState("Pranas")

  const openModal = () => {
    setToggleConnect(true)
  }

  return (
    <div className="w-full px-4 py-6">
      <div className="w-full max-w-[800px] mx-auto">
        {/* Tab Buttons */}
        <div className="p-[6px] mx-auto sm:mx-8 md:mx-16 lg:mx-44 bg-white rounded-[24px] flex items-center z-10 max-w-full">
          <div
            className={`w-1/2 text-nowrap px-2 sm:px-3 py-[6px] rounded-full cursor-pointer h-8 sm:h-10 flex justify-center items-center font-medium text-sm sm:text-base text-center leading-tight ${
              activeTab === "Pranas" ? "bg-[#451E17] text-white" : "bg-transparent text-zinc-900"
            }`}
            onClick={() => setActiveTab("Pranas")}
          >
            Pranas
          </div>
          <div
            className={`w-1/2 text-nowrap px-2 sm:px-3 py-[6px] rounded-full cursor-pointer h-8 sm:h-10 flex justify-center items-center font-medium text-sm sm:text-base text-center leading-tight ${
              activeTab === "Staking Pool History" ? "bg-[#451E17] text-white" : "bg-transparent text-zinc-900"
            }`}
            onClick={() => setActiveTab("Staking Pool History")}
          >
            <span className="hidden xs:inline">Staking Pool History</span>
            <span className="xs:hidden">Staking</span>
          </div>
        </div>

        {/* Tab Content */}
        <div className="mt-4 p-2 sm:p-4">
          {activeTab === "Pranas" && (
            <div>
              <PranasTab />
            </div>
          )}

          {activeTab === "Staking Pool History" && (
            <div>
              <StakeTab />
            </div>
          )}
        </div>
      </div>

      {toggleConnect && (
        <div>
          <Modal open={toggleConnect} onClose={() => setToggleConnect(false)} />
        </div>
      )}
    </div>
  )
}
