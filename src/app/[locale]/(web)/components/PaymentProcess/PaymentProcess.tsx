import useStore from "@/store/store";
import PageWrapper from "../PageWrapper/PageWrapper";
import PaymentInformation from "../PaymentInformation/PaymentInformation";
import PaymentSteps from "../PaymentSteps/PaymentSteps";
import Stepper from "../Stepper/Stepper";
import PaymentConfirmation from "../PaymentConfirmation/PaymentConfirmation";

function PaymentProcess() {
  const steps = ["Card info", "Confirmation"];
  const { paymentActiveStep } = useStore();

  return (
    <div className="relative w-full">
      <PageWrapper>
        <div className="w-full relative z-20 lg:gap-[75px] md:gap-[55px] gap-[30px] flex flex-col items-center justify-center">
          <h1 className="md:leading-[64px] md:text-[64px] text-[48px] leading-[48px] text-center font-[900] text-white uppercase">
            Payment
          </h1>
          <Stepper steps={steps} />
          {paymentActiveStep == 0 && <PaymentInformation />}
          {paymentActiveStep == 1 && <PaymentConfirmation />}
        </div>
      </PageWrapper>
      <PaymentSteps lastStep={steps.length} />
    </div>
  );
}

export default PaymentProcess;
