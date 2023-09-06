import React, { useState } from "react";
import PageWrapper from "../PageWrapper/PageWrapper";
import Image from "next/image";
import OurProgramsImage from "../../../../../../public/images/hoverImg.png";
import OurOtherImage from "../../../../../../public/images/blogLeft.png";

function ProgramsList() {
  const [hoveredElement, setHoveredElement] = useState<{
    text: string;
    image: any;
  } | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e: any, element: any) => {
    setHoveredElement(element);
    updateCursorPosition(e);
  };

  const handleMouseMove = (e: any) => {
    if (hoveredElement) {
      updateCursorPosition(e);
    }
  };

  const handleMouseLeave = () => {
    setHoveredElement(null);
  };

  const updateCursorPosition = (e: any) => {
    const yOffset = 50; // Podesite vertikalni offset
    setCursorPosition({ x: e.clientX, y: e.clientY - yOffset });
  };

  const firstRow = [
    { text: "Bodybuilding", image: OurProgramsImage },
    { text: "Crossfit", image: OurOtherImage },
    { text: "Rehab", image: OurProgramsImage },
  ];

  const secondRow = [
    { text: "Cardio", image: OurOtherImage },
    { text: "Weightloss", image: OurProgramsImage },
    { text: "Powerlift", image: OurOtherImage },
  ];

  const thirdRow = [
    { text: "Yoga", image: OurProgramsImage },
    { text: "Athetics", image: OurOtherImage },
    { text: "Nutrition", image: OurProgramsImage },
  ];
  const fourthRow = [
    { text: "Motivation", image: OurOtherImage },
    { text: "Atheticss", image: OurProgramsImage },
  ];

  return (
    <div className="bg-grayBg w-full relative overflow-hidden">
      <PageWrapper>
        <div className="flex flex-col gap-[36px] lg:py-[156px] md:py-[100px] pt-[66px] pb-[217px]">
          <h6 className="text-secondary text-[12px] leading-[12px] tracking-[1.5px] uppercase">
            Check our programs
          </h6>

          <div className="hidden md:flex flex-col uppercase lg:text-[48px] md:text-[32px] font-[900] lg:leading-[64px] md:leading-[44px] text-[#BDBDBD]">
            <div className="flex flex-row flex-wrap">
              {firstRow.map((el, index) => {
                return (
                  <React.Fragment key={index}>
                    <div
                      className="fill-parent cursor-pointer group relative"
                      onMouseEnter={(e) => handleMouseEnter(e, el)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex-row flex items-center">
                        <div
                          className={`relative ${
                            index !== 0 ? "ml-[28px]" : "pl-0"
                          }`}
                        >
                          <p className="fill-effect">{el.text}</p>
                          <div className="w-0 bg-primary group-hover:w-full transition-all ease-in-out duration-300 absolute bottom-[-8px] h-[10px]"></div>
                        </div>
                        {index < firstRow.length - 1 && (
                          <span className="pl-[28px] font-medium text-[#828282]">
                            /
                          </span>
                        )}
                      </div>

                      <div
                        className={` ${
                          hoveredElement?.text === el.text
                            ? "scale-1"
                            : "scale-0"
                        } transition-transform ease-out duration-300 fixed z-50 w-[170px] h-[113px]`}
                        style={{
                          left: cursorPosition.x, // Pola širine slike
                          top: cursorPosition.y - 113, // Visina slike + vertikalni offset
                        }}
                      >
                        <div
                          className={` bg-primary w-[78px] h-[78px] absolute top-[-20px] right-[-20px] z-10`}
                        ></div>
                        <Image
                          src={el.image}
                          alt="programs-img"
                          fill
                          className={`z-50 relative pointer-events-none w-full h-auto  object-cover`}
                        />
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
            <div className="flex flex-row flex-wrap">
              {secondRow.map((el, index) => {
                return (
                  <React.Fragment key={index}>
                    <div
                      className="fill-parent pt-[36px] cursor-pointer group relative"
                      onMouseEnter={(e) => handleMouseEnter(e, el)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex-row flex items-center">
                        <div
                          className={`relative ${
                            index !== 0 ? "ml-[28px]" : "pl-0"
                          }`}
                        >
                          <p className="fill-effect">{el.text}</p>
                          <div className="w-0 bg-primary group-hover:w-full transition-all ease-in-out duration-300 absolute bottom-[-8px] h-[10px]"></div>
                        </div>
                        {index < secondRow.length - 1 && (
                          <span className="pl-[28px] font-medium text-[#828282]">
                            /
                          </span>
                        )}
                      </div>

                      <div
                        className={`${
                          hoveredElement?.text === el.text
                            ? "scale-1"
                            : "scale-0"
                        } transition-transform ease-out duration-300 fixed z-50 w-[170px] h-[113px]`}
                        style={{
                          left: cursorPosition.x,
                          top: cursorPosition.y - 113,
                        }}
                      >
                        <div
                          className={`bg-primary w-[78px] h-[78px] absolute top-[-20px] right-[-20px] z-10`}
                        ></div>
                        <Image
                          src={el.image}
                          alt="programs-img"
                          fill
                          className={`z-50 relative pointer-events-none w-full h-auto  object-cover`}
                        />
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
            <div className="flex flex-row flex-wrap">
              {thirdRow.map((el, index) => {
                return (
                  <React.Fragment key={index}>
                    <div
                      className="fill-parent pt-[36px] cursor-pointer group relative"
                      onMouseEnter={(e) => handleMouseEnter(e, el)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex-row flex items-center">
                        <div
                          className={`relative ${
                            index !== 0 ? "ml-[28px]" : "pl-0"
                          }`}
                        >
                          <p className="fill-effect">{el.text}</p>
                          <div className="w-0 bg-primary group-hover:w-full transition-all ease-in-out duration-300 absolute bottom-[-8px] h-[10px]"></div>
                        </div>
                        {index < thirdRow.length - 1 && (
                          <span className="pl-[28px] font-medium text-[#828282]">
                            /
                          </span>
                        )}
                      </div>

                      <div
                        className={`${
                          hoveredElement?.text === el.text
                            ? "scale-1"
                            : "scale-0"
                        } transition-transform ease-out duration-300 fixed z-50 w-[170px] h-[113px]`}
                        style={{
                          left: cursorPosition.x,
                          top: cursorPosition.y - 113,
                        }}
                      >
                        <div
                          className={` bg-primary w-[78px] h-[78px] absolute top-[-20px] right-[-20px] z-10`}
                        ></div>
                        <Image
                          src={el.image}
                          alt="programs-img"
                          fill
                          className={`z-50 relative pointer-events-none w-full h-auto  object-cover`}
                        />
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
            <div className="flex flex-row flex-wrap">
              {fourthRow.map((el, index) => {
                return (
                  <React.Fragment key={index}>
                    <div
                      className="fill-parent pt-[36px] cursor-pointer group relative"
                      onMouseEnter={(e) => handleMouseEnter(e, el)}
                      onMouseMove={handleMouseMove}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="flex-row flex items-center">
                        <div
                          className={`relative ${
                            index !== 0 ? "ml-[28px]" : "pl-0"
                          }`}
                        >
                          <p className="fill-effect">{el.text}</p>
                          <div className="w-0 bg-primary group-hover:w-full transition-all ease-in-out duration-300 absolute bottom-[-8px] h-[10px]"></div>
                        </div>
                        {index < fourthRow.length - 1 && (
                          <span className="pl-[28px] font-medium text-[#828282]">
                            /
                          </span>
                        )}
                      </div>

                      <div
                        className={`${
                          hoveredElement?.text === el.text
                            ? "scale-1"
                            : "scale-0"
                        } transition-transform ease-out duration-300 fixed z-50 w-[170px] h-[113px]`}
                        style={{
                          left: cursorPosition.x, // Pola širine slike
                          top: cursorPosition.y - 113, // Visina slike + vertikalni offset
                        }}
                      >
                        <div
                          className={`bg-primary w-[78px] h-[78px] absolute top-[-20px] right-[-20px] z-10`}
                        ></div>
                        <Image
                          src={el.image}
                          alt="programs-img"
                          fill
                          className={` z-50 relative pointer-events-none w-full h-auto  object-cover`}
                        />
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="flex md:hidden text-[40px] font-[900] leading-[44px] text-[#BDBDBD] flex-col gap-[20px]">
            {firstRow.map((el, index) => {
              return (
                <div key={index} className="relative fill-parent">
                  <p className="cursor-pointer uppercase fill-effect">
                    {el.text}
                  </p>
                </div>
              );
            })}
            {secondRow.map((el, index) => {
              return (
                <div key={index} className="relative fill-parent">
                  <p className="cursor-pointer uppercase fill-effect">
                    {el.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </PageWrapper>
      <div className="h-[184px] w-[130px] border-[3px] border-[#A1A1AA] absolute bottom-[-92px] right-[-12px]"></div>
      <div className="h-[184px] w-[130px] border-[3px] border-[#A1A1AA] absolute bottom-[-50px] right-[72px] opacity-[71%]"></div>
      <div className="h-[184px] w-[130px] border-[3px] border-[#A1A1AA] absolute bottom-[-3px] right-[143px] opacity-[23%]"></div>
    </div>
  );
}

export default ProgramsList;
