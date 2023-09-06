import Image from "next/image";
import transformationOne from "../../../../../../public/images/transformationOne.png";
import transformationTwo from "../../../../../../public/images/transformationTwo.png";
import { ArrowRight } from "../Svg";

function Transformations() {
  return (
    <div className="w-full overflow-hidden relative bg-[#F2F2F2] pt-[87px] pb-[40px]">
      <h2 className="text-center uppercase text-[32px] leading-[36px] font-[900] text-[#333333]">
        Transformations
      </h2>
      <p className="text-center pt-[16px] text-[16px] leading-[20px] text-[#333333]">
        Choose the perfect plan for your business needs
      </p>
      <div className="w-full flex flex-row items-center justify-center gap-[30px] pt-[65px]">
        <div className="min-w-[616px] flex flex-col">
          <div className="h-[413px] w-full">
            <Image className="w-full h-full object-cover object-center" alt="transformation-img" src={transformationOne} />
          </div>
          <div className="flex flex-row justify-between bg-[#e0e0e0] pl-[36px] pr-[15px] pt-[38px] pb-[41px]">
            <div className="flex flex-col">
              <p className="text-[18px] leading-[32px] font-semibold text-[#323232]">
                Lassy Chester
              </p>

              <span className="text-[16px] leading-[24px] text-[#323232]">
                6 months
              </span>
            </div>
            <ArrowRight fill="#333333" width={37} height={37} />
          </div>
        </div>
        <div className="min-w-[616px] flex flex-col">
          <div className="h-[413px] w-full">
            <Image className="w-full h-full object-cover object-center" alt="transformation-img" src={transformationTwo} />
          </div>
          <div className="flex flex-row justify-between bg-[#e0e0e0] pl-[36px] pr-[15px] pt-[38px] pb-[41px]">
            <div className="flex flex-col">
              <p className="text-[18px] leading-[32px] font-semibold text-[#323232]">
                Lassy Chester
              </p>

              <span className="text-[16px] leading-[24px] text-[#323232]">
                6 months
              </span>
            </div>
            <ArrowRight fill="#333333" width={37} height={37} />
          </div>
        </div>
        <div className="min-w-[616px] flex flex-col">
          <div className="h-[413px] w-full">
            <Image className="w-full h-full object-cover object-center" alt="transformation-img" src={transformationOne} />
          </div>
          <div className="flex flex-row justify-between bg-[#e0e0e0] pl-[36px] pr-[15px] pt-[38px] pb-[41px]">
            <div className="flex flex-col">
              <p className="text-[18px] leading-[32px] font-semibold text-[#323232]">
                Lassy Chester
              </p>

              <span className="text-[16px] leading-[24px] text-[#323232]">
                6 months
              </span>
            </div>
            <ArrowRight fill="#333333" width={37} height={37} />
          </div>
        </div>
        <div className="min-w-[616px] flex flex-col">
          <div className="h-[413px] w-full">
            <Image className="w-full h-full object-cover object-center" alt="transformation-img" src={transformationTwo} />
          </div>
          <div className="flex flex-row justify-between bg-[#e0e0e0] pl-[36px] pr-[15px] pt-[38px] pb-[41px]">
            <div className="flex flex-col">
              <p className="text-[18px] leading-[32px] font-semibold text-[#323232]">
                Lassy Chester
              </p>

              <span className="text-[16px] leading-[24px] text-[#323232]">
                6 months
              </span>
            </div>
            <ArrowRight fill="#333333" width={37} height={37} />
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Transformations;
