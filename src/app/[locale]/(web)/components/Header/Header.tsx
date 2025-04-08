"use client"
import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import PageWrapper from "../PageWrapper/PageWrapper";
import WaitlistModal from "../WaitlistModal/WaitlistModal"

import { Logo } from "../Svg";
import { Rotate as Hamburger } from "hamburger-react";


function Header() {
  const [isOpen, setOpen] = useState(false);
  const path = usePathname();
  const isHome = path === "/";

  const t = useTranslations("Header");

  return (
    <div
      className={`${
        isHome ? " bg-black bg-opacity-40" : "bg-[#212121]"
      } w-full lg:py-[42px] py-[22px] fixed top-0 left-0 z-50 `}
    >
      <PageWrapper>
        <header className="flex items-center justify-between">
          <Logo width={200} height={45} />
          <div className="flex items-center gap-[24px] uppercase text-[12px] leading-[12px] tracking-[1.5px] lg:hidden">
            <a className="text-primary" href="#">
              {t("download")}
            </a>
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="white"
              size={20}
              distance="sm"
            />
          </div>
          <div className="hidden lg:flex items-center gap-[40px] uppercase text-white text-[12px] leading-[12px] tracking-[1.5px] font-poppins">
            <a className="hover:text-primary " href="#about-us">
              {"About Us"}
            </a>
            <a className="hover:text-primary " href="#meet-the-team">
              {"Meet the Team"}
            </a>
            <a className="hover:text-primary " href="#footer">
              {"Contact Us"}
            </a>
            <>
              <button
                onClick={() => setOpen(true)}
                className="leading-[22px] tracking-[1px] font-semibold text-secondary bg-primary py-[8px] px-[20px]"
              >
                JOIN THE WAITLIST
              </button>
              <WaitlistModal open={isOpen} onOpenChange={setOpen} />
            </>
          </div>
        </header>
      </PageWrapper>
    </div>
  );
}

export default Header;
