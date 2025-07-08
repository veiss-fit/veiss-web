import PageWrapper from "../PageWrapper/PageWrapper";
import { useEffect, useRef, useState } from "react";
import WaitlistModal from "../WaitlistModal/WaitlistModal";

function HeroSlider() {
  const [isOpen, setOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<null | NodeJS.Timeout>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleDotClick = (index: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 3);
    }, 5000);
    setCurrentSlide(index);
  };

  return (
    <div
      className="pt-[80px] sm:pt-[0px] lg:pt-[0px] flex flex-col min-h-screen bg-cover bg-center bg-no-repeat bg-black"
      style={{ backgroundImage: "url(/images/mainTexture.png)" }}
    >
      <div className="relative min-h-[350px] sm:min-h-[300px] lg:min-h-[500px] w-full flex flex-1 items-end">
        <PageWrapper>
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className={`${
                currentSlide === index ? "opacity-100 delay-[400ms]" : "opacity-0"
              } transition-opacity duration-500 ease-in-out absolute left-4 top-[calc(5%-300px)] sm:top-[calc(5%-500px)] lg:top-[calc(5%-350px)] flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[37px] pb-[40px] sm:pb-[10px] lg:pb-[80px]`}
            >
              <div className="p-[5px] flex w-[85%] sm:w-[85%] max-w-[260px] sm:max-w-[329px] items-center justify-between gap-[10px] bg-white bg-opacity-[10%] rounded-[200px]">
                <p className="uppercase font-semibold text-[8px] sm:text-[10px] leading-[14px] sm:leading-[18px] tracking-[1.2px] sm:tracking-[1.5px] text-secondary bg-primary py-[2px] sm:py-[4px] px-[6px] sm:px-[10px] rounded-[200px]">
                  {index === 0 ? "Consistent" : index === 1 ? "Easy" : "Fit"}
                </p>
                <p className="text-white text-[10px] sm:text-[12px] leading-[14px] sm:leading-[18px] pr-[6px] sm:pr-[10px]">
                  {index === 0
                    ? "Effortless tracking"
                    : index === 1
                    ? "Make fitness easier"
                    : "Get ready for summer"}
                </p>
              </div>
              <h1 className="font-extrabold text-[36px] leading-[40px] sm:text-[64px] sm:leading-[64px] lg:text-[96px] lg:leading-[96px] tracking-[0.5px] text-white uppercase w-full sm:w-[90%] lg:w-[85%] 2xl:w-[60%]">
                {index === 0 && (
                  <>
                    Stay consistent <span className="text-primary">with Veiss</span>
                  </>
                )}
                {index === 1 && (
                  <>
                    Workout made easy with <span className="text-primary">VEISS</span>
                  </>
                )}
                {index === 2 && (
                  <>
                    Your summer body <span className="text-primary">is waiting</span>
                  </>
                )}
              </h1>
            </div>
          ))}

          {/* Navigation Dots */}
          <div className="absolute top-[calc(5%-280px)] sm:top-[calc(5%-330px)] right-4 flex flex-row gap-[4px] items-center">
            {[0, 1, 2].map((index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`${
                  currentSlide === index ? "w-[12px] sm:w-[15px] bg-white" : "w-[6px] sm:w-[8px] bg-primary"
                } cursor-pointer h-[6px] sm:h-[8px] rounded-full transition-all ease-in-out duration-200`}
              ></div>
            ))}
          </div>

          {/* CTA Button */}
          <>
            <button
              onClick={() => setOpen(true)}
              className="z-20 font-bold uppercase absolute bottom-[-24px] sm:bottom-[-32px] text-secondary w-[160px] sm:w-[206px] py-[14px] sm:py-[20px] text-[14px] sm:text-[16px] leading-[20px] sm:leading-[22px] bg-primary text-center"
            >
              Join our Waitlist
            </button>
            <WaitlistModal open={isOpen} onOpenChange={setOpen} />
          </>
        </PageWrapper>
      </div>

      {/* Background Slides */}
      <div className="z-10 relative h-[50%] w-full flex-1 min-h-[300px] sm:min-h-[460px]">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`${
              currentSlide === index ? "translate-x-0" : "translate-x-[-100%]"
            } z-10 transition-transform duration-500 ease-in-out h-full absolute top-0 left-0 w-full bg-cover bg-center bg-no-repeat`}
            style={{
              backgroundImage:
                index === 0
                  ? "url(/images/homeHeroOne.png)"
                  : index === 1
                  ? "url(/images/testemonial.png)"
                  : "url(/images/videoCover.png)",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default HeroSlider;
