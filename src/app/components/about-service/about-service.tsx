import { Card, CardFooter, CardHeader } from "../card/card";
import { GridContainer } from "../grid";
import Image from "next/image";
import cardExchangeIcon from "@/../public/card-exchange-01.svg";
import cardExchangeIcon1 from "@/../public/card-exchange-01(1).svg";
import cardExchangeIcon2 from "@/../public/card-exchange-01(2).svg";
import cardExchangeIcon3 from "@/../public/card-exchange-01(3).svg";
import cardExchangeIcon4 from "@/../public/card-exchange-01(4).svg";
import dashboardpc from "@/../public/Dashboard device mockup.svg";
import handDraw from "@/../public/Hand draw(1).svg";

export const AboutService = () => {
  return (
    <>
      <div className="h-screen w-full  justify-center items-center px-16 mb-[15rem]">
        <GridContainer>
          
          <div className="flex">
            <div>
              <Card>
                <CardHeader
                  image={cardExchangeIcon1}
                  text="Service information"
                  className="p-2 bg-[#FF2CDF2E] rounded-[5px] w-[40px] flex justify-center items-center"
                  classNameImage="w-[20px] h-[20px]"
                  classHome="flex flex-col"
                />
                <CardFooter
                  descripition="At Monabele, we understand that the world of 
                currencies is vast and diverse. Our platform."
                  className="pl-0"
                  classNameDescripition="w-[240px]"
                />
              </Card>
              <Card>
                <CardHeader
                  image={cardExchangeIcon3}
                  text="Service information"
                  className="p-2 bg-[#48D0752E] rounded-[5px] w-[40px] flex justify-center items-center"
                  classNameImage="w-[20px] h-[20px]"
                  classHome="flex flex-col"
                />
                <CardFooter
                  descripition="At Monabele, we understand that the world of 
                currencies is vast and diverse. Our platform."
                  className="pl-0"
                  classNameDescripition="w-[240px]"
                  classNameViews="text-[#48D075]"
                />
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader
                  image={cardExchangeIcon2}
                  text="Service information"
                  className="p-2 bg-[#FFBD002E] rounded-[5px] w-[40px] flex justify-center items-center"
                  classNameImage="w-[20px] h-[20px]"
                  classHome="flex flex-col"
                />
                <CardFooter
                  descripition="At Monabele, we understand that the world of
                 currencies is vast and diverse. Our platform."
                  className="pl-0"
                  classNameDescripition="w-[240px]"
                  classNameViews="text-[#FFBD00]"
                />
              </Card>
              <Card>
                <CardHeader
                  image={cardExchangeIcon4}
                  text="Service information"
                  className="p-2 bg-[#1E1E1E2E] rounded-[5px] w-[40px] flex justify-center items-center"
                  classNameImage="w-[20px] h-[20px]"
                  classHome="flex flex-col"
                />
                <CardFooter
                  descripition="At Monabele, we understand that
                 the world of currencies is vast and diverse. Our platform."
                  className="pl-0"
                  classNameDescripition="w-[240px]"
                  classNameViews="text-[#1E1E1E]"
                />
              </Card>
            </div>
          </div>

          <div className="relative w-[40.0625rem] h-[30.4375rem] bg-[#FFBD001F] left-[5rem]">
            <Image
              src={handDraw}
              alt="dashboard pc"
              className="absolute top-[-6.8rem] left-40"
            />
            <Image
              src={dashboardpc}
              alt="dashboard pc"
              className="absolute top-32"
              width={800}
            />
          </div>
        </GridContainer>
      </div>
    </>
  );
};
