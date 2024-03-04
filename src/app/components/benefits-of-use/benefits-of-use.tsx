import { GridContainer } from "../grid";
import Image from "next/image";
import BoxOfCards from "@/../public/Exchanges card.svg";
import BoxOfCardsBenefits from "@/../public/Exchange currency card.svg";
import BoxOfCardsBenefits2 from "@/../public/Exchange currrency card.svg";
import BoxOfCardsDetails from "@/../public/Exchange card details.svg";
import arrowInvert from "@/../public/arrow-reload-vertical.svg";
import { Buttom } from "../Buttom/Buttom";
import { AdvantagesOfUsingSellers } from "../advantages-of-using-sellers/advantages-of-using-sellers";

export const BenefitsOfUse = () => {
  return (
    <div className="h-screen w-full  justify-center items-center px-52">
      <GridContainer>
        <div className="relative w-[22.5rem] h-screen flex  items-center">
          <Image
            src={BoxOfCards}
            alt="box of cards"
            className="w-[22.625rem] h-[22.875rem]"
          />
          <div className="absolute top-[9.50rem] w-auto h-auto">
            <div className="relative left-[-90px] flex flex-col">
              <Image src={BoxOfCardsBenefits} alt="box of cards benefits" />
              <div className="absolute top-[5.5rem] left-[11.5rem] w-[2.575rem] h-[2.575rem] bg-[#ffff] border-[3.5px] border-zinc-950 rounded-full flex justify-center items-center">
                <Image src={arrowInvert} alt="arrow Invert Card" />
              </div>
              <Image
                src={BoxOfCardsBenefits2}
                alt="box of cards benefits change"
                className="ml-[1.875rem] mt-[-0.9rem]"
              />
            </div>
            <div>
              <Image
                src={BoxOfCardsDetails}
                alt="box of cards benefits details"
              />
            </div>
          </div>
        </div>

        <div className="w-[24rem] h-screen flex  items-center" >
          <div className=" flex flex-col  gap-4">
          <Buttom className="rounded-full border-[1px] w-[8.5rem] h-[2.1rem] border-[#E0E0E0] bg-slate-50">
            <span className="text-[#656666] text-[13px]">Best currencies</span>
          </Buttom>
          <h1 className="font-seny text-[38.5px] w-[28.125rem] leading-[46.5px] text-[#1E1E1E]">
            Buy foreign currency at competitive market prices
          </h1>
          <p className="text-[#656666] text-[12.5px] leading-[27px] w-[25rem]">
            At Monabele, we are redefining the way people access currency
            exchange opportunities. With a unique vision and an unwavering
            commitment to innovation, we are here to make
          </p>
          </div>
          
        </div>
      </GridContainer>
      <AdvantagesOfUsingSellers />
    </div>
  );
};
