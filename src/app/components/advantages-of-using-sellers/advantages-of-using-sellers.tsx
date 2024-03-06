import Image from "next/image";
import { GridContainer } from "../grid";
import { Buttom } from "../Buttom/Buttom";
import BoxOfCards from "@/../public/Exchanges card.svg";
import SallesCard from "@/../public/Salle card.svg";
import ButtomNavigationSlider from "@/../public/Slide controls.svg";
import { MarksData, marksProps } from "./utils/utils";
import { List } from "../leyout/generic-list/List";

export const AdvantagesOfUsingSellers = () => {
  return (
    <div className="h-screen w-full mb-[10rem] justify-center items-center px-44">
      <GridContainer>
        
        <div className="w-[24rem] h-screen flex  items-center">
          <div className=" flex flex-col  gap-[1.27rem]">
            <Buttom className="rounded-full border-[1px] w-[8rem] h-[2rem] border-[#E0E0E0] bg-slate-50">
              <span className="text-[#656666] text-[12px]">
                Sellers benefits
              </span>
            </Buttom>
            <h1 className="font-seny text-[38.5px] w-[28.125rem] leading-[46.5px] text-[#1E1E1E]">
              Find out more about the benefits of our salespeople
            </h1>
            <p className="text-[#656666] text-[12.5px] leading-[27px] w-[25rem]">
              At Monabele, we are redefining the way people access currency.
            </p>
            <List<marksProps>
              items={MarksData}
              classeName="flex flex-col gap-5"
            >
              {({ item }) => (
                <li key={item.content} className="flex gap-4">
                  <Image src={item.img} alt="img marks content" width={17} />
                  <p className="text-[13px] text-[#656666] font-normal">
                    {item.content}
                  </p>
                </li>
              )}
            </List>
          </div>
        </div>
        <div className="relative w-[22.5rem] h-screen flex  items-center">
          <div
            id="containerSlider"
            className="absolute flex z-10 w-[520px] overflow-hidden h-52 pl-[4rem] top-44 left-[-9rem]"
          >
            <Image
              src={SallesCard}
              alt="Salles Card"
             className="w-[22.3125rem] h-[13.8125rem] relative left-7"
            />
             <Image
              src={SallesCard}
              alt="Salles Card"
             className="w-[22.3125rem] h-[13.8125rem] "
            />
          </div>
          <Image
            src={BoxOfCards}
            alt="box of cards"
            className="w-[22.625rem] h-[22.875rem] "
          />
          <div className="absolute z-10 top-[27rem] left-36">
          <Image
            src={ButtomNavigationSlider}
            alt="Buttom Navigation in Slider"
           
          />
          </div>
        </div>
      </GridContainer>
    </div>
  );
};
