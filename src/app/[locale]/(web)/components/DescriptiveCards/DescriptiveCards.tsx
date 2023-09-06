import PageWrapper from "../PageWrapper/PageWrapper";
import { ArrowRight } from "../Svg";

type Props = {
  title: string;
};

function DescriptiveCards({ title }: Props) {
  return (
    <div
      className="flex flex-col bg-cover bg-center bg-no-repeat bg-black"
      style={{
        backgroundImage: "url(/images/mainTexture.png)",
      }}
    >
      <PageWrapper>
        <div className="lg:pt-[151px] lg:pb-[119px] md:pt-[120px] md:pb-[90px] sm:pt-[80px] pt-[60px] pb-[60px] sm:pb-[80px]">
          <h3 className="uppercase text-[36px] leading-[64px] text-white font-[900] text-center">
            {title}
          </h3>
          <div className="md:pt-[93px] pt-[60px] flex md:justify-between justify-center gap-[36px] md:gap-[20px] flex-wrap">
            <div className="group relative text-center w-[292px] flex-col items-center justify-center">
              <h4 className="group-hover:text-primary transition-colors ease-in-out duration-300 text-white text-[24px] leading-[64px] font-[900] uppercase">
                Bodybuilding
              </h4>
              <div className="relative mx-auto w-[250px]">
                <p className=" text-[16px] leading-[24px] text-white">
                  Design comps, layouts, wireframes—will your clients accept
                  that you go about things the facile way
                </p>
                <div className="group-hover:opacity-0 transition-opacity ease-in-out duration-300 absolute inset-0 bg-gradient-to-b from-transparent to-black  w-full h-[120%] top-[-17%] opacity-90 left-0"></div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer md:flex hidden flex-row justify-between items-center pt-[49px] pb-[20px] border-b-[0.5px] border-b-[#3a3a3a]">
                <p className="font-semibold text-white text-[12px] leading-[12px] tracking-[1.5px] uppercase">
                  Get started
                </p>
                <ArrowRight width={37} height={37} fill="white" />
              </div>
            </div>
            <div className="group relative text-center w-[292px] flex-col items-center justify-center">
              <h4 className="group-hover:text-primary transition-colors ease-in-out duration-300 text-white text-[24px] leading-[64px] font-[900] uppercase">
                Fitness
              </h4>
              <div className="relative mx-auto w-[250px]">
                <p className=" text-[16px] leading-[24px] text-white">
                  Design comps, layouts, wireframes—will your clients accept
                  that you go about things the facile way
                </p>
                <div className="group-hover:opacity-0 transition-opacity ease-in-out duration-300 absolute inset-0 bg-gradient-to-b from-transparent to-black w-full h-[120%] top-[-17%] opacity-90 left-0"></div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer md:flex hidden flex-row justify-between items-center pt-[49px] pb-[20px] border-b-[0.5px] border-b-[#3a3a3a]">
                <p className="font-semibold text-white text-[12px] leading-[12px] tracking-[1.5px] uppercase">
                  Get started
                </p>
                <ArrowRight width={37} height={37} fill="white" />
              </div>
            </div>
            <div className="group relative text-center w-[292px] flex-col items-center justify-center">
              <h4 className="group-hover:text-primary transition-colors ease-in-out duration-300 text-white text-[24px] leading-[64px] font-[900] uppercase">
                Crossfit
              </h4>
              <div className="relative mx-auto w-[250px]">
                <p className=" text-[16px] leading-[24px] text-white">
                  Design comps, layouts, wireframes—will your clients accept
                  that you go about things the facile way
                </p>
                <div className="group-hover:opacity-0 transition-opacity ease-in-out duration-300 absolute inset-0 bg-gradient-to-b from-transparent to-black w-full h-[120%] top-[-17%] opacity-90 left-0"></div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer md:flex hidden flex-row justify-between items-center pt-[49px] pb-[20px] border-b-[0.5px] border-b-[#3a3a3a]">
                <p className="font-semibold text-white text-[12px] leading-[12px] tracking-[1.5px] uppercase">
                  Get started
                </p>
                <ArrowRight width={37} height={37} fill="white" />
              </div>
            </div>
            <div className="group relative text-center w-[292px] flex-col items-center justify-center">
              <h4 className="group-hover:text-primary transition-colors ease-in-out duration-300 text-white text-[24px] leading-[64px] font-[900] uppercase">
                Rehabilitation
              </h4>
              <div className="relative mx-auto w-[250px]">
                <p className=" text-[16px] leading-[24px] text-white">
                  Design comps, layouts, wireframes—will your clients accept
                  that you go about things the facile way
                </p>
                <div className="group-hover:opacity-0 transition-opacity ease-in-out duration-300 absolute inset-0 bg-gradient-to-b from-transparent to-black w-full h-[120%] top-[-17%] opacity-90 left-0"></div>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out cursor-pointer md:flex hidden flex-row justify-between items-center pt-[49px] pb-[20px] border-b-[0.5px] border-b-[#3a3a3a]">
                <p className="font-semibold text-white text-[12px] leading-[12px] tracking-[1.5px] uppercase">
                  Get started
                </p>
                <ArrowRight width={37} height={37} fill="white" />
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}

export default DescriptiveCards;
