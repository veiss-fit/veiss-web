import PageWrapper from "../PageWrapper/PageWrapper";
import devansh from "../../../../../../public/images/Devansh.jpeg";
import gokul from "../../../../../../public/images/Gokul.jpeg";

import Image from "next/image";
import { Linkedin } from "../Svg";

function OurTeam() {
  return (
    <div id="meet-the-team" className="bg-[#F2F2F2] sm:bg-[#FAFAFA] w-full overflow-hidden">
      <PageWrapper>
        <div className="flex flex-col md:flex-row md:gap-[162px] gap-[80px] md:pt-[164px] md:pb-[91px] py-[73px] px-6 md:px-0 2xl:pl-[120px] xl:pl-[60px] lg:pl-[30px]">
          <div className="sm:w-[200px] w-full max-w-[350px] flex flex-col justify-between mx-auto md:mx-0 text-center md:text-left">
            <h2 className="sm:text-[64px] sm:leading-[64px] text-[40px] leading-[40px] text-[#0A0A0C] font-[900] uppercase">
              Meet our team
            </h2>
          </div>

          <div className="relative z-20 flex flex-wrap justify-center md:justify-start gap-10 md:gap-[40px]">
            {/* Devansh */}
            <div className="flex flex-col gap-[18px] max-w-[292px] w-full sm:w-[292px] mx-auto">
              <div className="relative w-full h-72 sm:h-[292px]">
                <Image
                  className="object-cover rounded"
                  src={devansh}
                  alt="devansh-img"
                  fill
                />
                <div className="absolute top-[17px] right-[17px]">
                  <a href="https://www.linkedin.com/in/devansh-saxena-47312a204" target="_blank" rel="noreferrer">
                    <Linkedin width={24} height={24} />
                  </a>
                </div>
              </div>
              <p className="text-secondary text-[12px] leading-[12px] tracking-[1.5px] uppercase text-center sm:text-left">
                Entrepreneurial Lead
              </p>
              <h4 className="pb-[18px] border-b border-b-[#070709] text-[20px] leading-[29px] tracking-[0.5px] font-semibold text-secondary text-center sm:text-left">
                Devansh Saxena
              </h4>
            </div>

            {/* Gokul */}
            <div className="flex flex-col gap-[18px] max-w-[292px] w-full sm:w-[292px] mx-auto">
              <div className="relative w-full h-72 sm:h-[292px]">
                <Image
                  className="object-cover rounded"
                  src={gokul}
                  alt="gokul-img"
                  fill
                />
                <div className="absolute top-[17px] right-[17px]">
                  <a href="https://www.linkedin.com/in/gokul-krishnan-reghunath" target="_blank" rel="noreferrer">
                    <Linkedin width={24} height={24} />
                  </a>
                </div>
              </div>
              <p className="text-secondary text-[12px] leading-[12px] tracking-[1.5px] uppercase text-center sm:text-left">
                Tech Lead
              </p>
              <h4 className="pb-[18px] border-b border-b-[#070709] text-[20px] leading-[29px] tracking-[0.5px] font-semibold text-secondary text-center sm:text-left">
                Gokul Reghunath
              </h4>
            </div>
          </div>
        </div>
      </PageWrapper>
    </div>
  );
}

export default OurTeam;
