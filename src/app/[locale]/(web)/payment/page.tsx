"use client";

import { useEffect } from "react";
import ChoosePlan from "../components/ChoosePlan/ChoosePlan";
import PaymentProcess from "../components/PaymentProcess/PaymentProcess";
import useStore from "@/store/store";

function PaymentPage() {
  const { paymentActiveStep, processActiveStep, setProcessActiveStep } =
    useStore();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    if (typeof window !== "undefined") {
      scrollToTop();
    }
  }, [processActiveStep, paymentActiveStep]);

  return (
    <div
      className={`${
        processActiveStep === 0 ? "pb-[80px]" : "pb-[200px]"
      } h-full relative overflow-hidden bg-[#333333] w-full lg:pt-[229px] pt-[160px] sm:pt-[180px]`}
    >
      {processActiveStep == 0 && (
        <ChoosePlan
          handleStep={() => setProcessActiveStep(processActiveStep + 1)}
        />
      )}
      {processActiveStep == 1 && <PaymentProcess />}

      <div className="md:block hidden z-10 absolute md:top-[113px] right-[-42px] w-[184px] h-[130px] border-[3px] border-[#A1A1AA] "></div>
      <div className="md:block hidden z-10 absolute md:top-[203px] right-[-3px] w-[184px] h-[130px] border-[3px] border-[#A1A1AA] opacity-[73%]"></div>
      <div className="md:block hidden z-10 absolute md:top-[274px] right-[52px] w-[184px] h-[130px] border-[3px] border-[#A1A1AA] opacity-[23%]"></div>
    </div>
  );
}

export default PaymentPage;
