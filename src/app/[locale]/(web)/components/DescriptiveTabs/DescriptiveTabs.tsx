import { useState } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";

function DescriptiveTabs() {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  const tabs = ["Mission", "About", "Approach"];

  return (
    <div id="about-us" className="w-full min-h-[75vh] relative bg-[#F2F2F2]">
      <PageWrapper>
        <div className="relative z-20 xl:px-[205px] lg:px-[80px] pt-[90px] lg:pt-[160px] pb-[20px] lg:pb-[80px] flex flex-col lg:flex-row justify-between gap-[32px]">
          {/* Tabs */}
          <div className="inline-flex lg:justify-start justify-center lg:flex-col flex-row flex-wrap gap-[16px] sm:gap-[24px] uppercase font-[900] text-[#BDBDBD] text-[19px] sm:text-[28px] md:text-[36px] lg:text-[48px] leading-[28px] sm:leading-[36px] md:leading-[48px] lg:leading-[64px] text-center lg:text-left">
            {tabs.map((item, index) => (
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
                  } bg-primary transition-all ease-in-out duration-300 absolute bottom-[-8px] lg:h-[10px] md:h-[8px] h-[6px]`}
                />
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="relative text-secondary tracking-[0.5px] text-[14px] sm:text-[16px] leading-[24px] sm:leading-[29px] w-full max-w-[600px] mx-auto lg:mx-0 px-4 sm:px-6 text-center">
            {/* Tab 0 */}
            <div
              className={`${
                selectedTab === 0 ? "block" : "hidden"
              } transition-opacity duration-300 ease-in-out text-center lg:text-left flex flex-col gap-[20px]`}
            >
              <h6 className="font-semibold text-[16px] md:text-[20px] lg:text-[24px]">
                Ease your Fitness Journey
              </h6>
              <p>
                At Veiss, our mission is to empower individuals on their fitness
                journey by providing innovative technology that enhances
                motivation, consistency, and progress tracking in the gym. We
                strive to transform the workout experience, ensuring that every
                user can recognize their improvements and achieve their fitness
                goals with confidence and ease.
              </p>
            </div>

            {/* Tab 1 */}
            <div
              className={`${
                selectedTab === 1 ? "block" : "hidden"
              } transition-opacity duration-300 ease-in-out text-center lg:text-left flex flex-col gap-[20px]`}
            >
              <h6 className="font-semibold text-[16px] md:text-[20px] lg:text-[24px]">
                What we do
              </h6>
              <p>
                Veiss offers a cutting-edge smart hardware attachment for weight
                machines that automatically tracks repetitions, sets, and
                overall progress. Our solution integrates seamlessly with
                existing gym equipment, providing users with real-time data and
                insights that keep them engaged and motivated.
              </p>
              <p>
                By eliminating the need for manual input, we make it easier for
                gym-goers to focus on their workouts and stay committed to their
                fitness objectives. Our accompanying app subscription unlocks
                advanced analytics and personalized progress tracking.
              </p>
            </div>

            {/* Tab 2 */}
            <div
              className={`${
                selectedTab === 2 ? "block" : "hidden"
              } transition-opacity duration-300 ease-in-out text-center lg:text-left flex flex-col gap-[20px]`}
            >
              <h6 className="font-semibold text-[16px] md:text-[20px] lg:text-[24px]">
                Our Approach
              </h6>
              <p>
                We utilize advanced sensor technology to create a smart hardware
                attachment that integrates effortlessly with existing gym
                equipment. Our system captures essential workout metrics and
                syncs them directly to users&lsquo; mobile devices, providing:
              </p>
              <ol className="list-disc list-inside pl-5 space-y-2 text-center mx-auto w-fit sm:text-left">
                <li>
                  Effortless Tracking: No manual input—just automatic, error-free
                  logging.
                </li>
                <li>
                  Real-Time Insights: Instant feedback keeps workouts optimized
                  and engaging.
                </li>
                <li>
                  User-Centric Design: Built for ease, motivation, and
                  consistency.
                </li>
                <li>Continuous Improvement: We evolve through ongoing user feedback.</li>
              </ol>
            </div>
          </div>
        </div>
      </PageWrapper>

      {/* Decorative Squares (hide on small screens) */}
      <div className="hidden sm:block absolute w-[184px] h-[130px] border-[3px] border-[#A1A1AA] opacity-[23%] top-[30px] left-[-44px]" />
      <div className="hidden sm:block absolute w-[184px] h-[130px] border-[3px] border-[#A1A1AA] opacity-[71%] top-[108px] left-[-93px]" />
      <div className="hidden sm:block absolute w-[184px] h-[130px] border-[3px] border-[#A1A1AA] top-[198px] left-[-135px]" />
    </div>
  );
}

export default DescriptiveTabs;
