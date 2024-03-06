import { GridContainer } from "../../grid";
import logo  from '../../../../../public/logo.svg'
import arrow  from '../../../../../public/Vector(1).svg'
import buttomNavigationMobile  from '../../../../../public/Circle Menu.svg'
import Image from 'next/image'
import { HeaderLinksData } from "./utils/utils";
import { link } from "fs";
import { List } from "../generic-list/List";
import type {HeaderLinks} from'./utils/utils'
import { Buttom } from "../../Buttom/Buttom";

export const Header = () => {
  return (
    <header className="header relative z-2 w-full h-20  bg-[#130419] flex items-center ">
      <GridContainer className="lg:px-3 px-5">
        <div className="z-10 flex gap-3">
        <Image 
         src={buttomNavigationMobile}
         alt='buttom navigation mobile'
         className="lg:hidden flex"
        />
        <Image 
         src={logo}
         alt='Logotipo do site Monabele'
         className="w-[143px] h-[35px]"
        />
        </div>

      <List<HeaderLinks> items={HeaderLinksData} classeName="lg:flex hidden gap-7 justify-center ml-16 items-center">
       {({item}) => (
        <li key={item.route} className={`text-[12.5px] text-[#B0B0B0]  ${item.state && "bg-[#FFFFFF40] py-[6px] px-[0.70rem] rounded-md font-semibold  text-[#ffff]"}`}>
          <a href={item.route}>{item.label}</a>
        </li>
       )}
      </List>

        <div className="btns flex justify-center items-center gap-[10px]">
          <Buttom size="xs" className="bg-transparent text-slate-100 gap-1">
             <span className="text-[12px] f">EN</span>
             <Image
              src={arrow}
              alt="switch arrow"
             />
          </Buttom>
          <Buttom  className=" transition-all duration-300 bg-[#FFFFFF40] hover:bg-[#ffffff5e] text-slate-100 text-[12px]">
            Sign In 
          </Buttom>
          <Buttom className="transition-all duration-300 bg-[#FF2CDF] hover:bg-[#d330bb] text-slate-100 text-[12px]">
            Join us
          </Buttom>

        </div>
      </GridContainer>
    </header>
  );
};
