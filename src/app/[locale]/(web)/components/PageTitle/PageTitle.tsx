import PageWrapper from "../PageWrapper/PageWrapper";
import { ChevronLeft } from "../Svg";
import { useRouter } from "next/navigation";

type Props = {
  breadcrumb: string;
  link?: string;
  title: string;
};

function PageTitle({ breadcrumb, link, title }: Props) {
  const router = useRouter();
  return (
    <div className="w-full bg-primary relative overflow-hidden">
      <PageWrapper>
        <div className="relative z-20 flex flex-row items-center pt-[63px] pb-[47px] gap-[36px]">
          <div
            onClick={() => router.back()}
            className="cursor-pointer w-[34px] h-[34px] rounded-full border-[1px] border-[#333333] flex items-center justify-center"
          >
            <ChevronLeft width={24} height={24} fill="#333333" />
          </div>
          <div className="flex flex-col gap-[11px]">
            <div className="uppercase text-[12px] leading-[12px] tracking-[1.5px] font-medium text-[#747474]">
              <p>
                Home /{" "}
                <span className=" font-extrabold text-[#323232]">
                  {breadcrumb}
                </span>
              </p>
            </div>
            <h2 className="uppercase lg:text-[64px] lg:leading-[64px] text-[36px] leading-[36px] tracking-[0.5px] font-[900] text-[#333333]">
              {title}
            </h2>
          </div>
        </div>
      </PageWrapper>
      <div className="absolute top-[-9px] right-[-42px] w-[184px] h-[130px] border-[3px] border-[#A1A1AA]"></div>
      <div className="absolute top-[90px] right-[-3px] w-[184px] h-[130px] opacity-[71%] border-[3px] border-[#A1A1AA]"></div>
      <div className="absolute top-[152px] right-[50px] w-[184px] h-[130px] opacity-[23%] border-[3px] border-[#A1A1AA]"></div>
    </div>
  );
}

export default PageTitle;
