import React, { useState } from 'react';

const Header = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleDonateClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 300);
  };

  return (
    <header className="w-full bg-[#002726]">
      <div className="flex justify-center px-6 py-4 mx-4 rounded-full shadow-md bg-[#002726]">
        <div className="flex items-center gap-x-12">
          {/* Logo */}
          <img 
            src="/images/header-logo.png" 
            alt="United Ummah Logo" 
            className="h-20 w-auto"
          />

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8 right-10">
            {["HOME", "ABOUT US", "OUR PROGRAMS", "EVENTS", "COMMUNITY SERVICES", "CONTACT"].map((item, index) => (
              <a key={index} href="#" className="text-white hover:opacity-80 transition-opacity text-base tracking-wide">
                {item}
              </a>
            ))}
          </nav>

          {/* Prayer + Donate Container */}
          <div className="relative -right-12 flex items-center">
            {/* Green Rounded Background */}
            <div className="absolute right-0 left-0 h-[60px] bg-[#90BC5D] rounded-full z-0"></div>

            {/* Prayer Info + Timer */}
            <div className="relative flex items-center bg-transparent pl-6 pr-2 h-[60px] z-10">
              <div className="text-black leading-tight whitespace-nowrap mr-5">
                <div className="text-[13px] font-medium">Islamic Centre of Canada (ICC)</div>
                <div className="font-bold text-[16px]">NEXT PRAYER: FAJR</div>
              </div>

              <div className="flex mr-6">
                {["00", "00", "49"].map((val, i) => (
                  <div key={i} className="flex flex-col items-center mx-1">
                    <span className="text-black px-2 rounded text-md font-bold">{val}</span>
                    <span className="text-black font-bold text-[15px]">{["HRS", "MIN", "SEC"][i]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Donate Button */}
            <button 
              onClick={handleDonateClick}
              className={`h-[60px] w-[190px] flex items-center justify-center font-semibold text-[16px] py-9 tracking-wide transition-all duration-300 ease-in-out rounded-full z-10 ${
                isClicked
                  ? 'scale-105 bg-[#bf8c4b]'
                  : 'bg-[#f1e8da] text-black hover:bg-[#bf8c4b] hover:scale-105'
              }`}
            >
              DONATE NOW
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
