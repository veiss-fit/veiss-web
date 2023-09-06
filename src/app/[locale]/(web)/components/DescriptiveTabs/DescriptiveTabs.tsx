import { useState } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";

function DescriptiveTabs() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const tabs = ["Mission", "Aproach", "Our plan"];

  return (
    <div className="w-full relative bg-[#F2F2F2]">
      <PageWrapper>
        <div className="relative z-20 xl:px-[205px] lg:px-[80px] lg:pt-[195px] pt-[90px] md:pb-[400px] sm:pb-[360px] pb-[260px] lg:pb-[100px] flex lg:flex-row flex-col justify-between gap-[20px]">
          <div className="inline-flex lg:justify-start justify-center lg:flex-col flex-row sm:gap-[24px] gap-[16px] uppercase lg:text-[48px] font-[900] lg:leading-[64px] md:text-[36px] md:leading-[48px] text-[19px] leading-[28px] sm:text-[28px] sm:leading-[36px] text-[#BDBDBD]">
            {tabs.map((item, index) => {
              return (
                <div
                  onClick={() => setSelectedTab(index)}
                  key={index}
                  className="relative cursor-pointer group"
                >
                  <p
                    className={`${
                      selectedTab === index ? "text-tertiary" : ""
                    } group-hover:text-tertiary transition-colors ease-out duration-300`}
                  >
                    {item}
                  </p>
                  <div
                    className={`${
                      selectedTab === index ? "w-full" : "w-0"
                    }  bg-primary  transition-all ease-in-out duration-300 absolute bottom-[-8px] lg:h-[10px] md:h-[8px] h-[6px]`}
                  ></div>
                </div>
              );
            })}
          </div>
          <div className="mx-auto lg:mx-0 relative text-secondary tracking-[0.5px] sm:text-[16px] sm:leading-[29px] text-[14px] leading-[24px] sm:w-[395px] w-full">
            <div
              className={`${
                selectedTab === 0 ? "opacity-1" : "opacity-0"
              } transition-opacity duration-300 ease-in-out lg:text-left text-center absolute lg:top-0 md:top-[60px] top-[40px] left-0 flex flex-col gap-[22px]`}
            >
              <h6 className="font-semibold lg:text-[24px] md:text-[20px] text-[18px]">
                Improve your strength
              </h6>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="pt-[2px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div
              className={`${
                selectedTab === 1 ? "opacity-1" : "opacity-0"
              } transition-opacity duration-300 ease-in-out lg:text-left text-center absolute lg:top-0 md:top-[60px] top-[40px] left-0 flex flex-col gap-[22px]`}
            >
              <h6 className="font-semibold lg:text-[24px] md:text-[20px] text-[18px]">Our aproach</h6>
              <p className="">
                Random Text about the visible part of the stream ream peam,
                heheh this is so random man :D i dont know what to do about
                this.
              </p>
              <p className="pt-[2px]">
                Random Text about the visible part of the stream ream peam,
                heheh this is so random man :D i dont know what to do about
                this.
              </p>
            </div>
            <div
              className={`${
                selectedTab === 2 ? "opacity-1" : "opacity-0"
              } transition-opacity duration-300 ease-in-out lg:text-left text-center absolute lg:top-0 md:top-[60px] top-[40px] left-0 flex flex-col gap-[22px]`}
            >
              <h6 className="font-semibold lg:text-[24px] md:text-[20px] text-[18px]">This is our plan</h6>
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="pt-[2px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </PageWrapper>
      <div className="absolute w-[184px] h-[130px] border-[3px] border-[#A1A1AA] opacity-[23%] top-[30px] left-[-44px]"></div>
      <div className="absolute w-[184px] h-[130px] border-[3px] border-[#A1A1AA] opacity-[71%] top-[108px] left-[-93px]"></div>
      <div className="absolute w-[184px] h-[130px] border-[3px] border-[#A1A1AA] top-[198px] left-[-135px]"></div>
    </div>
  );
}

export default DescriptiveTabs;
