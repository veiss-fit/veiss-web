import useStore from "@/store/store";
import { DownloadCheck } from "../Svg";
import { useEffect } from "react";

type Props = {
  downloadData: {
    items: { text: string; icon?: JSX.Element }[];
    isCheckmark?: boolean;
    isHeight?: boolean;
    title: string;
    handleClick: (value: number) => void;
    value: number | null;
  };
};

function DownloadPicker({ downloadData }: Props) {
  const { btnDisabled, setBtnDisabled } = useStore();

  useEffect(() => {
    if (downloadData.value) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [downloadData.value, setBtnDisabled]);

  return (
    <>
      <h4 className="md:text-[32px] md:leading-[40px] text-[26px] leading-[34px] text-center text-[#333333] font-bold">
        {downloadData.title}
      </h4>
      <div className="w-full text-[#333333] mx-auto font-bold md:text-[20px] md:leading-[24px] text-[16px] leading-[20px] pt-[30px] md:pt-[58px]">
        {downloadData.items.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => downloadData.handleClick(index)}
              className={`${
                downloadData.value === index ? "bg-primary" : "bg-[#D9D9D9]"
              }  mx-auto mt-[10px] md:pl-[27px] pl-[17px] pr-[17px] select-none hover:bg-primary transition-colors ease-in-out duration-200 cursor-pointer  max-w-[608px]`}
            >
              <div
                className={`${item.icon ? "py-[21px]" : "py-[25px]"} ${
                  downloadData.isCheckmark
                    ? "justify-between"
                    : "justify-center"
                }  flex flex-row items-center `}
              >
                <div className="flex flex-row items-center md:gap-[42px] gap-[22px]">
                  {item.icon && item.icon}
                  <p>{item.text}</p>
                </div>
                {downloadData.isCheckmark && downloadData.value === index && (
                  <DownloadCheck fill="#000000" width={24} height={24} />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default DownloadPicker;
