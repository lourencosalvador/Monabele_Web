import { ReactNode } from "react";
import Image from "next/image";
import arrow from "../../../../public/Vector(2).svg";
import { twMerge } from "tailwind-merge";

interface CardProps {
  children: ReactNode;
  className?: string,

}

interface HeaderProps {
  image: string;
  text: ReactNode;
  className?: string
  classNameImage?: string,
  classHome?: string
}

interface FooterProps {
  descripition: ReactNode;
  className?: string,
  classNameDescripition?: string,
  classNameViews?: string
}

export const Card = ({ children, className}: CardProps) => {
  return <div className={twMerge("flex flex-col gap-2 p-[1.22rem] rounded-md  hover:cursor-pointer transition-all duration-150", className)}>{children}</div>;
};

export const CardHeader = ({ image, text, className, classNameImage, classHome, }: HeaderProps) => {
  return (
    <div className={twMerge("flex gap-3", classHome)}>
      <div className={className}>
      <Image src={image} alt="icon in card"  className={classNameImage}/>
      </div>
      <h1 className="font-seny text-[19px] text-[#1E1E1E]">{text}</h1>
    </div>
  );
};

export const CardFooter = ({ descripition, className, classNameDescripition, classNameViews }: FooterProps) => {
  return (
    <div className={twMerge("flex flex-col gap-2 pl-11 ", className)}>
      <p className={twMerge("text-[#656666] text-[12px] w-[280px] leading-[30px]", classNameDescripition)}>{descripition}</p>
      <div className="flex gap-3">
        <p className={twMerge("text-[#FF2CDF] text-[12px] ", classNameViews)}>View more</p>
        <Image src={arrow} alt="arrow in card" />
      </div>
    </div>
  );
};
