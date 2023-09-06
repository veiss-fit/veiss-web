"use client";

import PageWrapper from "../../components/PageWrapper/PageWrapper";
import {
  ArrowLeft,
  ArrowRight
} from "../../components/Svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import blogImg2 from "../../../../../../public/images/videoCover.png";

import SubscribeBanner from "../../components/SubscribeBanner/SubscribeBanner";
import PreviewBanner from "../../components/PreviewBanner/PreviewBanner";
import StartExcercising from "../../components/StartExcercising/StartExcercising";
import PageTitle from "../../components/PageTitle/PageTitle";
import ShowcaseVideo from "../../components/ShowcaseVideo/ShowcaseVideo";
import DescriptiveCards from "../../components/DescriptiveCards/DescriptiveCards";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useState } from "react";

function Exercise() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      origin: "auto",
      perView: 2,
      spacing: 26
    },
    breakpoints: {
      "(max-width: 862px)": {
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
        <PageTitle title="Exercises" breadcrumb="Exercises" />
      </div>
      <div className="relative w-full bg-[#e0e0e0]">
        <div
          className="absolute top-0 right-0 lg:w-[50%] md:w-[40%] w-full h-full bg-cover bg-center bg-no-repeat bg-black"
          style={{
            backgroundImage: "url(/images/exerciseHero.png)",
          }}
        ></div>
        <div className="md:hidden block absolute top-0 left-0 bg-white w-full h-full bg-opacity-70">

        </div>
        <PageWrapper>
          <div className="flex flex-row pt-[135px] pb-[161px]">
            <div className="lg:w-[45%] md:w-[55%] w-full flex flex-col gap-[29px]">
              <h3 className="text-[#323232] uppercase font-[900] text-[36px] leading-[64px]">
                Bodybuilding
              </h3>
              <p className="text-[16px] leading-[24px] text-[#333333]">
                Design comps, layouts, wireframes—will your clients accept that
                you go about things the facile way? Authorities in our business
                will tell in no uncertain terms that Lorem Ipsum is that huge,
                huge no no to forswear forever.
              </p>
              <p className="text-[16px] leading-[24px] text-[#333333]">
                Not so fast, I`d say, there are some redeeming factors in favor
                of greeking text, as its use is merely the symptom of a worse
                problem to take into consideration.
              </p>
              <button className="mt-[15px] bg-secondary text-white relative z-[20]  w-[200px] text-[18px] leading-[22px] font-semibold px-[45px] py-[24px]">
                Subscribe
              </button>
            </div>
          </div>
        </PageWrapper>
      </div>
      <DescriptiveCards title="Benefits of training" />
      <ShowcaseVideo />
      <SubscribeBanner mode="light" />
      <div className="w-full bg-secondary">
        <PageWrapper>
          <div className="xl:px-[109px] lg:px-[30px] pt-[91px] pb-[95px] relative">
            <h3 className="text-white text-[36px] leading-[64px] font-[900] uppercase pb-[16px]">
              Bodybuilding
            </h3>
            <p className="pb-[16px] text-[16px] leading-[24px] text-white">
              Design comps, layouts, wireframes—will your clients accept that
              you go about things the facile way? Authorities in our business
              will tell in no uncertain terms that Lorem Ipsum is that huge,
              huge no no to forswear forever.
            </p>
            <p className="pb-[16px] text-[16px] leading-[24px] text-white">
              Not so fast, I`d say, there are some redeeming factors in favor of
              greeking text, as its use is merely the symptom of a worse problem
              to take into consideration.
            </p>
            <p className=" text-[16px] leading-[24px] text-white">
              The toppings you may chose for that TV dinner pizza slice when you
              forgot to shop for foods, the paint you may slap on your face to
              impress the new boss is your business. But what about your daily
              bread?
            </p>
            <div className="flex flex-row gap-[24px] justify-center py-[74px] w-full">
              <Image src={blogImg2} alt="blog-img" className="w-[49%]" />
              <Image src={blogImg2} alt="blog-img" className="w-[49%]" />
            </div>
            <p className="pb-[16px] text-[16px] leading-[24px] text-white">
              Design comps, layouts, wireframes—will your clients accept that
              you go about things the facile way? Authorities in our business
              will tell in no uncertain terms that Lorem Ipsum is that huge,
              huge no no to forswear forever.
            </p>
            <p className="pb-[16px] text-[16px] leading-[24px] text-white">
              Not so fast, I`d say, there are some redeeming factors in favor of
              greeking text, as its use is merely the symptom of a worse problem
              to take into consideration.
            </p>
            <p className=" text-[16px] leading-[24px] text-white">
              The toppings you may chose for that TV dinner pizza slice when you
              forgot to shop for foods, the paint you may slap on your face to
              impress the new boss is your business. But what about your daily
              bread?
            </p>
            <h3 className="pt-[129px] text-white font-[900] text-[48px] leading-[64px] uppercase text-center">
              Other workouts
            </h3>
            <div className="relative more-excercises__slider">
              <div
                ref={sliderRef}
                className="keen-slider pt-[70px]"
              >
                <div className="keen-slider__slide number-slide1 flex flex-col gap-[21px] w-[50%]">
                  <Image src={blogImg2} alt="blog-img" className="" />
                  <p className="uppercase font-[900] text-white text-[32px] leading-[40px">
                    Fitness
                  </p>
                  <span className="text-[16px] leading-[29px] tracking-[0.5px] text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </div>
                <div className="keen-slider__slide number-slide2 flex flex-col gap-[21px] w-[50%]">
                  <Image src={blogImg2} alt="blog-img" className="" />
                  <p className="uppercase font-[900] text-white text-[32px] leading-[40px">
                    Fitness
                  </p>
                  <span className="text-[16px] leading-[29px] tracking-[0.5px] text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </div>
                <div className="keen-slider__slide number-slide3 flex flex-col gap-[21px] w-[50%]">
                  <Image src={blogImg2} alt="blog-img" className="" />
                  <p className="uppercase font-[900] text-white text-[32px] leading-[40px">
                    Fitness
                  </p>
                  <span className="text-[16px] leading-[29px] tracking-[0.5px] text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </div>
                <div className="keen-slider__slide number-slide4 flex flex-col gap-[21px] w-[50%]">
                  <Image src={blogImg2} alt="blog-img" className="" />
                  <p className="uppercase font-[900] text-white text-[32px] leading-[40px">
                    Fitness
                  </p>
                  <span className="text-[16px] leading-[29px] tracking-[0.5px] text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </div>
              </div>
              {loaded && instanceRef.current && (
                <>
                  <ArrowLeft
                    width={37}
                    height={37}
                    className="arrow-left "
                    fill="white"
                    onClick={(e: any) =>
                      e.stopPropagation() || instanceRef.current?.prev()
                    }
                    disabled={currentSlide === 0}
                  />

                  <ArrowRight
                    width={37}
                    height={37}
                    className="arrow-right"
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
            </div>
          </div>
        </PageWrapper>
      </div>
      <PreviewBanner />
      <StartExcercising />
    </div>
  );
}

export default Exercise;
