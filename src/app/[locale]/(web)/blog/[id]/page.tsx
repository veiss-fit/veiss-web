"use client";

import PageWrapper from "../../components/PageWrapper/PageWrapper";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  Facebook,
  Instagram,
  Linkedin,
} from "../../components/Svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import blogImg from "../../../../../../public/images/homeHeroOne.png";
import blogImg2 from "../../../../../../public/images/videoCover.png";
import blogUser from "../../../../../../public/images/blogUser.png";

import SubscribeBanner from "../../components/SubscribeBanner/SubscribeBanner";
import PreviewBanner from "../../components/PreviewBanner/PreviewBanner";
import StartExcercising from "../../components/StartExcercising/StartExcercising";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Blog() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    loop: true,
    slides: {
      origin: "auto",
      perView: 2,
      spacing: 26,
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
      <div
        className="lg:pt-[136px] pt-[93px] relative w-full bg-[#e0e0e0] bg-cover bg-center bg-no-repeat lg:!bg-none"
        style={{
          backgroundImage: "url(/images/homeHeroOne.png)",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[#e0e0e0] bg-opacity-70"></div>
        <PageWrapper>
          <div className="xl:px-[109px] lg:px-[30px] pt-[27px] relative lg:h-[645px] pb-[80px] lg:pb-0">
            <div
              onClick={() => router.back()}
              className="cursor-pointer w-[34px] h-[34px] rounded-full border-[1px] border-[#333333] flex items-center justify-center"
            >
              <ChevronLeft width={24} height={24} fill="#333333" />
            </div>
            <div className="flex flex-col gap-[15px] pt-[28px]">
              <span className="uppercase text-[#747474] text-[12px] leading-[12px] tracking-[1.5px] font-medium">
                Aug. 21. 2023
              </span>
              <h2 className="uppercase text-[#333333] text-[64px] leading-[64px] font-[900] tracking-[0.5px]">
                Best shoulder exercise
              </h2>
              <p className="text-secondary tracking-[0.5px] text-[16px] leading-[29px] ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex gap-[12px] text-[#212121] text-[14px] leading-[18px] font-medium text-center pt-[20px]">
                <p className="bg-primary px-[12px] py-[8px]">Fitness</p>
                <p className="bg-primary px-[12px] py-[8px]">Fitness</p>
                <p className="bg-primary px-[12px] py-[8px]">Fitness</p>
              </div>
            </div>
            <Image
              src={blogImg}
              alt="blog-img"
              className="max-w-full h-[488px] pt-[32px] lg:block hidden"
            />
          </div>
        </PageWrapper>
      </div>
      <div className="w-full bg-secondary">
        <PageWrapper>
          <div className="xl:px-[109px] lg:px-[30px] 2xl:pt-[176px] lg:pt-[200px]  pt-[60px] pb-[98px] relative">
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
            <div className="flex flex-col justify-center w-[80%] py-[74px] mx-auto">
              <Image src={blogImg2} alt="blog-img" className="w-full" />
              <p className="text-[#002c65] text-[16px] leading-[24px] font-semibold px-[20px] py-[8px] bg-[#F0F3FF]">
                Image caption or cred
              </p>
            </div>
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
            <q className="text-white font-semibold text-[32px] leading-[52px] py-[45px] block">
              Amazing experience i love it a lot. Thanks to the team that dreams
              come true, great! I appreciate there attitude and approach. Truly
              professionals!
            </q>
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
          </div>
        </PageWrapper>
      </div>
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
          </div>
        </PageWrapper>
      </div>
      <div className="w-full bg-[#121214]">
        <PageWrapper>
          <div className="xl:px-[109px] lg:px-[30px] md:pt-[70px] md:pb-[107px] pt-[40px] pb-[72px] relative flex md:gap-[65px] gap-[38px] md:items-end items-center md:flex-row flex-col">
            <div className="flex flex-col min-w-[292px] gap-[46px]">
              <h3 className="font-[900] text-[36px] leading-[64px] text-white uppercase">
                About author
              </h3>
              <Image src={blogUser} alt="blog-author" />
            </div>
            <div className="text-center md:text-left">
              <h6 className="font-bold text-white leading-[64px] text-[24px]">
                Markova Samoposluga
              </h6>
              <p className="text-white opacity-[67%] text-[16px] leading-[24px] uppercase">
                Rehabilitation trainer
              </p>

              <p className="text-white opacity-[67%] text-[16px] leading-[24px] py-[34px]">
                Design comps, layouts, wireframes—will your clients accept that
                you go about things the facile way? Authorities in our business
                will tell in no uncertain terms that Lorem Ipsum is that huge,
                huge no no to forswear forever.
              </p>
              <div className="flex gap-[16px] items-center justify-center md:justify-start">
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
      <div className="w-full bg-secondary">
        <PageWrapper>
          <div className="xl:px-[109px] lg:px-[30px] flex flex-col gap-[70px] pt-[70px] pb-[97px]">
            <div className="flex gap-[20px] flex-wrap flex-row items-center justify-between">
              <h3 className="font-[900] text-[48px] leading-[64px] text-white uppercase">
                Related
              </h3>
              <div className="flex items-center gap-[18px]">
                <p className="sm:block hidden uppercase text-[16px] leading-[29px] tracking-[0.5px] font-semibold text-white">
                  Check blog
                </p>
                <ArrowRight width={37} height={37} fill="white" />
              </div>
            </div>
            <div className="relative more-blogs__slider">
              <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1 flex flex-col gap-[21px] w-[50%]">
                  <Image src={blogImg2} alt="blog-img" className="" />
                  <div className="gap-[16px] flex-wrap pt-[3px] flex flex-row items-center justify-between">
                    <p className="text-[12px] leading-[12px] tracking-[1.5px] text-[#747474] font-medium uppercase">
                      Aug. 21. 2023
                    </p>
                    <div className="flex gap-[12px]">
                      <p className="font-medium text-[14px] leading-[18px] text-center text-[#8f8f8f] py-[8px] px-[12px] border-[1px] border-[#464646]">
                        Fitness
                      </p>
                      <p className="font-medium text-[14px] leading-[18px] text-center text-[#8f8f8f] py-[8px] px-[12px] border-[1px] border-[#464646]">
                        Fitness
                      </p>
                      <p className="font-medium text-[14px] leading-[18px] text-center text-[#8f8f8f] py-[8px] px-[12px] border-[1px] border-[#464646]">
                        Fitness
                      </p>
                    </div>
                  </div>
                  <p className="font-[900] text-white text-[32px] leading-[40px">
                    5 Rules of training
                  </p>
                  <span className="text-[16px] leading-[29px] tracking-[0.5px] text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </div>
                <div className="keen-slider__slide number-slide2 flex flex-col gap-[21px] w-[50%]">
                  <Image src={blogImg2} alt="blog-img" className="" />
                  <div className="gap-[16px] flex-wrap pt-[3px] flex flex-row items-center justify-between">
                    <p className="text-[12px] leading-[12px] tracking-[1.5px] text-[#747474] font-medium uppercase">
                      Aug. 21. 2023
                    </p>
                    <div className="flex gap-[12px]">
                      <p className="font-medium text-[14px] leading-[18px] text-center text-[#8f8f8f] py-[8px] px-[12px] border-[1px] border-[#464646]">
                        Fitness
                      </p>
                      <p className="font-medium text-[14px] leading-[18px] text-center text-[#8f8f8f] py-[8px] px-[12px] border-[1px] border-[#464646]">
                        Fitness
                      </p>
                      <p className="font-medium text-[14px] leading-[18px] text-center text-[#8f8f8f] py-[8px] px-[12px] border-[1px] border-[#464646]">
                        Fitness
                      </p>
                    </div>
                  </div>
                  <p className="font-[900] text-white text-[32px] leading-[40px">
                    5 Rules of training
                  </p>
                  <span className="text-[16px] leading-[29px] tracking-[0.5px] text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </div>
                <div className="keen-slider__slide number-slide3 flex flex-col gap-[21px] w-[50%]">
                  <Image src={blogImg2} alt="blog-img" className="" />
                  <div className="gap-[16px] flex-wrap pt-[3px] flex flex-row items-center justify-between">
                    <p className="text-[12px] leading-[12px] tracking-[1.5px] text-[#747474] font-medium uppercase">
                      Aug. 21. 2023
                    </p>
                    <div className="flex gap-[12px]">
                      <p className="font-medium text-[14px] leading-[18px] text-center text-[#8f8f8f] py-[8px] px-[12px] border-[1px] border-[#464646]">
                        Fitness
                      </p>
                      <p className="font-medium text-[14px] leading-[18px] text-center text-[#8f8f8f] py-[8px] px-[12px] border-[1px] border-[#464646]">
                        Fitness
                      </p>
                      <p className="font-medium text-[14px] leading-[18px] text-center text-[#8f8f8f] py-[8px] px-[12px] border-[1px] border-[#464646]">
                        Fitness
                      </p>
                    </div>
                  </div>
                  <p className="font-[900] text-white text-[32px] leading-[40px">
                    5 Rules of training
                  </p>
                  <span className="text-[16px] leading-[29px] tracking-[0.5px] text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </span>
                </div>
                <div className="keen-slider__slide number-slide4 flex flex-col gap-[21px] w-[50%]">
                  <Image src={blogImg2} alt="blog-img" className="" />
                  <div className="gap-[16px] flex-wrap pt-[3px] flex flex-row items-center justify-between">
                    <p className="text-[12px] leading-[12px] tracking-[1.5px] text-[#747474] font-medium uppercase">
                      Aug. 21. 2023
                    </p>
                    <div className="flex gap-[12px]">
                      <p className="font-medium text-[14px] leading-[18px] text-center text-[#8f8f8f] py-[8px] px-[12px] border-[1px] border-[#464646]">
                        Fitness
                      </p>
                      <p className="font-medium text-[14px] leading-[18px] text-center text-[#8f8f8f] py-[8px] px-[12px] border-[1px] border-[#464646]">
                        Fitness
                      </p>
                      <p className="font-medium text-[14px] leading-[18px] text-center text-[#8f8f8f] py-[8px] px-[12px] border-[1px] border-[#464646]">
                        Fitness
                      </p>
                    </div>
                  </div>
                  <p className="font-[900] text-white text-[32px] leading-[40px">
                    5 Rules of training
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

export default Blog;
