import { useState } from "react";
import { Checkmark, Stars } from "../../components/Svg";
import { useRouter } from "next/navigation";
import PageWrapper from "../PageWrapper/PageWrapper";

type Props = {
  handleStep: () => void;
};
function ChoosePlan({ handleStep }: Props) {
  const [activeTab, setActiveTab] = useState<number>(0);
  const router = useRouter();

  const choosePlan = () => {
    handleStep();
  };
  
  return (
    <PageWrapper>
      <div className="relative z-20 lg:gap-[75px] md:gap-[55px] gap-[30px] flex flex-col items-center justify-center">
        <h1 className="md:leading-[64px] md:text-[64px] text-[48px] leading-[48px] text-center font-[900] text-white uppercase">
          Choose your plan
        </h1>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="md:pt-[31px] pt-[22px] flex lg:flex-row flex-col lg:gap-[40px] gap-[35px] items-center md:w-auto w-full">
            <p className="text-primary text-[12px] font-bold leading-[15px]">
              Save 15% on yearly plan!
            </p>
            <div className="relative bg-white flex flex-row border-[1px] border-[#E4E4E7] p-[3px] w-full md:w-auto">
              <div
                onClick={() => setActiveTab(0)}
                className={`${
                  activeTab == 0
                    ? "bg-transparent text-secondary"
                    : "bg-transparent text-[#A1A1AA]"
                } transition-colors ease-in-out duration-200 text-center relative z-20 md:w-[90px] w-[50%] hover:text-secondary cursor-pointer  px-[16px] py-[8px]  text-[14px] leading-[16px] font-semibold`}
              >
                Yearly
              </div>
              <div
                onClick={() => setActiveTab(1)}
                className={`${
                  activeTab == 1
                    ? "bg-transparent text-secondary"
                    : "bg-transparent text-[#A1A1AA]"
                } transition-colors ease-in-out duration-200 text-center relative z-20 md:w-[90px] w-[50%] hover:text-secondary cursor-pointer px-[16px] py-[8px] text-[14px] leading-[16px] font-semibold`}
              >
                {" "}
                Monthly
              </div>
              <div
                className={`${
                  activeTab === 0 ? "translate-x-0" : "translate-x-[100%]"
                } transition-transform transform ease-in-out duration-200 z-10 absolute top-[3px] left-[3px] h-[32px] bg-primary md:w-[90px] w-[calc(50%-4px)]`}
              ></div>
            </div>
          </div>
          <div className="text-white md:pt-[64px] pt-[42px] flex md:flex-row flex-col gap-[16px] items-center justify-center w-full">
            <div className="md:w-[234px] w-full lg:w-[288px] px-[16px] py-[24px] border-[1px] border-[#E4E4E780]">
              <div className="flex flex-col gap-[4px]">
                <h6 className="font-bold text-[20px] leading-[23px]">
                  Starter
                </h6>
                <p className="text-[14px] leading-[17px]">
                  Best for personal use
                </p>
              </div>
              <div className="pt-[32px] pb-[40px] flex flex-row items-center gap-[4px]">
                <p className="text-[32px] leading-[36px] font-bold ">$8</p>
                <span className="text-[12px] leading-[14px]">/month</span>
              </div>
              <button
                onClick={() => choosePlan()}
                className="text-secondary py-[12px] text-[18px] leading-[22px] font-semibold bg-primary px-[45px] w-full"
              >
                Get started
              </button>
              <div className="text-[14px] leading-[18px] pt-[40px] flex flex-col gap-[16px]">
                <p className="text-[16px] font-semibold">
                  All free features, plus:
                </p>
                <div className="flex items-center gap-[16px]">
                  <Checkmark width={24} height={24} fill="#DAFF0D" />
                  <p>Fitnes management</p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <Checkmark width={24} height={24} fill="#DAFF0D" />
                  <p>Training Planning</p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <Checkmark width={24} height={24} fill="#DAFF0D" />
                  <p>Team collaboration</p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <Checkmark width={24} height={24} fill="#DAFF0D" />
                  <p>Notifications and Reminders</p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <Checkmark width={24} height={24} fill="#DAFF0D" />
                  <p>What you get</p>
                </div>
              </div>
            </div>
            <div className="md:w-[234px] w-full lg:w-[288px] border-[1px] border-primary">
              <div className="bg-primary py-[6px] w-full items-center justify-center flex gap-[4px]">
                <p className="text-secondary text-[14px] leading-[16px] font-semibold">
                  Most Popular
                </p>
                <Stars width={16} height={16} fill="#070709" />
              </div>
              <div className="px-[16px] py-[24px]">
                <div className="flex flex-col gap-[4px]">
                  <h6 className="font-bold text-[20px] leading-[23px]">
                    Business
                  </h6>
                  <p className="text-[14px] leading-[17px]">
                    Best for personal use
                  </p>
                </div>
                <div className="pt-[32px] pb-[40px] flex flex-row items-center gap-[4px]">
                  <p className="text-[32px] leading-[36px] font-bold ">$16</p>
                  <span className="text-[12px] leading-[14px]">/month</span>
                </div>
                <button
                  onClick={() => choosePlan()}
                  className="text-secondary py-[12px] text-[18px] leading-[22px] font-semibold bg-primary px-[45px] w-full"
                >
                  Get started
                </button>
                <div className="text-[14px] leading-[18px] pt-[40px] flex flex-col gap-[16px]">
                  <p className="text-[16px] font-semibold">
                    All starter features, plus:
                  </p>
                  <div className="flex items-center gap-[16px]">
                    <Checkmark width={24} height={24} fill="#DAFF0D" />
                    <p>Fitnes management</p>
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <Checkmark width={24} height={24} fill="#DAFF0D" />
                    <p>Training Planning</p>
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <Checkmark width={24} height={24} fill="#DAFF0D" />
                    <p>Team collaboration</p>
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <Checkmark width={24} height={24} fill="#DAFF0D" />
                    <p>Notifications and Reminders</p>
                  </div>
                  <div className="flex items-center gap-[16px]">
                    <Checkmark width={24} height={24} fill="#DAFF0D" />
                    <p>What you get</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-[234px] w-full lg:w-[288px] px-[16px] py-[24px] border-[1px] border-[#E4E4E780]">
              <div className="flex flex-col gap-[4px]">
                <h6 className="font-bold text-[20px] leading-[23px]">
                  Enterprise
                </h6>
                <p className="text-[14px] leading-[17px]">
                  Best for personal use
                </p>
              </div>
              <div className="pt-[32px] pb-[40px] flex flex-row items-center gap-[4px]">
                <p className="text-[32px] leading-[36px] font-bold ">Custom</p>
              </div>
              <button
                onClick={() => choosePlan()}
                className="text-secondary py-[12px] text-[18px] leading-[22px] font-semibold bg-primary px-[45px] w-full"
              >
                Get started
              </button>
              <div className="text-[14px] leading-[18px] pt-[40px] flex flex-col gap-[16px]">
                <p className="text-[16px] font-semibold">
                  All business features, plus:
                </p>
                <div className="flex items-center gap-[16px]">
                  <Checkmark width={24} height={24} fill="#DAFF0D" />
                  <p>Fitnes management</p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <Checkmark width={24} height={24} fill="#DAFF0D" />
                  <p>Training Planning</p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <Checkmark width={24} height={24} fill="#DAFF0D" />
                  <p>Team collaboration</p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <Checkmark width={24} height={24} fill="#DAFF0D" />
                  <p>Notifications and Reminders</p>
                </div>
                <div className="flex items-center gap-[16px]">
                  <Checkmark width={24} height={24} fill="#DAFF0D" />
                  <p>What you get</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => router.back()}
          className="text-white font-bold text-[20px] leading-[24px] w-full block bg-transparent md:p-[25px] p-[17px] uppercase"
        >
          Go back
        </button>
      </div>
    </PageWrapper>
  );
}

export default ChoosePlan;
