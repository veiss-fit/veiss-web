"use client"
import { useState } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import WaitlistModal from "../WaitlistModal/WaitlistModal";

function StartExcercising() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="overflow-hidden relative w-full bg-tertiary">
      <PageWrapper>
        <div className="flex lg:flex-row flex-col justify-between lg:pt-[144px] lg:pb-[89px] pt-[80px] pb-[80px] relative z-30">
          <div className="flex flex-col text-white lg:gap-[40px] gap-[20px]">
            <h3 className="uppercase font-[900] lg:text-[64px] leading-[64px] text-[36px]">
              Prioritize yourself.
            </h3>
            <p className="text-[16px] leading-[29px] tracking-[0.5px] lg:w-[490px]">
            By focusing on what matters most—your fitness journey—Veiss helps you 
            concentrate on becoming your best self.
            </p>
          </div>
          <>
              <button
                onClick={() => setOpen(true)}
                className="lg:mt-0 mt-[132px] lg:w-auto w-[250px] relative h-[70px] text-secondary text-[18px] leading-[22px] font-semibold bg-primary px-[45px]"
              >
                Join the waitlist now!
              </button>
              <WaitlistModal open={isOpen} onOpenChange={setOpen} />
            </>
        </div>
      </PageWrapper>
      <div className="h-full w-[471px] absolute left-0 top-0 bg-[#333333] opacity-[26%] z-10"></div>
      <div className="h-[117px] w-[542px] absolute right-0 bottom-0 bg-[#5A5353] opacity-[12%] z-20"></div>
      <div className="h-[304px] w-[370px] absolute right-0 bottom-0 bg-[#333333] opacity-[8%] z-10"></div>
    </div>
  );
}

export default StartExcercising;
