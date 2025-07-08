"use client";
import { useState } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import WaitlistModal from "../WaitlistModal/WaitlistModal";

type Props = {
  mode?: "dark" | "light";
};

function SubscribeBanner({ mode = "dark" }: Props) {
  const [isOpen, setOpen] = useState(false);
  return (
    <div
      className={`${
        mode === "dark"
          ? "bg-cover bg-center bg-no-repeat bg-tertiary"
          : "bg-primary"
      } relative overflow-hidden`}
      style={{
        backgroundImage:
          mode === "dark" ? "url(/images/secondaryTexture.png)" : "",
      }}
    >
      <PageWrapper>
        <div
          className={`${
            mode === "dark" ? "2xl:px-[100px] xl:px-[50px]" : ""
          } relative z-[20] flex flex-col lg:flex-row lg:items-center justify-between lg:py-[105px] py-[55px] px-6 sm:px-10`}
        >
          <div className="flex flex-col gap-4 lg:gap-0 text-left">
            <h2
              className={`${
                mode === "dark" ? "text-white" : "text-secondary"
              } uppercase font-extrabold text-[28px] sm:text-[32px] md:text-[36px] leading-[40px] sm:leading-[48px] md:leading-[64px]`}
            >
              Make every workout count.
            </h2>
          </div>

          <button
            onClick={() => setOpen(true)}
            className={`${
              mode === "dark"
                ? "text-secondary bg-primary hover:bg-primary/90"
                : "text-white bg-secondary hover:bg-secondary/90"
            } relative z-[20] mt-8 lg:mt-0 lg:w-[140px] sm:w-[100px] text-[12px] sm:text-[18px] leading-[20px] sm:leading-[22px] font-semibold px-6 py-4 rounded`}
          >
            Join our Waitlist
          </button>
          <WaitlistModal open={isOpen} onOpenChange={setOpen} />
        </div>
      </PageWrapper>

      {/* Decorative Borders */}
      {/* Show on large screens only */}
      <div
        className={`${
          mode === "dark" ? "left-[-16px]" : "left-[75px]"
        } lg:block hidden w-[184px] h-[130px] border-[3px] border-[#a1a1aa] opacity-[71%] absolute top-[80px]`}
      />
      <div
        className={`${
          mode === "dark" ? "left-[26px]" : "left-[117px]"
        } lg:block hidden w-[141px] h-[130px] border-[3px] border-r-0 border-t-0 border-[#a1a1aa] absolute top-[-9px]`}
      />
      <div
        className={`${
          mode === "dark" ? "left-[-66px]" : "left-[25px]"
        } lg:block hidden w-[184px] h-[130px] border-[3px] border-[#a1a1aa] opacity-[23%] absolute bottom-[-9px]`}
      />

      {/* Simplified borders for mobile */}
      <div className="block lg:hidden h-[130px] w-[90px] border-[3px] border-[#A1A1AA] absolute bottom-[-60px] right-[8px] rounded-sm opacity-60" />
      <div className="block lg:hidden h-[100px] w-[70px] border-[3px] border-[#A1A1AA] absolute bottom-[-30px] right-[72px] opacity-40 rounded-sm" />
      <div className="block lg:hidden h-[70px] w-[50px] border-[3px] border-[#A1A1AA] absolute bottom-[-10px] right-[130px] opacity-20 rounded-sm" />
    </div>
  );
}

export default SubscribeBanner;
