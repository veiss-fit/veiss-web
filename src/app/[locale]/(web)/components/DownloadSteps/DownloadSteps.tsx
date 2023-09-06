import useStore from "@/store/store";
import { useRouter } from "next/navigation";

function DownloadSteps() {
  const { activeStep, setActiveStep, btnDisabled } = useStore();
  const router = useRouter();
  return (
    <div className="max-w-[608px] mx-auto mt-[10px] md:text-[20px] md:leading-[24px] text-[16px] leading-[20px] text-center text-[#333333] font-bold">
      <button
        disabled={btnDisabled}
        onClick={() => setActiveStep(activeStep + 1)}
        className="bg-[#333333] hover:bg-secondary transition-colors ease-in-out mt-[15px] p-[25px] block w-full uppercase text-white"
      >
        {activeStep !== 4 ? "Next" : "Choose your plan"}
      </button>
      <button
        onClick={() =>
          activeStep === 0 ? router.back() : setActiveStep(activeStep - 1)
        }
        className="w-full block bg-transparent md:p-[25px] p-[17px] uppercase"
      >
        {activeStep === 0 ? "Cancel" : "Go Back"}
      </button>
    </div>
  );
}

export default DownloadSteps;
