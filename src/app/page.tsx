"use client";
import Image from "next/image";
import bgPattern from "../../public/Background-pattern.png";
import Ellipse1 from "../../public/Ellipse 1(2).png";
import Ellipse2 from "../../public/Ellipse 2(4).png";
import logo1 from "../../public/Logo(1).svg";
import logo2 from "../../public/Logo(2).svg";
import logo3 from "../../public/Logo(3).svg";
import logo4 from "../../public/Logo 2.svg";
import logo5 from "../../public/Logo 3.svg";
import capademo from "../../public/Rectangle 57.svg";
import EclipseIphone from "../../public/Eclipse mobille.svg";
import IphoneEclipse from "../../public/Mobile mockup home(1).svg";
import search from "../../public/search-list-01.svg";
import flashIcon from "../../public/flash.svg";
import play from "../../public/Play(1).svg";
import cardExchangeIcon from "../../public/card-exchange-01.svg";
import cardExchangeIcon1 from "../../public/card-exchange-01(1).svg";
import cardExchangeIcon2 from "../../public/card-exchange-01(2).svg";
import cardExchangeIcon3 from "../../public/card-exchange-01(3).svg";
import cardExchangeIcon4 from "../../public/card-exchange-01(4).svg";
import buttomApple from "../../public/appstore.svg";
import iphone1 from "../../public/Mobile mockup exchange.png";
import iphone2 from "../../public/Mobile mockup home.svg";
import buttomGoogleStorage from "../../public/googleplay.svg";
import { Header } from "./components/leyout/Header/Header";
import { GridContainer } from "./components/grid";
import { Buttom } from "./components/Buttom/Buttom";
import { Card, CardFooter, CardHeader } from "./components/card/card";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { BenefitsOfUse } from "./components/benefits-of-use/benefits-of-use";

export default function Home() {
  const [showPlayer, setShowPlayer] = useState(true);

  const handleButtonClick = () => {
    setShowPlayer(false);
  };
  return (
    <div>
      <main className="relative overflow-hidden">
        <Header />
      
        <div>
          <div>
            <Image
              src={Ellipse1}
              alt="bg Pattern..."
              className="absolute top-[-10px] z-1 left-[-40px]"
            />
            <div>
              <Image
                src={Ellipse2}
                alt="bg Pattern..."
                className="absolute top-[405px] z-1 right-0"
              />
            </div>
          </div>
          <Image
            src={bgPattern}
            alt="bg Pattern..."
            className="absolute w-screen z-[-1] h-[61.75rem] bg-[#130419]"
          />
        </div>

        <GridContainer>
          <div className="flex justify-between px-[3.1rem] w-full h-[637.47px]">
            <aside className="w-auto h-auto pt-36 flex flex-col gap-6">
              <Buttom className="w-[15.825rem] z-10 bg-[#250E47]  rounded-full border-[1px] border-[#E0E0E0]">
                <span className="text-slate-100 text-[11.5px] font-medium">
                  {" "}
                  I wonder if you already knew how? 🤔
                </span>
              </Buttom>
              <h1 className="font-seny text-[3.35rem] w-[35rem] leading-[55px]   text-[#ffff]">
                All in a simplified currency exchange application.
              </h1>
              <p className="text-[0.775rem] mb-2 w-[26rem] leading-[22px] text-[#B0B0B0] ">
                Embrace the future and enjoy a new, easier way to exchange money
                in comfort and at leisure wherever you are.
              </p>
              <div className="flex gap-4">
                <Image
                  src={buttomGoogleStorage}
                  alt="buttom in apple story"
                  width={160}
                />
                <Image src={buttomApple} alt="buttom in apple" width={160} />
              </div>
            </aside>
            <main className="relative w-auto h-auto pr-[11.5rem] pt-[4rem]">
              <Image
                src={iphone2}
                alt="buttom in apple story"
                objectFit="cover"
                width={280}
                height={280}
              />
              <Image
                src={iphone1}
                alt="buttom in apple story"
                objectFit="cover"
                className="absolute top-[100px] left-[180px]"
                width={290}
                height={300}
              />
            </main>
          </div>
        </GridContainer>

        <GridContainer>
          <div className="p-12 mt-[100px] w-screen flex justify-between items-center ">
            <div className=" flex ">
              <h2 className="text-[#B0B0B0] w-[220px]">
                Companies and partners who believe in our product
              </h2>
            </div>

            <div className="flex gap-10 ml-[95px]">
              <Image src={logo1} alt="logo teste demo" className="" />
              <Image src={logo4} alt="logo teste demo" />
              <Image src={logo5} alt="logo teste demo" />
              <Image src={logo2} alt="logo teste demo" />

              <Image src={logo3} alt="logo teste demo" />
            </div>
          </div>
        </GridContainer>
      </main>
      <section className="z-10 mb-[500px] w-screen h-screen bg-[#FFFFFF]">
        <div className="w-full h-auto   flex flex-col gap-4 mt-[7.8rem]  items-center">
          <Buttom className="rounded-full text-[#656666] text-[13px] font-medium border-[1px] border-[#E0E0E0]">
            Now you're ready to know
          </Buttom>
          <h1 className="font-seny text-[38.5px] w-[42.125rem] text-center leading-[46.5px] text-[#1E1E1E]">
            Find out a little more about who we are and our product vision.
          </h1>
          <p className="text-[#656666] text-[12.5px] text-center leading-[27px] w-[48%]">
            At Monabele, we are redefining the way people access currency
            exchange opportunities. With a unique vision and an unwavering
            commitment to innovation, we are here to make
          </p>
        </div>

        <div className="w-full h-80  flex flex-wrap justify-center items-center">
          <Card>
            <CardHeader image={cardExchangeIcon} text="Currency Diversity" />
            <CardFooter
              descripition="At Monabele, we understand that the 
            world of currencies is vast and diverse. Our platform."
            />
          </Card>
          <Card>
            <CardHeader image={flashIcon} text="Fast and Secure Exchanges" />
            <CardFooter
              descripition="Our number one priority 
              is to offer an efficient, secure and streamlined exchange experience.."
            />
          </Card>

          <Card>
            <CardHeader image={search} text="Quickly Find Sellers or Buyers" />
            <CardFooter
              descripition="Our platform allows you to quickly find sellers 
              or buyers,
               saving precious time and taking"
            />
          </Card>
        </div>

        <div className="w-full  h-auto  flex justify-center items-center">
          <div
            className={twMerge(
              "relative transition-all duration-150 overflow-hidden   w-[67rem] h-[32.5rem]  rounded-3xl",
              showPlayer ? "" : "border-[3px] border-[#FF2CDF]"
            )}
          >
            <Image
              src={capademo}
              alt="buttom play"
              className={`transition-all duration-150 ${
                showPlayer ? "flex" : "hidden"
              }`}
            />
            <div
              className={`w-screen  h-screen bg-[#0B0B0C] ${
                showPlayer ? "hidden" : "flex"
              }`}
            >
              {!showPlayer ? (
                <video
                  controls
                  loop
                  autoPlay 
                  className="w-auto h-auto ml-[-1rem]"
                  src={"/video.mp4"}
                ></video>
              ) : null}
            </div>
            <div className="absolute top-[12.2rem] left-[31.5rem]">
              <Image
                src={play}
                alt="buttom play"
                className={`hover:cursor-pointer flex  ${
                  showPlayer ? "flex" : "hidden"
                }`}
                onClick={handleButtonClick}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full h-full bg-[#fff]">
        <div className="w-full h-auto   flex flex-col gap-4 mt-[7.8rem] mb-[4.8rem]  items-center">
          <Buttom className="rounded-full text-[#656666] text-[13px] font-medium border-[1px] border-[#E0E0E0]">
            Learn more about the platform
          </Buttom>
          <h1 className="font-seny text-[38.5px] w-[40%] text-center leading-[46.5px] text-[#1E1E1E]">
            Learn more about how our application works
          </h1>
          <p className="text-[#656666] text-[12.5px] text-center leading-[27px] w-[42%]">
            At Monabele, we are redefining the way people access currency
            exchange opportunities. With a unique vision and an unwavering
            commitment to innovation, we are here to make
          </p>
        </div>
        <GridContainer>
          <div className="pladh w-auto pt-16 pl-12  flex flex-col gap-16 h-screen">
            <Card>
              <CardHeader
                image={cardExchangeIcon1}
                text="Currency Diversity"
                className="p-2 bg-[#FF2CDF2E] rounded-md w-[40px] flex justify-center items-center"
                classNameImage="w-[20px] h-[20px]"
                classHome="flex flex-col"
              />
              <CardFooter
                descripition="At Monabele, we understand that the 
            world of currencies is vast and diverse. Our platform."
                className="pl-0"
              />
            </Card>
            <Card>
              <CardHeader
                image={cardExchangeIcon3}
                text="Currency Diversity"
                className="p-2 bg-[#48D0752E] rounded-md w-[40px] flex justify-center items-center"
                classNameImage="w-[20px] h-[20px]"
                classHome="flex flex-col"
              />
              <CardFooter
                descripition="At Monabele, we understand that the 
            world of currencies is vast and diverse. Our platform."
                className="pl-0"
              />
            </Card>
          </div>
          <div className="relativ lg:flex hidden w-auto justify-center items-center h-screen ">
            <Image
              src={EclipseIphone}
              alt="demo"
              className="w-[30rem] transition-all duration-150"
              height={800}
            />
            <Image
              src={IphoneEclipse}
              alt="demo"
              className="absolute transition-all duration-150"
              width={285}
              
            />
          </div>

          <div className="w-auto h-screen pt-16 pr-12  flex flex-col gap-16">
            <Card>
              <CardHeader
                image={cardExchangeIcon2}
                text="Currency Diversity"
                className="p-2 bg-[#FFBD002E] rounded-md w-[40px] flex justify-center items-center"
                classNameImage="w-[20px] h-[20px]"
                classHome="flex flex-col"
              />
              <CardFooter
                descripition="At Monabele, we understand that the 
            world of currencies is vast and diverse. Our platform."
                className="pl-0"
              />
            </Card>
            <Card>
              <CardHeader
                image={cardExchangeIcon4}
                text="Currency Diversity"
                className="p-2 bg-[#1E1E1E2E] rounded-md w-[40px] flex justify-center items-center"
                classNameImage="w-[20px] h-[20px]"
                classHome="flex flex-col"
              />
              <CardFooter
                descripition="At Monabele, we understand that the 
            world of currencies is vast and diverse. Our platform."
                className="pl-0"
              />
            </Card>
          </div>
        </GridContainer>
        <div>
         <BenefitsOfUse />
        </div>
      </section>
    </div>
  );
}
