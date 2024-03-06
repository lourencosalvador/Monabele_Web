import { GridContainer } from "../grid";
import buttomApple from "@/../public/appstore.svg";
import buttomGoogleStorage from "@/../public/googleplay.svg";
import phoneChatDemo from "@/../public/Mobile mockup home(3).svg";
import phoneLoginDemo from "@/../public/Sign In mobile app(1).svg";
import Image from "next/image";

export const InfoDowload = () => {
  return (
    <div className="h-screen w-full flex items-end">
      <div className="w-screen h-[30.625rem] flex items-center bg-[#FFBD001F] px-[7.5rem]">
        <GridContainer>
          <div className="flex flex-col gap-5">
            <h1 className="font-seny text-[2.35rem] w-[25rem] leading-[55px]   text-[#1E1E1E]">
              Download the monabele app from
            </h1>
            <p className="text-[0.775rem] mb-2 w-[26rem] leading-[22px] text-[#656666] ">
            At Monabele, we are redefining the way people access currency exchange opportunities.
             With a unique vision and an unwavering
            </p>
            <div className="flex gap-4">
              <Image
                src={buttomGoogleStorage}
                alt="buttom in apple story"
                width={160}
              />
              <Image src={buttomApple} alt="buttom in apple" width={160} />
            </div>
          </div>
          
          <div className="relative mt-[-168px]">
            <Image
              src={phoneChatDemo}
              alt="phone chat demo"
            />
             <Image
              src={phoneLoginDemo}
              alt="phone chat demo"
              className="absolute top-[8.5rem] left-[-10rem]"
            />
          </div>

        </GridContainer>
      </div>
    </div>
  );
};
