import PageWrapper from "../PageWrapper/PageWrapper";
import Image from "next/image";
import userTestemonial from "../../../../../../public/images/testemonialUser.png";
import { ArrowRightPrimary } from "../Svg";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

function Testemonial() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      origin: "auto",
      perView: 1,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat "
      style={{
        backgroundImage: "url(/images/testemonial.png)",
      }}
    >
      <PageWrapper>
        <div ref={sliderRef} className="keen-slider relative">
          <div className="keen-slider__slide number-slide1 relative z-20 pb-[149px] pt-[122px] flex justify-between lg:gap-[80px] gap-[40px] lg:flex-row flex-col">
            <div className="flex flex-col gap-[18px] lg:items-start lg:justify-start items-center justify-center lg:text-left text-center">
              <Image
                src={userTestemonial}
                alt="user-img"
                width={172}
                height={136}
                className={`z-20 relative pointer-events-none transition-opacity ease-in-out duration-300`}
              />
              <div className="flex flex-col text-white">
                <p className="text-[18px] font-semibold leading-[32px]">
                  Lassy Chester
                </p>
                <span className="text-[16px] leading-[24px]">Student</span>
              </div>
            </div>
            <div className="gap-[30px] lg:w-[819px] flex flex-col lg:items-start lg:justify-start items-center justify-center">
              <p className="lg:text-left text-center text-white lg:text-[36px] font-semibold text-[28px] leading-[40px] lg:leading-[52px]">
                “Amazing experience i love it a lot. Thanks to the team that
                dreams come true, great! I appreciate there attitude and
                approach. Truly professionals!”
              </p>
              <div className="cursor-pointer flex gap-[14px] flex-row items-center">
                <p className="uppercase text-[12px] leading-[12px] tracking-[1.5px] text-primary">
                  Read more
                </p>
                <ArrowRightPrimary width={37} height={37} />
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide2 relative z-20 pb-[149px] pt-[122px] flex justify-between lg:gap-[80px] gap-[40px] lg:flex-row flex-col">
            <div className="flex flex-col gap-[18px] lg:items-start lg:justify-start items-center justify-center lg:text-left text-center">
              <Image
                src={userTestemonial}
                alt="user-img"
                width={172}
                height={136}
                className={`z-20 relative pointer-events-none transition-opacity ease-in-out duration-300`}
              />
              <div className="flex flex-col text-white">
                <p className="text-[18px] font-semibold leading-[32px]">
                  Lassy Chester
                </p>
                <span className="text-[16px] leading-[24px]">Student</span>
              </div>
            </div>
            <div className="gap-[30px] lg:w-[819px] flex flex-col lg:items-start lg:justify-start items-center justify-center">
              <p className="lg:text-left text-center text-white lg:text-[36px] font-semibold text-[28px] leading-[40px] lg:leading-[52px]">
                “Amazing experience i love it a lot. Thanks to the team that
                dreams come true, great! I appreciate there attitude and
                approach. Truly professionals!”
              </p>
              <div className="cursor-pointer flex gap-[14px] flex-row items-center">
                <p className="uppercase text-[12px] leading-[12px] tracking-[1.5px] text-primary">
                  Read more
                </p>
                <ArrowRightPrimary width={37} height={37} />
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide3 relative z-20 pb-[149px] pt-[122px] flex justify-between lg:gap-[80px] gap-[40px] lg:flex-row flex-col">
            <div className="flex flex-col gap-[18px] lg:items-start lg:justify-start items-center justify-center lg:text-left text-center">
              <Image
                src={userTestemonial}
                alt="user-img"
                width={172}
                height={136}
                className={`z-20 relative pointer-events-none transition-opacity ease-in-out duration-300`}
              />
              <div className="flex flex-col text-white">
                <p className="text-[18px] font-semibold leading-[32px]">
                  Lassy Chester
                </p>
                <span className="text-[16px] leading-[24px]">Student</span>
              </div>
            </div>
            <div className="gap-[30px] lg:w-[819px] flex flex-col lg:items-start lg:justify-start items-center justify-center">
              <p className="lg:text-left text-center text-white lg:text-[36px] font-semibold text-[28px] leading-[40px] lg:leading-[52px]">
                “Amazing experience i love it a lot. Thanks to the team that
                dreams come true, great! I appreciate there attitude and
                approach. Truly professionals!”
              </p>
              <div className="cursor-pointer flex gap-[14px] flex-row items-center">
                <p className="uppercase text-[12px] leading-[12px] tracking-[1.5px] text-primary">
                  Read more
                </p>
                <ArrowRightPrimary width={37} height={37} />
              </div>
            </div>
          </div>
          <div className="keen-slider__slide number-slide4 relative z-20 pb-[149px] pt-[122px] flex justify-between lg:gap-[80px] gap-[40px] lg:flex-row flex-col">
            <div className="flex flex-col gap-[18px] lg:items-start lg:justify-start items-center justify-center lg:text-left text-center">
              <Image
                src={userTestemonial}
                alt="user-img"
                width={172}
                height={136}
                className={`z-20 relative pointer-events-none transition-opacity ease-in-out duration-300`}
              />
              <div className="flex flex-col text-white">
                <p className="text-[18px] font-semibold leading-[32px]">
                  Lassy Chester
                </p>
                <span className="text-[16px] leading-[24px]">Student</span>
              </div>
            </div>
            <div className="gap-[30px] lg:w-[819px] flex flex-col lg:items-start lg:justify-start items-center justify-center">
              <p className="lg:text-left text-center text-white lg:text-[36px] font-semibold text-[28px] leading-[40px] lg:leading-[52px]">
                “Amazing experience i love it a lot. Thanks to the team that
                dreams come true, great! I appreciate there attitude and
                approach. Truly professionals!”
              </p>
              <div className="cursor-pointer flex gap-[14px] flex-row items-center">
                <p className="uppercase text-[12px] leading-[12px] tracking-[1.5px] text-primary">
                  Read more
                </p>
                <ArrowRightPrimary width={37} height={37} />
              </div>
            </div>
          </div>
          {loaded && instanceRef.current && (
            <div className="z-50 dots absolute bottom-[11%] right-auto left-[50%] transform translate-x-[-50%] lg:left-auto lg:bottom-[30%] lg:right-0 flex flex-row items-center gap-[4px] ">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length
                ).keys(),
              ].map((idx) => {
                return (
                  <button
                    key={idx}
                    onClick={() => {
                      instanceRef.current?.moveToIdx(idx);
                    }}
                    className={
                      " dot w-[8px] h-[8px] bg-primary rounded-full transition-all duration-200 " +
                      (currentSlide === idx ? " active bg-white !w-[15px]" : "")
                    }
                  ></button>
                );
              })}
            </div>
          )}
        </div>
      </PageWrapper>
      <div className="absolute top-0 left-0 selection:z-10 w-full h-full bg-[#333333] bg-opacity-[30%]"></div>
    </div>
  );
}

export default Testemonial;
