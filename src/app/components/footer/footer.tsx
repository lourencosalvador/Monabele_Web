import logo from "@/../../public/logo.svg";
import iconFacebook from "@/../../public/Vector(3).svg";
import iconInsta from "@/../../public/Instagram.svg";
import iconLinkedin from "@/../../public/LinkedIn.svg";
import Image from "next/image";
import { GridContainer } from "../grid";

export const Footer = () => {
  return (
    <div className="w-full h-[35.3125rem] bg-[#1E1E1E] pt-[8rem] gap-3 px-20">
      <GridContainer className="flex flex-col gap-16">
     <div className="flex gap-24">
     <div className="flex flex-col gap-6">
        <Image src={logo} alt="logo Monabele" />
        <p className="text-[11px] text-[#656666] w-[250px] leading-7">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div className="flex gap-2">
          <div className="w-[1.75rem] h-[1.75rem] bg-[#FFFFFF] flex justify-center items-center rounded-full">
            <Image src={iconFacebook} alt="icon Facebook" />
          </div>
          <div className="w-[1.75rem] h-[1.75rem] bg-[#FFFFFF] flex justify-center items-center rounded-full">
            <Image src={iconInsta} alt="icon Insta" />
          </div>
          <div className="w-[1.75rem] h-[1.75rem] bg-[#FFFFFF] flex justify-center items-center rounded-full">
            <Image src={iconLinkedin} alt="icon Linkedin" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-4 gap-14 grid-cols-2">
      <div className="flex flex-col gap-6 ">
        <h2 className="font-semibold text-[15px] text-[#ffff]">Sitemap</h2>
        <ul className="flex flex-col gap-6">
          <li className="text-[#656666] text-[12px]">Home</li>
          <li className="text-[#656666] text-[12px]">About Us</li>
          <li className="text-[#656666] text-[12px]">Our services</li>
          <li className="text-[#656666] text-[12px]">
            How the plataform works
          </li>
          <li className="text-[#656666] text-[12px]">Contacts</li>
        </ul>
      </div>

      <div className="flex flex-col gap-6 h-[240px]">
        <h2 className="font-semibold text-[15px] text-[#ffff]">Join Us</h2>
        <ul className="flex flex-col gap-6">
          <li className="text-[#656666] text-[12px]">Volunteer</li>
          <li className="text-[#656666] text-[12px]">
            Participate in mentoring
          </li>
          <li className="text-[#656666] text-[12px]">To be partner</li>
        </ul>
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="font-semibold text-[15px] text-[#ffff]">Contact Us</h2>
        <ul className="flex flex-col gap-6">
          <li className="text-[#656666] text-[12px]">support@monabele.co.ao</li>
          <li className="text-[#656666] text-[12px]">+244 924545665</li>
          <li className="text-[#656666] text-[12px]">Our services</li>
          <li className="text-[#656666] text-[12px]">
            How the plataform works
          </li>
          <li className="text-[#656666] text-[12px]">Contacts</li>
        </ul>
      </div>

      <div className="flex flex-col gap-6 h-[240px]">
        <h2 className="font-semibold text-[15px] text-[#ffff]">Terms</h2>
        <ul className="flex flex-col gap-6">
          <li className="text-[#656666] text-[12px]">Terms and conditions</li>
          <li className="text-[#656666] text-[12px]">Policies and privacity</li>
          <li className="text-[#656666] text-[12px]">Recognition</li>
        </ul>
      </div>
      </div>

     </div>
     

      <div className="w-full h-[3.625rem] flex justify-between items-center border-t-[1px] border-[#F0F0F01A]">
         <p className="text-[#656666] text-[13px]">© 2023 Monabele. All rights reserved</p>
         <ul className="flex gap-3">
            <li className="text-[#656666] text-[13px]">LinkedIn</li>
            <li className="text-[#656666] text-[13px]">Github</li>
         </ul>
      </div>
      </GridContainer>
    </div>
  );
};
