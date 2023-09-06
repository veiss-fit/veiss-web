import PageWrapper from "../PageWrapper/PageWrapper";
import { ArrowRight } from "../Svg";

function PreviewBanner() {
  return (
    <div className="bg-primary w-full">
      <PageWrapper>
        <div className="py-[37px] items-center flex sm:justify-between justify-center">
          <h2 className="sm:block hidden text-secondary text-[36px] leading-[29px] tracking-[0.5px] uppercase font-extrabold">
            Interested?
          </h2>
          <p className="lg:block hidden text-[16px] leading-[29px] tracking-[0.5px] text-bannerTitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit{" "}
          </p>
          <div className="flex flex-row items-center gap-[12px] cursor-pointer">
            <p className="text-[16px] leading-[29px] tracking-[0.5px] font-bold text-secondary uppercase">
              Check our preview
            </p>
            <ArrowRight width={27} height={21} fill="#000" />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}

export default PreviewBanner;
