import PageWrapper from "../PageWrapper/PageWrapper";

import { useEffect, useRef, useState } from "react";

function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      // Logika za promenu slajda svakih 5 sekundi
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 5000);

    return () => {
      // Čišćenje timera kada se komponenta unmount-uje ili kada korisnik promeni slajd
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleDotClick = (index: number) => {
    // Resetujemo timer koristeći ref
    if (timerRef.current) {
      clearInterval(timerRef.current);
    } // Ponovo pokrećemo timer
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 5000);

    setCurrentSlide(index);
  };

  return (
    <div
      className="flex flex-col min-h-screen bg-cover bg-center bg-no-repeat bg-black"
      style={{
        backgroundImage: "url(/images/mainTexture.png)",
      }}
    >
      <div className="relative min-h-[500px] w-full flex flex-1 items-end">
        <PageWrapper>
          <div
            className={`${
              currentSlide == 0 ? "opacity-1 delay-[400ms]" : "opacity-0"
            } ease-in-out duration-500 transition-opacity absolute left-[1rem] top-[-400px] lg:top-[-350px] flex flex-col gap-[37px] pb-[80px]`}
          >
            <div className="p-[5px] flex w-[329px] items-center justify-between gap-[15px] bg-white bg-opacity-[10%] rounded-[200px]">
              <p className="uppercase font-semibold text-[10px] leading-[18px] tracking-[1.5px] text-secondary bg-primary py-[4px] px-[10px] rounded-[200px]">
                New
              </p>
              <p className="text-white text-[12px] leading-[18px] spacing-[0.5px] pr-[10px]">
                High Intensity workout to burn calories
              </p>
            </div>
            <h1 className="font-extrabold lg:text-[96px] lg:leading-[96px] text-[64px] leading-[64px] tracking-[0.5px] text-white uppercase 2xl:w-[60%] lg:w-[85%]">
              Best program for{" "}
              <span className="text-primary">best results</span>
            </h1>
          </div>
          <div
            className={`${
              currentSlide == 1 ? "opacity-1 delay-[400ms]" : "opacity-0"
            } ease-in-out duration-500 transition-opacity absolute left-[1rem] top-[-400px] lg:top-[-350px] flex flex-col gap-[37px] pb-[80px]`}
          >
            <div className="p-[5px] flex w-[329px] items-center justify-between gap-[15px] bg-white bg-opacity-[10%] rounded-[200px]">
              <p className="uppercase font-semibold text-[10px] leading-[18px] tracking-[1.5px] text-secondary bg-primary py-[4px] px-[10px] rounded-[200px]">
                Back
              </p>
              <p className="text-white text-[12px] leading-[18px] spacing-[0.5px] pr-[10px]">
                Back training for the pain relief
              </p>
            </div>
            <h1 className="font-extrabold lg:text-[96px] lg:leading-[96px] text-[64px] leading-[64px] tracking-[0.5px] text-white uppercase 2xl:w-[60%] lg:w-[85%]">
              Realease pain from your <span className="text-primary">back</span>
            </h1>
          </div>
          <div
            className={`${
              currentSlide == 2 ? "opacity-1 delay-[400ms]" : "opacity-0"
            } ease-in-out duration-500 transition-opacity absolute left-[1rem] top-[-400px] lg:top-[-350px] flex flex-col gap-[37px] pb-[80px]`}
          >
            <div className="p-[5px] flex w-[329px] items-center justify-between gap-[15px] bg-white bg-opacity-[10%] rounded-[200px]">
              <p className="uppercase font-semibold text-[10px] leading-[18px] tracking-[1.5px] text-secondary bg-primary py-[4px] px-[10px] rounded-[200px]">
                Fit
              </p>
              <p className="text-white text-[12px] leading-[18px] spacing-[0.5px] pr-[10px]">
                Get ready for summer
              </p>
            </div>
            <h1 className="font-extrabold lg:text-[96px] lg:leading-[96px] text-[64px] leading-[64px] tracking-[0.5px] text-white uppercase 2xl:w-[60%] lg:w-[85%]">
              Your summer body <span className="text-primary">is waiting</span>
            </h1>
          </div>
          <div className="absolute top-[-330px] right-[1rem] flex flex-row gap-[4px] items-center">
            <div
              onClick={() => handleDotClick(0)}
              className={`${
                currentSlide == 0 ? "w-[15px] bg-white" : "w-[8px] bg-primary"
              } cursor-pointer h-[8px] rounded-full transition-all ease-in-out duration-200`}
            ></div>
            <div
              onClick={() => handleDotClick(1)}
              className={`${
                currentSlide == 1 ? "w-[15px] bg-white" : "w-[8px] bg-primary"
              } cursor-pointer h-[8px] rounded-full transition-all ease-in-out duration-200`}
            ></div>
            <div
              onClick={() => handleDotClick(2)}
              className={`${
                currentSlide == 2 ? "w-[15px] bg-white" : "w-[8px] bg-primary"
              } cursor-pointer h-[8px] rounded-full transition-all ease-in-out duration-200`}
            ></div>
          </div>
          <button className="z-20 font-bold uppercase absolute bottom-[-32px] text-secondary w-[206px] py-[20px] text-[16px] leading-[22px] bg-primary text-center">
            Check prices
          </button>{" "}
        </PageWrapper>
      </div>
      <div className="z-10 relative h-[50%] w-full flex-1 min-h-[460px]">
        <div
          className={`${
            currentSlide == 0 ? "translate-x-0" : " delay-500 translate-x-[-100%]"
          } z-10 transition-transform duration-500 ease-in-out h-full absolute top-0 left-0 w-full bg-cover bg-center bg-no-repeat`}
          style={{
            backgroundImage: "url(/images/homeHeroOne.png)",
          }}
        ></div>
        <div
          className={`${
            currentSlide == 1 ? "translate-x-0" : " delay-500 translate-x-[-100%]"
          } z-10 transition-transform duration-500 ease-in-out h-full absolute top-0 left-0 w-full bg-cover bg-center bg-no-repeat`}
          style={{
            backgroundImage: "url(/images/testemonial.png)",
          }}
        ></div>
        <div
          className={`${
            currentSlide == 2 ? "translate-x-0" : " delay-500 translate-x-[-100%]"
          } z-10 transition-transform duration-500 ease-in-out h-full absolute top-0 left-0 w-full bg-cover bg-center bg-no-repeat`}
          style={{
            backgroundImage: "url(/images/videoCover.png)",
          }}
        ></div>
      </div>
    </div>
  );
}

export default HeroSlider;
