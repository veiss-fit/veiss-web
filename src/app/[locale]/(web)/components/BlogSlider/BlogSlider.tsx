import { useState } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import { ArrowRight } from "../Svg";

function BlogSlider() {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const handleSlideChange = () => {
    if (activeSlide === 2) {
      setActiveSlide(0);
    } else {
      setActiveSlide(activeSlide + 1);
    }
  };

  return (
    <div className="flex flex-row lg:h-[827px] h-[472px] relative">
      <div
        onClick={handleSlideChange}
        className="lg:hidden absolute bottom-[26px] right-[26px] cursor-pointer w-[68px] h-[68px] border-[#DEDEDE] border-[1px] rounded-full flex items-center justify-center z-50"
      >
        <ArrowRight width={37} height={37} fill="#DEDEDE" />
      </div>
      <div className="w-full h-full flex lg:items-end pb-[173px] absolute top-0 left-0 z-40">
        <PageWrapper>
          <div
            className={`${
              activeSlide == 0 ? "opacity-1" : "opacity-0"
            } h-[402px] lg:h-auto transition-opacity duration-500 max-w-[80%] md:max-w-[60%] sm:max-w-[70%] lg:max-w-[495px] absolute lg:bottom-0  lg:top-auto top-[36px]`}
          >
            <span className="lg:pb-0 pb-[15px] lg:border-b-0 border-b-[0.5px] block border-white uppercase  text-[#747474] font-medium text-[12px] leading-[12px] tracking-[1.5px]">
              Aug. 21. 2023
            </span>
            <h4 className="font-[900] pb-[16px] pt-[31px] lg:text-[36px] text-[24px] leading-[40px] text-white">
              5 Rules of training
            </h4>
            <p className="text-[16px] leading-[29px] tracking-[0.5px] lg:pb-[82px] text-[white]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="absolute lg:relative bottom-0 cursor-pointer flex flex-row justify-start gap-[14px] lg:gap-0 lg:justify-between items-center lg:pb-[29px] lg:border-b-[0.5px] lg:border-b-[#FFFFFF]">
              <p className="font-semibold text-primary text-[12px] leading-[12px] tracking-[1.5px] uppercase">
                Read more
              </p>
              <ArrowRight width={37} height={37} className="fill-primary" />
            </div>
          </div>
          <div
            className={`${
              activeSlide == 1 ? "opacity-1" : "opacity-0"
            } h-[402px] lg:h-auto transition-opacity duration-500 max-w-[80%] md:max-w-[60%] sm:max-w-[70%] lg:max-w-[495px] absolute lg:bottom-0  lg:top-auto top-[36px]`}
          >
            <span className="lg:pb-0 pb-[15px] lg:border-b-0 border-b-[0.5px] block uppercase  text-[#747474] font-medium text-[12px] leading-[12px] tracking-[1.5px]">
              Sep. 22. 2022
            </span>
            <h4 className="font-[900] pb-[16px] pt-[31px] lg:text-[36px] text-[24px] leading-[40px] text-white">
              How to eat good?
            </h4>
            <p className="text-[16px] leading-[29px] tracking-[0.5px] lg:pb-[82px] text-[white]">
              Random text about eating good, because eating good is very
              important hehe :D
            </p>
            <div className="absolute lg:relative bottom-0 cursor-pointer flex flex-row justify-start gap-[14px] lg:gap-0 lg:justify-between items-center lg:pb-[29px] lg:border-b-[0.5px] lg:border-b-[#FFFFFF]">
              <p className="font-semibold text-primary text-[12px] leading-[12px] tracking-[1.5px] uppercase">
                Read more
              </p>
              <ArrowRight width={37} height={37} className="fill-primary" />
            </div>
          </div>
          <div
            className={`${
              activeSlide == 2 ? "opacity-1" : "opacity-0"
            } h-[402px] lg:h-auto transition-opacity duration-500 max-w-[80%] md:max-w-[60%] sm:max-w-[70%] lg:max-w-[495px] absolute lg:bottom-0  lg:top-auto top-[36px]`}
          >
            <span className="lg:pb-0 pb-[15px] lg:border-b-0 border-b-[0.5px] block uppercase  text-[#747474] font-medium text-[12px] leading-[12px] tracking-[1.5px]">
              July. 02. 2021
            </span>
            <h4 className="font-[900] pb-[16px] pt-[31px] lg:text-[36px] text-[24px] leading-[40px] text-white">
              How to build muscle
            </h4>
            <p className="text-[16px] leading-[29px] tracking-[0.5px] lg:pb-[82px] text-[white]">
              Yeah you should definetly build muscle, so you can grow blah
              blah...
            </p>
            <div className="absolute lg:relative bottom-0 cursor-pointer flex flex-row justify-start gap-[14px] lg:gap-0 lg:justify-between items-center lg:pb-[29px] lg:border-b-[0.5px] lg:border-b-[#FFFFFF]">
              <p className="font-semibold text-primary text-[12px] leading-[12px] tracking-[1.5px] uppercase">
                Read more
              </p>
              <ArrowRight width={37} height={37} className="fill-primary" />
            </div>
          </div>
        </PageWrapper>
      </div>
      <div className="relative h-full lg:w-[60%] w-full flex lg:items-end">
        <div
          className={`${
            activeSlide == 0
              ? "translate-x-0 z-10"
              : "translate-x-[-100%] delay-500"
          } absolute top-0 left-0 transform  h-full w-full bg-cover bg-center bg-no-repeat transition-all ease-in-out duration-500`}
          style={{
            backgroundImage: "url(/images/blogLeft.png)",
          }}
        ></div>
        <div
          className={`${
            activeSlide == 1
              ? "translate-x-0 z-10"
              : "translate-x-[-100%] delay-500"
          } absolute top-0 left-0 transform translate-x-0 h-full w-full bg-cover bg-center bg-no-repeat transition-all ease-in-out duration-500`}
          style={{
            backgroundImage: "url(/images/blogRight.png)",
          }}
        ></div>
        <div
          className={`${
            activeSlide == 2
              ? "translate-x-0 z-10"
              : "translate-x-[-100%] delay-500"
          } absolute top-0 left-0 transform  h-full w-full bg-cover bg-center bg-no-repeat transition-all ease-in-out duration-500`}
          style={{
            backgroundImage: "url(/images/testemonial.png)",
          }}
        ></div>
        <div className="z-30 absolute top-0 left-0 w-full h-full bg-black bg-opacity-[73%]"></div>
      </div>
      <div
        className="relative h-full w-[40%] bg-cover bg-center bg-no-repeat lg:flex hidden items-center justify-center"
        style={{
          backgroundImage: "url(/images/blogRight.png)",
        }}
      >
        <div
          onClick={handleSlideChange}
          className="cursor-pointer w-[101px] h-[101px] border-[#DEDEDE] border-[1px] rounded-full flex items-center justify-center relative z-50"
        >
          <ArrowRight width={37} height={37} fill="#DEDEDE" />
        </div>
      </div>
    </div>
  );
}

export default BlogSlider;
