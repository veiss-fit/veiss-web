"use client";

import PageWrapper from "../../components/PageWrapper/PageWrapper";
import {
  Facebook,
  Instagram,
  Linkedin,
  ArrowLeft,
  ArrowRight,
} from "../../components/Svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import trainerAvatar from "../../../../../../public/images/trainerPageAvatar.png";

// import OurProgramsImage from "../../../../../../public/images/trainerGallery.png";
// import trainerTwo from "../../../../../../public/images/trainerTwo.png";
// import trainerOne from "../../../../../../public/images/trainerOne.png";
// import trainerThree from "../../../../../../public/images/trainerThree.png";

import SubscribeBanner from "../../components/SubscribeBanner/SubscribeBanner";
import PreviewBanner from "../../components/PreviewBanner/PreviewBanner";
import StartExcercising from "../../components/StartExcercising/StartExcercising";
import PageTitle from "../../components/PageTitle/PageTitle";
import ShowcaseVideo from "../../components/ShowcaseVideo/ShowcaseVideo";
import DescriptiveCards from "../../components/DescriptiveCards/DescriptiveCards";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

function Trainer() {
  const router = useRouter();

  // const trainers = [
  //   {
  //     title: "Bodybuilding",
  //     name: "Marko Mihajlović",
  //     image: trainerTwo,
  //   },
  //   {
  //     title: "Bodybuilding",
  //     name: "Sanja Radović",
  //     image: trainerOne,
  //   },
  //   {
  //     title: "Bodybuilding",
  //     name: "Marko Dumnić",
  //     image: trainerThree,
  //   },
  //   {
  //     title: "Bodybuilding",
  //     name: "Marko Mihajlović",
  //     image: trainerTwo,
  //   },
  //   {
  //     title: "Bodybuilding",
  //     name: "Sanja Radović",
  //     image: trainerOne,
  //   },
  //   {
  //     title: "Bodybuilding",
  //     name: "Marko Dumnić",
  //     image: trainerThree,
  //   },
  // ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      origin: "auto",
      perView: 4,
    },
    breakpoints: {
      "(max-width: 1535px)": {
        slides: {
          origin: "auto",
          perView: 3,
        },
      },
      "(max-width: 1134px)": {
        slides: {
          origin: "auto",
          perView: 2,
        },
      },
      "(max-width: 833px)": {
        slides: {
          origin: "auto",
          perView: 1,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div>
      <div className="lg:pt-[122px] pt-[92px]">
        <PageTitle title="Trainers" breadcrumb="Trainers" />
      </div>
      <div className="relative w-full bg-[#e0e0e0]">
        <PageWrapper>
          <div className="flex flex-row py-[74px] gap-[133px] items-center">
            <Image
              alt="trainer-photo"
              src={trainerAvatar}
              className="lg:block hidden"
            />
            <div className="flex flex-col lg:w-[605px] w-full gap-[11px] text-[16px] leading-[24px] text-[#333333]">
              <div className="flex flex-row gap-[20px] items-center">
                <div className="w-[100px] h-[100px] lg:hidden">
                  <Image
                    className="block lg:hidden w-full h-full"
                    alt="trainer-photo"
                    src={trainerAvatar}
                  />
                </div>

                <div className="flex flex-col lg:gap-[11px]">
                  <h6 className="lg:text-[36px] text-[26px] lg:leading-[64px] leading-[26px] font-[900] text-[#323232]">
                    Marko Mihajlović
                  </h6>
                  <p className="uppercase font-bold lg:text-[16px] text-[14px]">
                    Rehabilitaion trainer
                  </p>
                </div>
              </div>

              <p className="lg:pt-[6px] pt-[20px]">
                Design comps, layouts, wireframes—will your clients accept that
                you go about things the facile way? Authorities in our business
                will tell in no uncertain terms that Lorem Ipsum is that huge,
                huge no no to forswear forever.
              </p>
              <p className="pt-[12px]">
                Not so fast, I`d say, there are some redeeming factors in favor
                of greeking text, as its use is merely the symptom of a worse
                problem to take into consideration.
              </p>
              <p className="pt-[12px]">
                The toppings you may chose for that TV dinner pizza slice when
                you forgot to shop for foods, the paint you may slap on your
                face to impress the new boss is your business. But what about
                your daily bread?
              </p>
              <div className="flex gap-[16px] items-center justify-center md:justify-start pt-[16px]">
                <div className="bg-primary w-[24px] h-[24px] flex items-center justify-center rounded-full">
                  <Facebook className="fill-secondary" />
                </div>
                <div className="bg-primary w-[24px] h-[24px] flex items-center justify-center rounded-full">
                  <Linkedin className="fill-secondary" />
                </div>
                <div className="bg-primary w-[24px] h-[24px] flex items-center justify-center rounded-full">
                  <Instagram className="fill-secondary" />
                </div>
              </div>
            </div>
          </div>
        </PageWrapper>
      </div>
      <DescriptiveCards title="Trener expertise" />
      <ShowcaseVideo />
      <SubscribeBanner mode="light" />
      <div className="bg-secondary w-full relative">
        <div className="absolute bottom-0 left-0 h-[419px] bg-[#121214] w-full"></div>
        <PageWrapper>
          <div className="xl:px-[109px] lg:px-[30px] relative flex flex-col gap-[55px] pt-[91px] pb-[169px]">
            <h4 className="uppercase text-white font-[900] text-[36px] leading-[64px]">
              Gallery
            </h4>
            <div className="flex flex-row flex-wrap gap-[24px]">
              <div className="flex-[48%] h-[317px]">
                {/* <Image
                  src={OurProgramsImage}
                  alt="programs-img"
                  className="w-full h-full"
                /> */}
              </div>
              <div className="flex-[48%] h-[317px]">
                {/* <Image
                  src={OurProgramsImage}
                  alt="programs-img"
                  className="w-full h-full"
                /> */}
              </div>{" "}
              <div className="flex-[48%] h-[317px]">
                {/* <Image
                  src={OurProgramsImage}
                  alt="programs-img"
                  className="w-full h-full"
                /> */}
              </div>{" "}
              <div className="flex-[48%] h-[317px]">
                {/* <Image
                  src={OurProgramsImage}
                  alt="programs-img"
                  className="w-full h-full"
                /> */}
              </div>
            </div>
            <h3 className="pt-[33px] text-white font-[900] text-[48px] leading-[64px] uppercase text-center">
              Other trainers
            </h3>
            {/* <div className="relative justify-center flex">
              <div ref={sliderRef} className="keen-slider pt-[32px]">
                {trainers.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className={`justify-center items-center max-w-[292px] keen-slider__slide number-slide${
                        index + 1
                      } relative z-20 flex-col flex gap-[18px]`}
                    >
                      <div className="min-w-[292px] h-[399px] max-w-[292px] ">
                        <Image
                          className="w-full h-full"
                          src={item.image}
                          alt="trainer-img"
                        />
                      </div>
                      <p className="text-white opacity-[67%] text-[12px] leading-[12px] tracking-[1.5px] uppercase">
                        {item.title}
                      </p>
                      <h4 className=" text-[20px] leading-[29px] tracking-[0.5px] font-semibold text-white">
                        {item.name}
                      </h4>
                    </div>
                  );
                })}
              </div> */}
              {/* {loaded && instanceRef.current && (
                <>
                  <ArrowLeft
                    width={37}
                    height={37}
                    className="absolute sm:top-[48%] transform sm:translate-y-[-100%] left-[35%] top-auto sm:bottom-auto bottom-[-60px] sm:left-[60px] xl:left-[-75px] lg:left-[-40px] md:left-[-20px]"
                    fill="white"
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                  />

                  <ArrowRight
                    width={37}
                    height={37}
                    className="absolute sm:top-[52%] transform xl:right-[-75px] right-[35%] top-auto sm:bottom-auto bottom-[-60px] sm:right-[60px] lg:right-[-40px] md:right-[-20px]"
                    fill="white"
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.next()
                    }
                    disabled={
                      currentSlide ===
                      instanceRef.current.track.details.slides.length - 1
                    }
                  />
                </>
              )}
            </div> */}
          </div>
        </PageWrapper>
      </div>
      <PreviewBanner />
      <StartExcercising />
    </div>
  );
}

export default Trainer;
