"use client";

import PageWrapper from "../components/PageWrapper/PageWrapper";
import useStore from "@/store/store";
import DownloadTitle from "../components/DownloadTitle/DownloadTitle";
import DownloadStepper from "../components/DownloadStepper/DownloadStepper";
import DownloadPicker from "../components/DownloadPicker/DownloadPicker";
import DownloadSteps from "../components/DownloadSteps/DownloadSteps";

import { Body, Calories, Muscle, Weight } from "../components/Svg";
import UserRegistration from "../components/UserRegistration/UserRegistration";

function DownloadPage() {
  const {
    activeStep,
    setActiveStep,
    pickedAge,
    setPickedAge,
    pickedGoal,
    setPickedGoal,
    pickedWeight,
    setPickedWeight,
    pickedHeight,
    setPickedHeight,
  } = useStore();

  const downloadData = [
    {
      items: [
        {
          text: "18-24",
        },
        {
          text: "25-34",
        },
        {
          text: "35-44",
        },
        {
          text: "44+",
        },
      ],
      title: "What is your age?",
      handleClick: (value: number) => setPickedAge(value),
      value: pickedAge,
    },
    {
      items: [
        { text: "Lose weight", icon: <Calories width={32} height={32} /> },
        {
          text: "Get a bikini body",
          icon: <Body width={32} height={32} />,
        },
        { text: "Tone up a bit", icon: <Weight width={32} height={32} /> },
        {
          text: "Increase muscle mass",
          icon: <Muscle width={32} height={32} />,
        },
      ],
      title: "What is your main goal?",
      isCheckmark: true,
      handleClick: (value: number) => setPickedGoal(value),
      value: pickedGoal,
    },
    {
      items: [
        {
          text: "50-70kg",
        },
        {
          text: "70-100kg",
        },
        {
          text: "100-120kg",
        },
        {
          text: "120-150kg",
        },
      ],
      title: "What is your weight?",
      handleClick: (value: number) => setPickedWeight(value),
      value: pickedWeight,
      isCheckmark: true,
      isHeight: true,
    },
    {
      items: [
        {
          text: "160-175cm",
        },
        {
          text: "175-190cm",
        },
        {
          text: "190-200cm",
        },
        {
          text: "200cm +",
        },
      ],
      title: "What is your height?",
      handleClick: (value: number) => setPickedHeight(value),
      value: pickedHeight,
      isCheckmark: true,
      isHeight: true,
    },
  ];

  return (
    <div className="overflow-hidden w-full bg-[#E0E0E0] min-h-screen relative lg:pt-[203px]  pt-[140px] pb-[40px]">
      <PageWrapper>
        <div className="relative z-20">
          <DownloadTitle
            title={activeStep < 4 ? "Welcome" : "That’s it!"}
            subtitle={
              activeStep < 4
                ? "We need to ask you few questions"
                : "Now provide us with your personal informations"
            }
          />
          <DownloadStepper />
          <div className="md:pt-[67px] pt-[40px] flex flex-col items-center justify-center w-full">
            {activeStep < 4 ? (
              <DownloadPicker downloadData={downloadData[activeStep]} />
            ) : (
              <UserRegistration />
            )}
          </div>
          <DownloadSteps />
        </div>
      </PageWrapper>
      <div className="md:block hidden z-10 absolute md:top-[113px] right-[-42px] w-[184px] h-[130px] border-[3px] border-[#A1A1AA] "></div>
      <div className="md:block hidden z-10 absolute md:top-[203px] right-[-3px] w-[184px] h-[130px] border-[3px] border-[#A1A1AA] opacity-[73%]"></div>
      <div className="md:block hidden z-10 absolute md:top-[274px] right-[52px] w-[184px] h-[130px] border-[3px] border-[#A1A1AA] opacity-[23%]"></div>
    </div>
  );
}

export default DownloadPage;
