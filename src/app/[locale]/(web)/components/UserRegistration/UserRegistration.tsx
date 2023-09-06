import { useEffect, useState } from "react";
import { EmailOutlined, Eye, PasswordOutlined, UserOutline } from "../Svg";
import useStore from "@/store/store";

function UserRegistration() {
  const { btnDisabled, setBtnDisabled } = useStore();

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);
  const [fullName, setFullname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (password.length && email.length && fullName.length) {
      setBtnDisabled(false);
    } else {
      setBtnDisabled(true);
    }
  }, [
    setBtnDisabled,
    password,
    email,
    fullName,
    setFullname,
    setPassword,
    setEmail,
  ]);

  return (
    <div className="md:pb-[74px] pb-[40px] w-full ">
      <div className="relative max-w-[607px] mx-auto">
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullname(e.target.value)}
          className="text-[16px] leading-[24px] font-semibold text-[#454546] placeholder-[#A1A1AAB5] focus:outline-none border-b-[1px] border-b-[#BDBDBD] bg-transparent w-full px-[36px] py-[14px] "
          placeholder="Write fullname"
        />
        <UserOutline
          fill="#454546"
          width={24}
          height={24}
          className="absolute top-[50%] transform translate-y-[-50%]"
        />
      </div>
      <div className="relative max-w-[607px] mx-auto">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="text-[16px] leading-[24px] font-semibold text-[#454546] placeholder-[#A1A1AAB5] focus:outline-none border-b-[1px] border-b-[#BDBDBD] bg-transparent w-full px-[36px] py-[14px] "
          placeholder="Write email"
        />
        <EmailOutlined
          fill="#454546"
          width={24}
          height={24}
          className="absolute top-[50%] transform translate-y-[-50%]"
        />
      </div>
      <div className="relative z-10 max-w-[607px] mx-auto">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          className=" text-[16px] leading-[24px] font-semibold text-[#454546] placeholder-[#A1A1AAB5] focus:outline-none border-b-[1px] border-b-[#BDBDBD] bg-transparent w-full px-[36px] py-[14px] "
          placeholder="Enter password"
        />
        <PasswordOutlined
          fill="#454546"
          width={24}
          height={24}
          className="absolute top-[50%] transform translate-y-[-50%]"
        />
        <Eye
          onClick={() => setShowPassword(!showPassword)}
          fill="#1E2E55"
          width={15}
          height={15}
          className="absolute top-[50%] transform translate-y-[-50%] right-0 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default UserRegistration;
