"use client";
import { useState } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import WaitlistModal from "../WaitlistModal/WaitlistModal";

function StartExcercising() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="overflow-hidden relative w-full bg-tertiary">
      <PageWrapper>
        <div className="relative z-30 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-[60px] lg:gap-0 lg:pt-[144px] lg:pb-[89px] pt-[80px] pb-[80px]">
          {/* Left Section */}
          <div className="flex flex-col text-white gap-[20px] lg:gap-[40px] max-w-[600px] w-full text-center lg:text-left px-4 sm:px-6 lg:px-0">
            <h3 className="uppercase font-[900] text-[36px] leading-[44px] sm:text-[48px] sm:leading-[56px] lg:text-[64px] lg:leading-[64px]">
              Prioritize yourself.
            </h3>
            <p className="text-[16px] sm:text-[18px] leading-[26px] sm:leading-[29px] tracking-[0.5px]">
              By focusing on what matters most—your fitness journey—Veiss helps you 
              concentrate on becoming your best self.
            </p>
          </div>

          {/* Right Button Section */}
          <div className="w-full flex justify-center lg:justify-end px-4 sm:px-6 lg:px-0">
            <button
              onClick={() => setOpen(true)}
              className="w-[200px] sm:w-[250px] h-[56px] sm:h-[70px] bg-primary text-secondary text-[16px] sm:text-[18px] leading-[22px] font-semibold"
            >
              Join the waitlist now!
            </button>
          </div>
          <WaitlistModal open={isOpen} onOpenChange={setOpen} />
        </div>
      </PageWrapper>

      {/* Background Decoration */}
      <div className="h-full w-[300px] sm:w-[400px] md:w-[471px] absolute left-0 top-0 bg-[#333333] opacity-[26%] z-10"></div>
      <div className="h-[117px] w-[300px] sm:w-[400px] md:w-[542px] absolute right-0 bottom-0 bg-[#5A5353] opacity-[12%] z-20"></div>
      <div className="h-[200px] sm:h-[250px] md:h-[304px] w-[280px] sm:w-[320px] md:w-[370px] absolute right-0 bottom-0 bg-[#333333] opacity-[8%] z-10"></div>
    </div>
  );
}

export default StartExcercising;
