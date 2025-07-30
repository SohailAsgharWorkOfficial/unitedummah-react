import React from 'react';

const CommunityEventsStats = () => {
  return (
    <div className="relative w-full py-20">
      {/* Background with shadow effect */}
   {/* Background with shadow effect */}
<div 
  className="absolute inset-0"
  style={{ backgroundColor: '#0C403C' }}
></div>

      {/* Main content container */}
      <div 
        className="relative z-10 mx-auto max-w-6xl px-8 py-16 rounded-lg"
        style={{ backgroundColor: '#032527' }}
      >
        {/* Mosque Icon */}
        <div className="flex justify-center mb-8">
          <img 
            src="/images/mosque.png" 
            alt="Mosque icon" 
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Title */}
        <h2 className="text-white text-3xl font-light text-center mb-16">
          Community Events
        </h2>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Stat 1 */}
          <div className="text-white">
            <div className="text-5xl font-light mb-4">
              100,000<span className="text-4xl">+</span>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">
              Attendees across all<br />
              events programs
            </div>
          </div>

          {/* Stat 2 */}
          <div className="text-white">
            <div className="text-5xl font-light mb-4">
              10,000<span className="text-4xl">+</span>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">
              Attendees at weekly<br />
              programs
            </div>
          </div>

          {/* Stat 3 */}
          <div className="text-white">
            <div className="text-5xl font-light mb-4">
              600<span className="text-4xl">+</span>
            </div>
            <div className="text-sm text-gray-300 leading-relaxed">
              Camp Attendees
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityEventsStats;