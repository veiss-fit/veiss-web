import useStore from "@/store/store";

function DownloadStepper() {
  const { activeStep, setActiveStep } = useStore();

  return (
    <div className="relative h-[5px] w-[216px] mx-auto flex flex-row items-center justify-center gap-[4px]">
      {Array.from({ length: 4 }, (_, index) => (
        <div
          key={index}
          className={`${
            activeStep < 4 ? "bg-[#a1a1aa]" : "bg-primary"
          } w-[51px] h-[5px]  bg-opacity-[71%]`}
        ></div>
      ))}
      {activeStep < 4 && (
        <div
          className="w-[51px] h-[5px] bg-primary absolute top-0 transition-all ease-in-out duration-300"
          style={{ left: activeStep * 55 + "px" }}
        ></div>
      )}
    </div>
  );
}

export default DownloadStepper;
