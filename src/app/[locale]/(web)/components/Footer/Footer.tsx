import PageWrapper from "../PageWrapper/PageWrapper";
import { Facebook, Instagram, Linkedin, Twitter } from "../Svg";
import { usePathname } from "next/navigation";

function Footer() {
  const path = usePathname();
  const isDownload = path === "/download" || path === "/payment";
  return (
    <>
      {!isDownload ? (
        <div id="footer" className=" bg-grayFooter md:pt-[111px] md:pb-[85px] pt-[70px] pb-[55px] z-40 relative">
          <PageWrapper>
            {/* <div className="flex items-start justify-between md:pb-[68px] pb-[48px] flex-wrap">
              <div className="flex flex-col text-[16px] leading-[32px] text-white md:flex-1 flex-[100%]">
                <p className="font-semibold">First column</p>
                <p>First Page</p>
                <p>Second Page</p>
                <p>Third Page</p>
                <p>Fourth Page</p>
              </div>
              <div className="flex flex-col text-[16px] leading-[32px] text-white md:flex-1  flex-[100%] md:pt-0 pt-[30px]">
                <p className="font-semibold">Second column</p>
                <p>First Page</p>
                <p>Second Page</p>
                <p>Third Page</p>
              </div>
              <div className="flex flex-col text-[16px] leading-[32px] text-white md:flex-1 flex-[100%] md:pt-0 pt-[30px]">
                <p className="font-semibold">Third column</p>
                <p>First Page</p>
                <p>Second Page</p>
                <p>Third Page</p>
              </div>
              <div className="flex flex-col text-[16px] leading-[32px] text-white gap-[22px] max-w-[416px] flex-[100%] lg:pt-0 pt-[30px]">
                <p className="font-semibold">Contact Us</p>
                <div className="flex flex-col gap-[10px]">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="bg-white rounded-[6px] px-[20px] py-[5px]"
                  />
                  <p className="opacity-[54%]">
                    Stay up to speed on new features and releases by subscribing
                    to our newsletter
                  </p>
                </div>
              </div>
            </div> */}
            <div className="pt-[17px] border-t-[2px] border-t-footerBorder flex items-center justify-between flex-wrap">
              <div className="flex flex-row items-center gap-[30px] text-[16px] leading-[32px] text-white flex-wrap lg:pb-0 pb-[30px]">
                <p className="font-semibold sm:flex-1 flex-[100%]">
                  © 2025 Veiss. All rights reserved.
                </p>
                <p className="opacity-[50%] sm:mt-0 mt-[-30px]">
                  Privacy Policy
                </p>
                <p className="opacity-[50%] sm:mt-0 mt-[-30px]">
                  Terms of Service
                </p>
              </div>
              <div className="flex items-center gap-[30px]">
                <a href="https://www.linkedin.com">
                  <Linkedin className="cursor-pointer" width={32} height={32} />
                  </a>
                <a href="https://www.instagram.com/veissfitness/">
                  <Instagram className="cursor-pointer" width={32} height={32} />
                </a>
              </div>
            </div>
          </PageWrapper>
        </div>
      ) : null}
    </>
  );
}

export default Footer;
