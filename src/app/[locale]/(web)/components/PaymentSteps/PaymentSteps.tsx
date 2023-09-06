import useStore from "@/store/store";
import PageWrapper from "../PageWrapper/PageWrapper";

type Props = {
  lastStep: number;
};

function PaymentSteps({ lastStep }: Props) {
  const { paymentActiveStep, setPaymentActiveStep, setProcessActiveStep } =
    useStore();

  return (
    <div className="fixed z-40 bg-white w-full bottom-0 left-0 py-[32px]">
      <PageWrapper>
        <div className="flex items-center justify-between">
          <div className="md:text-[28px] text-[20px] leading-[28px] tracking-[0.5px] md:leading-[32px] font-semibold text-black flex md:items-center md:gap-[24px] gap-[4px] md:flex-row flex-col">
            <p>
              Total <span className="sm:inline-block hidden">price</span>:
            </p>
            <p>120.00€</p>
          </div>
          <div className="flex items-center font-bold md:gap-0 gap-[24px]">
            <button
              onClick={() =>
                paymentActiveStep == 0
                  ? setProcessActiveStep(0)
                  : setPaymentActiveStep(paymentActiveStep - 1)
              }
              className="text-[#333333]  w-auto md:w-[183px] block bg-transparent uppercase"
            >
              Go back
            </button>
            <button
              onClick={() =>
                lastStep == paymentActiveStep + 1
                  ? console.log("last step")
                  : setPaymentActiveStep(paymentActiveStep + 1)
              }
              className="md:w-[183px] w-[120px] bg-primary transition-colors ease-in-out p-[16px] block uppercase text-[#070709]"
            >
              {paymentActiveStep + 1 !== lastStep ? "Next" : "Confirm"}
            </button>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}

export default PaymentSteps;
