import { Checkmark } from "../Svg";

function PaymentConfirmation() {
  return (
    <div className="max-w-[610px] mx-auto w-full">
      <h2 className="md:text-[32px] md:leading-[40px] text-[26px] leading-[36px] text-center font-bold text-[#A1A1AA]">
        Confirm your payment
      </h2>
      <div className="text-white mx-auto w-full sm:w-[288px] px-[16px] mt-[34px] md:mt-[55px] py-[24px] border-[1px] border-[#E4E4E780]">
        <div className="flex flex-col gap-[4px]">
          <h6 className="font-bold text-[20px] leading-[23px]">Starter</h6>
          <p className="text-[14px] leading-[17px]">Best for personal use</p>
        </div>
        <div className="pt-[32px] pb-[40px] flex flex-row items-center gap-[4px]">
          <p className="text-[32px] leading-[36px] font-bold ">$8</p>
          <span className="text-[12px] leading-[14px]">/month</span>
        </div>
        <div className="text-[14px] leading-[18px] flex flex-col gap-[16px]">
          <p className="text-[16px] font-semibold">All free features, plus:</p>
          <div className="flex items-center gap-[16px]">
            <Checkmark width={24} height={24} fill="#DAFF0D" />
            <p>Fitnes management</p>
          </div>
          <div className="flex items-center gap-[16px]">
            <Checkmark width={24} height={24} fill="#DAFF0D" />
            <p>Training Planning</p>
          </div>
          <div className="flex items-center gap-[16px]">
            <Checkmark width={24} height={24} fill="#DAFF0D" />
            <p>Team collaboration</p>
          </div>
          <div className="flex items-center gap-[16px]">
            <Checkmark width={24} height={24} fill="#DAFF0D" />
            <p>Notifications and Reminders</p>
          </div>
          <div className="flex items-center gap-[16px]">
            <Checkmark width={24} height={24} fill="#DAFF0D" />
            <p>What you get</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PaymentConfirmation;
