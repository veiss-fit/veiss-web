import PageWrapper from "../PageWrapper/PageWrapper";
import devansh from "../../../../../../public/images/Devansh.jpeg";
import gokul from "../../../../../../public/images/Gokul.jpeg";

import Image from "next/image";
import { Linkedin } from "../Svg";

function OurTeam() {
  return (
    <div id="meet-the-team" className="bg-[#F2F2F2] w-full overflow-hidden">
      <PageWrapper>
        <div className="flex md:flex-row md:gap-[162px] gap-[130px] flex-col md:pt-[164px] md:pb-[91px] py-[73px] 2xl:pl-[120px] xl:pl-[60px] lg:pl-[30px]">
          <div className="sm:w-[200px] w-[323px] flex flex-col justify-between">
            <div className="flex flex-col gap-[41px]">
              <h2 className="sm:text-[64px] sm:leading-[64px] text-[40px] leading-[40px] text-[#0A0A0C] font-[900] uppercase">
                Meet our team
              </h2>
            </div>
          </div>
          <div className="relative z-20 flex gap-[40px] flex-wrap">
            {/* Devansh */}
            <div className="flex-col flex gap-[18px]">
              <div className="relative min-w-[292px] h-[292px]">
                <Image
                  className="w-full h-full"
                  src={devansh}
                  alt="devansh-img"
                />
                <div className="flex flex-col absolute top-[17px] right-[17px]">
                  <a href="https://www.linkedin.com/in/devansh-saxena-47312a204">
                  <Linkedin width={24} height={24} />
                  </a>
                </div>
              </div>
              <p className="text-secondary text-[12px] leading-[12px] tracking-[1.5px] uppercase">
                Entrepreneurial Lead
              </p>
              <h4 className="pb-[18px] border-b-[1px] border-b-[#070709] text-[20px] leading-[29px] tracking-[0.5px] font-semibold text-secondary">
                Devansh Saxena
              </h4>
            </div>

            {/* Gokul */}
            <div className="flex-col flex gap-[18px]">
              <div className="relative min-w-[292px] h-[292px]">
                <Image
                  className="w-full h-full"
                  src={gokul}
                  alt="gokul-img"
                />
                <div className="flex flex-col absolute top-[17px] right-[17px]">
                <a href="https://www.linkedin.com/in/gokul-krishnan-reghunath">
                  <Linkedin width={24} height={24} />
                  </a>
                </div>
              </div>
              <p className="text-secondary text-[12px] leading-[12px] tracking-[1.5px] uppercase">
                Software Lead
              </p>
              <h4 className="pb-[18px] border-b-[1px] border-b-[#070709] text-[20px] leading-[29px] tracking-[0.5px] font-semibold text-secondary">
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
