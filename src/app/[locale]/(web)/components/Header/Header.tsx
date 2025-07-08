"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";

import PageWrapper from "../PageWrapper/PageWrapper";
import WaitlistModal from "../WaitlistModal/WaitlistModal";

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
        isHome ? "bg-black bg-opacity-40" : "bg-[#212121]"
      } w-full fixed top-0 left-0 z-50`}
    >
      <PageWrapper>
        <header className="flex items-center justify-between py-4 lg:py-6">
          <Logo width={150} height={35} className="ml-[-10px] lg:ml-0" />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-10 text-white uppercase text-xs tracking-wider font-poppins">
            <a className="hover:text-primary" href="#about-us">
              About Us
            </a>
            <a className="hover:text-primary" href="#meet-the-team">
              Meet the Team
            </a>
            <a className="hover:text-primary" href="#footer">
              Contact Us
            </a>
            <button
              onClick={() => setOpen(true)}
              className="bg-primary text-secondary px-5 py-2 font-semibold tracking-wider hover:opacity-90 transition"
            >
              JOIN THE WAITLIST
            </button>
            <WaitlistModal open={isOpen} onOpenChange={setOpen} />
          </nav>

          {/* Mobile nav */}
          <div className="flex lg:hidden items-center gap-6">
            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="white"
              size={20}
              distance="sm"
            />
          </div>
        </header>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-[#212121] text-white flex flex-col items-start px-6 pb-6 pt-2 space-y-4 text-sm uppercase tracking-wide">
            <a href="#about-us" onClick={() => setOpen(false)} className="hover:text-primary">
              About Us
            </a>
            <a href="#meet-the-team" onClick={() => setOpen(false)} className="hover:text-primary">
              Meet the Team
            </a>
            <a href="#footer" onClick={() => setOpen(false)} className="hover:text-primary">
              Contact Us
            </a>
            <button
              onClick={() => {
                setOpen(true);
              }}
              className="mt-2 bg-primary text-secondary px-4 py-2 font-semibold tracking-wide w-full text-center"
            >
              JOIN THE WAITLIST
            </button>
            <WaitlistModal open={isOpen} onOpenChange={setOpen} />
          </div>
        )}
      </PageWrapper>
    </div>
  );
}

export default Header;
