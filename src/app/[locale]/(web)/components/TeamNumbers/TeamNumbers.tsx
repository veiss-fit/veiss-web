function TeamNumbers() {
  return (
    <div className="sm:block hidden bg-[#F2F2F2] w-full py-[104px] relative overflow-hidden">
      <div className="absolute z-10 top-[50%] translate-y-[-50%] left-[50%] transform translate-x-[-50%] ">
        <p className="select-none text-[#CDCDCD] opacity-[19%] text-[421px] leading-[28px] uppercase font-[900] mx-auto">
          Veiss
        </p>
      </div>
      <div className="relative z-20 items-center justify-center flex-row gap-[12px] flex">
        <div className="flex flex-col gap-[6px] items-center justify-center w-[187px]">
          <h4 className="font-[900] text-[48px] leading-[64px] text-[#333333]">
            2
          </h4>
          <p className="text-[12px] leading-[12px] text-secondary tracking-[1.5px] uppercase">
            competitions won
          </p>
        </div>
        <div className="w-[0.5px] h-[88px] bg-secondary opacity-[40%]"></div>
        <div className="flex flex-col gap-[6px] items-center justify-center w-[187px]">
          <h4 className="font-[900] text-[48px] leading-[64px] text-[#333333]">
            150+
          </h4>
          <p className="text-[12px] leading-[12px] text-secondary tracking-[1.5px] uppercase">
            end user interviews
          </p>
        </div>
        <div className="w-[0.5px] h-[88px] bg-secondary opacity-[40%]"></div>
        <div className="flex flex-col gap-[6px] items-center justify-center w-[187px]">
          <h4 className="font-[900] text-[48px] leading-[64px] text-[#333333]">
            3
          </h4>
          <p className="text-[12px] leading-[12px] text-secondary tracking-[1.5px] uppercase">
            programs completed
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamNumbers;
