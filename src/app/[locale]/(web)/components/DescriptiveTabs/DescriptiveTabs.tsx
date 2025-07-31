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
                  Empowering Smarter Lifting 
              </h6>
              <p>
                  At Veiss, our mission is to make strength training more effective, 
                  motivating, and rewarding. By combining smart gym technology with 
                  intuitive insights, we help users see real progress. No more 
                  guesswork or burnout—just clear, measurable growth, every step of the way.
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
                  Veiss is a smart hardware and software solution that transforms 
                  traditional weight machines into intelligent training partners. 
                  Our compact device attaches to gym equipment to automatically track 
                  reps, sets, tempo, and form. 
              </p>
              <p>
                  Paired with our app, users get real-time performance insights, 
                  personalized feedback, and milestone tracking that keeps them 
                  engaged and motivated—session after session.
              </p>
            </div>

            {/* Tab 2 */}
            <div
              className={`${
                selectedTab === 2 ? "block" : "hidden"
              } transition-opacity duration-300 ease-in-out text-center lg:text-left flex flex-col gap-[20px]`}
            >
              <h6 className="font-semibold text-[16px] md:text-[20px] lg:text-[24px]">
                How We Do It 
              </h6>
              <p>
                We engineer sensor-driven hardware that effortlessly attaches to 
                weight machines and connects wirelessly to our mobile app. 
                The system captures every rep, tempo, and range of motion—giving 
                users instant, actionable feedback without interrupting their workouts.
              </p>
              <ol className="list-disc list-inside pl-5 space-y-2 text-center mx-auto w-fit sm:text-left">
                <li>
                  Effortless Tracking - Fully automatic. Just lift. 
                </li>
                <li>
                  Instant Feedback - Optimize performance in real time. 
                </li>
                <li>
                  Designed for Lifters - Built for motivation and ease of use. 
                </li>
                <li>
                  Driven by Feedback - Constantly evolving with user input.
                </li>
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
