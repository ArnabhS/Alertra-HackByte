import React from "react";

const PhoneMockup = ({ children }) => {
  return (
    <div className="relative mx-auto max-w-[300px] rounded-2xl ">
        
      <div className="rounded-[3rem] border-[12px] border-zinc-800 shadow-[rgba(0,_0,_0,_0.5)_0px_30px_90px] ">
      
        {/* Status Bar */}
        <div className="relative h-8 w-full rounded-t-[3rem] bg-zinc-400 px-6 text-white">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm">9:41</div>
          <div className="absolute right-6 top-1/2 -translate-y-1/2 flex space-x-1">
            <div className="h-2 w-2 rounded-full bg-pink-500" />
            <div className="h-2 w-2 rounded-full bg-pink-500" />
            <div className="h-2 w-2 rounded-full bg-pink-500" />
          </div>
        </div>
        {/* Phone Screen (Dynamic Content) */}
        <div className="h-[510px] rounded-b-3xl w-full bg-pink-50 overflow-hidden flex items-center justify-center">
          {children}
        </div>
      
      </div>
    </div>
  );
};

export default PhoneMockup;
