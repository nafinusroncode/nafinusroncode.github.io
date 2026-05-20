import React from 'react';

const TechStackIcon = ({ TechStackIcon, Language, Initials }) => {
  return (
    <div className="group p-6 rounded-2xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300 ease-in-out flex flex-col items-center justify-center gap-3 hover:scale-105 cursor-pointer shadow-lg hover:shadow-xl">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-50 blur transition duration-300"></div>
        {TechStackIcon ? (
          <img 
            src={TechStackIcon} 
            alt={`${Language} icon`} 
            className="relative h-16 w-16 md:h-20 md:w-20 transform transition-transform duration-300"
          />
        ) : (
          <div className="relative h-16 w-16 md:h-20 md:w-20 rounded-2xl bg-gradient-to-br from-[#6366f1]/30 to-[#a855f7]/30 border border-white/10 flex items-center justify-center text-white font-bold text-lg md:text-xl transform transition-transform duration-300">
            {Initials || Language.slice(0, 2).toUpperCase()}
          </div>
        )}
      </div>
      <span className="text-slate-300 font-semibold text-sm md:text-base tracking-wide group-hover:text-white transition-colors duration-300">
        {Language}
      </span>
    </div>
  );
};

export default TechStackIcon; 
