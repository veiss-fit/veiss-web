import { useState } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";

function DescriptiveTabs() {
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const tabs = ["Mission", "About", "Approach"];

  return (
    <div id="about-us" className="w-full h-screen relative bg-[#F2F2F2]">
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
          <div className="mx-auto lg:mx-0 relative text-secondary tracking-[0.5px] sm:text-[16px] sm:leading-[29px] text-[14px] leading-[24px] sm:w-[495px] w-full">
            <div
              className={`${
                selectedTab === 0 ? "opacity-1" : "opacity-0"
              } transition-opacity duration-300 ease-in-out lg:text-left text-center absolute lg:top-0 md:top-[60px] top-[40px] left-0 flex flex-col gap-[22px]`}
            >
              <h6 className="font-semibold lg:text-[24px] md:text-[20px] text-[18px]">
                Ease your Fitness Journey
              </h6>
              <p className="">
              At Veiss, our mission is to empower individuals on their fitness journey by providing 
              innovative technology that enhances motivation, consistency, and progress tracking in 
              the gym. We strive to transform the workout experience, ensuring that every user can 
              recognize their improvements and achieve their fitness goals with confidence and ease.
              </p>
            </div>
            <div
              className={`${
                selectedTab === 1 ? "opacity-1" : "opacity-0"
              } transition-opacity duration-300 ease-in-out lg:text-left text-center absolute lg:top-0 md:top-[60px] top-[40px] left-0 flex flex-col gap-[22px]`}
            >
              <h6 className="font-semibold lg:text-[24px] md:text-[20px] text-[18px]">What we do</h6>
              <p className="">
              Veiss offers a cutting-edge smart hardware attachment for weight machines that 
              automatically tracks repetitions, sets, and overall progress. Our solution integrates 
              seamlessly with existing gym equipment, providing users with real-time data and 
              insights that keep them engaged and motivated. delivering continuous value and support 
              to our users.
              </p>
              <p className="pt-[2px]">
              By eliminating the need for manual 
              input, we make it easier for gym-goers to focus on their workouts and stay committed 
              to their fitness objectives. Our accompanying app subscription unlocks advanced 
              analytics and personalized progress tracking, 
              </p>
            </div>
            <div
              className={`${
                selectedTab === 2 ? "opacity-1" : "opacity-0"
              } transition-opacity duration-300 ease-in-out lg:text-left text-center absolute lg:top-0 md:top-[60px] top-[40px] left-0 flex flex-col gap-[22px]`}
            >
              <h6 className="font-semibold lg:text-[24px] md:text-[20px] text-[18px]">Our Approach</h6>
              <p className="">
              We utilize advanced sensor technology to create a smart hardware attachment 
              that integrates effortlessly with existing gym equipment. Our system captures 
              essential workout metrics and syncs them directly to users&lsquo; mobile devices,
               providing:
              </p>
              <ol className="pt-[2px] list-decimal pl-5 space-y-2">
              <li>
                Effortless Tracking: No manual input—just automatic, error-free logging.
              </li>
              <li>
                Real-Time Insights: Instant feedback keeps workouts optimized and engaging.
              </li>
              <li>
                User-Centric Design: Built for ease, motivation, and consistency.
              </li>
              <li>
                Continuous Improvement: We evolve through ongoing user feedback.
              </li>
            </ol>

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
