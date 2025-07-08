function TeamNumbers() {
  return (
    <div className="bg-[#F2F2F2] w-full py-[60px] sm:py-[104px] relative overflow-hidden">
      {/* Background "Veiss" text - smaller on mobile and medium opacity */}
      <div className="absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="select-none text-[#CDCDCD] opacity-[10%] text-[80px] sm:text-[150px] md:text-[300px] leading-none uppercase font-extrabold whitespace-nowrap">
          Veiss
        </p>
      </div>

      {/* Numbers content */}
      <div className="relative z-20 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-[12px] px-4 sm:px-0">
        <div className="flex flex-col gap-2 sm:gap-[6px] items-center justify-center w-full sm:w-[187px]">
          <h4 className="font-extrabold text-[32px] sm:text-[48px] leading-tight text-[#333333]">
            2
          </h4>
          <p className="text-[10px] sm:text-[12px] leading-[12px] text-secondary tracking-[1.5px] uppercase text-center">
            competitions won
          </p>
        </div>

        {/* Vertical divider only on sm+ */}
        <div className="hidden sm:block w-[0.5px] h-[88px] bg-secondary opacity-[40%]"></div>

        <div className="flex flex-col gap-2 sm:gap-[6px] items-center justify-center w-full sm:w-[187px]">
          <h4 className="font-extrabold text-[32px] sm:text-[48px] leading-tight text-[#333333]">
            150+
          </h4>
          <p className="text-[10px] sm:text-[12px] leading-[12px] text-secondary tracking-[1.5px] uppercase text-center">
            end user interviews
          </p>
        </div>

        {/* Vertical divider only on sm+ */}
        <div className="hidden sm:block w-[0.5px] h-[88px] bg-secondary opacity-[40%]"></div>

        <div className="flex flex-col gap-2 sm:gap-[6px] items-center justify-center w-full sm:w-[187px]">
          <h4 className="font-extrabold text-[32px] sm:text-[48px] leading-tight text-[#333333]">
            3
          </h4>
          <p className="text-[10px] sm:text-[12px] leading-[12px] text-secondary tracking-[1.5px] uppercase text-center">
            programs completed
          </p>
        </div>
      </div>
    </div>
  );
}

export default TeamNumbers;
