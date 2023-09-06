import useStore from "@/store/store";
import { Checkmark, ChevronRight } from "../Svg";
import { Fragment, useEffect, useState } from "react";

type Props = {
  steps: string[];
};

function Stepper({ steps }: Props) {
  const { paymentActiveStep } = useStore();

  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallScreen(window.innerWidth < 700);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex items-center justify-center gap-[16px]">
      {steps.map((step, index) => (
        <Fragment key={index}>
          <div className="flex items-center gap-[8px]">
            <div
              className={`${
                paymentActiveStep >= index
                  ? "bg-primary"
                  : "text-white bg-[#666666]"
              } w-[32px] h-[32px] rounded-full flex items-center justify-center text-[16px] leading-[20px] font-bold transition-colors ease-in-out duration-200`}
            >
              {paymentActiveStep > index ? (
                <Checkmark width={24} height={24} fill="#000" />
              ) : (
                index + 1
              )}
            </div>
            <p
              className={`${
                paymentActiveStep >= index ? "text-white" : " text-[#666666]"
              } font-semibold text-[16px] leading-[20px] transition-colors ease-in-out duration-200`}
            >
              {isSmallScreen ? (paymentActiveStep === index ? step : "") : step}
            </p>
          </div>
          {index !== steps.length - 1 ? (
            <ChevronRight width={16} height={16} fill="#666666" />
          ) : null}
        </Fragment>
      ))}
    </div>
  );
}

export default Stepper;
