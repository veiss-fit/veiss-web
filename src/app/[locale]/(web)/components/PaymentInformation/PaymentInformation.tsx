import VisaImg from "../../../../../../public/images/visa.png";
import MastercardImg from "../../../../../../public/images/mastercard.png";
import Image from "next/image";

function PaymentInformation() {
  return (
    <div className="max-w-[610px] mx-auto w-full">
      <h2 className="md:text-[32px] md:leading-[40px] text-[26px] leading-[36px] text-center font-bold text-[#A1A1AA]">
        Enter card information
      </h2>
      <div className="pt-[34px] md:pt-[55px] flex items-center justify-center gap-[16px]">
        <Image src={VisaImg} alt="visa-img" />
        <Image src={MastercardImg} alt="mastercard-img" />
      </div>
      <div className="pt-[32px] flex flex-col gap-[16px]">
        <div className="flex flex-col gap-[8px]">
          <label className="text-[15px] leading-[18px] text-white">
            Number of card
          </label>
          <input
            type="text"
            placeholder="Enter card number"
            className="px-[16px] py-[14px] border-[1px] border-[#cccccc] text-[#cccccc] placeholder-[#666666] text-[16px] leading-[20px] bg-transparent focus:outline-none"
          />
        </div>
        <div className="flex flex-row gap-[24px] w-full flex-wrap">
          <div className="flex flex-col gap-[8px] flex-[40%]">
            <label className="text-[15px] leading-[18px] text-white">
              Date expiring
            </label>
            <input
              type="text"
              placeholder="MM/YY"
              className="px-[16px] py-[14px] border-[1px] border-[#cccccc] text-[#cccccc] placeholder-[#666666] text-[16px] leading-[20px] bg-transparent focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-[8px] flex-[40%]">
            <label className="text-[15px] leading-[18px] text-white">
              CVV/CVC
            </label>
            <input
              type="text"
              placeholder="123"
              className="px-[16px] py-[14px] border-[1px] border-[#cccccc] text-[#cccccc] placeholder-[#666666] text-[16px] leading-[20px] bg-transparent focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col gap-[8px]">
          <label className="text-[15px] leading-[18px] text-white">
            Name on the card
          </label>
          <input
            type="text"
            placeholder="Name on the card"
            className="px-[16px] py-[14px] border-[1px] border-[#cccccc] text-[#cccccc] placeholder-[#666666] text-[16px] leading-[20px] bg-transparent focus:outline-none"
          />
        </div>
        <div className="text-[16px] leading-[20px] text-[#7b7b7b] flex items-center gap-[8px]">
            <input type="checkbox" className="accent-primary w-[16px] h-[16px]"/>
            <p>
                I accept all {" "}
                <span className="text-primary">
                    terms and conditions
                </span>
            </p>
        </div>
      </div>
    </div>
  );
}

export default PaymentInformation;
