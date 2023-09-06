import PageWrapper from "../PageWrapper/PageWrapper";
import Image from "next/image";
import OurProgramsImg from "../../../../../../public/images/ourProgramsBanner.png";
import { ArrowRight, Weights } from "../Svg";

function OurPrograms() {
  return (
    <div className=" bg-lightBg w-full">
      <PageWrapper>
        <div className="lg:pt-[130px] lg:pb-[184px] md:pt-[84px] md:pb-[60px] pt-[64px] pb-[36px] flex lg:flex-row flex-col items-center justify-between xl:gap-[130px] lg:gap-[100px] gap-[61px]">
          <div className="xl:min-h-[583px] xl:min-w-[502px] xl:ml-[103px] lg:ml-[60px] lg:min-h-[480px] lg:min-w-[400px] relative lg:order-1 order-2">
            <Image src={OurProgramsImg} alt="programs-img" />
            <div className="lg:w-[148px] lg:h-[148px] w-[93px] h-[93px] bg-primary rounded-full absolute lg:right-[-74px] xl:top-[238px] lg:top-[170px] transform lg:translate-x-0 translate-x-[-50%] lg:left-auto left-[50%] top-[-46px] gap-[12px] flex items-center flex-col justify-center">
              <p className="lg:block hidden text-[10px] leading-[15px] tracking-[2px] text-secondary font-semibold uppercase">
                Stay strong
              </p>
              <Weights className="lg:w-[46px] lg:h-[46px] w-[29px] h-[29px]" />
            </div>
          </div>
          <div className="flex flex-col gap-[16px] lg:order-2 order-1">
            <h2 className="text-[48px] leading-[40px] font-extrabold text-grayTitle uppercase pb-[16px]">
              Our programs
            </h2>
            <p className="text-[16px] leading-[29px] text-secondary tracking-[0.5px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-[16px] leading-[29px] text-secondary tracking-[0.5px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="cursor-pointer flex flex-row justify-between items-center pt-[49px] pb-[20px] border-b-[0.5px] border-b-secondary">
              <p className="font-semibold text-secondary text-[12px] leading-[12px] tracking-[1.5px] uppercase">
                Get started
              </p>
              <ArrowRight width={37} height={37} fill="black" />
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}

export default OurPrograms;
