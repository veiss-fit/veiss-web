import PageWrapper from "../PageWrapper/PageWrapper";

type Props = {
  mode?: "dark" | "light";
};

function SubscribeBanner({ mode = "dark" }: Props) {
  return (
    <div
      className={`${
        mode === "dark"
          ? "bg-cover bg-center bg-no-repeat bg-black"
          : "bg-primary"
      } relative overflow-hidden`}
      style={{
        backgroundImage:
          mode === "dark" ? "url(/images/secondaryTexture.png)" : "",
      }}
    >
      <PageWrapper>
        <div
          className={`${
            mode === "dark" ? "2xl:px-[100px] xl:px-[50px]" : ""
          } relative z-[20] flex lg:flex-row flex-col lg:items-center justify-between lg:py-[105px] pt-[55px] pb-[62px]`}
        >
          <div className="flex flex-col lg:gap-0 gap-[16px]">
            <h2
              className={`${
                mode === "dark" ? "text-white" : "text-secondary"
              } uppercase font-extrabold text-[36px] leading-[64px]  `}
            >
              Subscribe now
            </h2>
            <p
              className={`${
                mode === "dark" ? "text-white opacity-60" : "text-secondary"
              } xl:hidden block text-[16px] leading-[29px] tracking-[0.5px]`}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>
          <p
            className={`${
              mode === "dark" ? "text-white opacity-60" : "text-secondary"
            } text-[16px] leading-[29px] tracking-[0.5px] xl:block hidden`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </p>
          <button
            className={`${
              mode === "dark"
                ? "text-secondary bg-primary"
                : "text-white bg-secondary"
            } relative z-[20] lg:w-auto w-[200px] text-[18px] leading-[22px] font-semibold px-[45px] py-[24px] lg:mt-0 mt-[132px]`}
          >
            Subscribe
          </button>
        </div>
      </PageWrapper>
      <div
        className={`${
          mode === "dark" ? "left-[-16px]" : "left-[75px]"
        } lg:block hidden w-[184px] h-[130px] border-[3px] border-[#a1a1aa] opacity-[71%] absolute top-[80px]`}
      ></div>
      <div
        className={`${
          mode === "dark" ? "left-[26px]" : "left-[117px]"
        } lg:block hidden w-[141px] h-[130px] border-[3px] border-r-0 border-t-0 border-[#a1a1aa] absolute top-[-9px]`}
      ></div>
      <div
        className={`${
          mode === "dark" ? "left-[-66px]" : "left-[25px]"
        } lg:block hidden w-[184px] h-[130px] border-[3px] border-[#a1a1aa] opacity-[23%] absolute bottom-[-9px]`}
      ></div>
      <div className="block lg:hidden h-[184px] w-[130px] border-[3px] border-[#A1A1AA] absolute bottom-[-92px] right-[-12px]"></div>
      <div className="block lg:hidden h-[184px] w-[130px] border-[3px] border-[#A1A1AA] absolute bottom-[-50px] right-[72px] opacity-[71%]"></div>
      <div className="block lg:hidden h-[184px] w-[130px] border-[3px] border-[#A1A1AA] absolute bottom-[-3px] right-[143px] opacity-[23%]"></div>
    </div>
  );
}

export default SubscribeBanner;
