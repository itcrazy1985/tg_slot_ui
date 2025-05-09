import React from "react";

interface TopbarProps {
  onMenuClick: () => void;
}

export function Topbar({ onMenuClick }: TopbarProps) {
  return (
    <header className="flex items-center justify-between bg-[#181B2A] border-b border-[#23263A] px-4 sm:px-6 md:px-8 py-3 md:py-4">
      {/* Left Section: Menu Button (Mobile) and Balance */}
      <div className="flex items-center gap-3 md:gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden text-white p-2 hover:bg-[#23263A] rounded-lg"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <span className="text-base md:text-lg font-bold text-purple-400">K 1,200,000.00</span>
      </div>

      {/* Center Section: Action Buttons - always in a row */}
      <div className="flex items-center gap-2 md:gap-4">
        <button className="bg-green-500 hover:bg-green-600 text-white px-3 md:px-4 py-1 rounded-lg text-xs sm:text-sm font-semibold transition-colors">
          Fund
        </button>
        <button className="bg-purple-500 hover:bg-purple-600 text-white px-3 md:px-4 py-1 rounded-lg text-xs sm:text-sm font-semibold transition-colors">
          Withdraw
        </button>
      </div>

      {/* Right Section: Auth Buttons */}
      <div className="flex items-center gap-2 md:gap-4">
        <button className="bg-[#23263A] text-white px-3 md:px-4 py-1 rounded-lg text-sm font-semibold hover:bg-[#2d3150] transition-colors">
          Login
        </button>
        <button className="bg-[#23263A] text-white px-3 md:px-4 py-1 rounded-lg text-sm font-semibold hover:bg-[#2d3150] transition-colors">
          Sign Up
        </button>
      </div>
    </header>
  );
}
