import Link from "next/link";
import React from "react";
import { BsAirplaneEngines, BsFillCarFrontFill, BsTelegram } from "react-icons/bs";
// import SearchBar from "./SearchBar";
import { AiOutlineContacts, AiOutlineHome } from "react-icons/ai";
import { GiMountains } from "react-icons/gi";
import { BsGithub } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrChannel } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import { FaRegKeyboard } from "react-icons/fa";
import { TbBrandBlogger } from "react-icons/tb";
import axios from "axios";
import { MdCall, MdModeOfTravel, MdOutlineLocalOffer } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { FiPhoneCall} from "react-icons/fi";


const DarkNavbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showNumber, setShowNumber] = React.useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* for mobile */}
      <div className="xl:container text-black inline md:hidden ">
        <div className="  flex justify-between items-center gap-4 md:gap-44  py-1 px-3 md:px-1 ">
          <div className="flex items-center  py-4">
          <Link className="" href="/">
              <img className="w-32" src="https://firebasestorage.googleapis.com/v0/b/artravells.appspot.com/o/ezgif.com-crop.gif?alt=media&token=81690c70-3732-43a1-9fda-7ae87d3b2215" /></Link>
          </div>

          <div className="ml-2">
            {!showMenu ? (
              <button
                className="text-2xl mr-3 brightness-200"
                onClick={handleClick}
              >
                <RxHamburgerMenu />
              </button>
            ) : (
              <button
                className="text-2xl mr-3 brightness-200"
                onClick={handleClick}
              >
                <RxCross1 />
              </button>
            )}
          </div>
        </div>
        <div className="mb-2 md:container flex  items-center justify-between">

          {/* <div> */}
          {showMenu == true ? (
            <div className="relative w-full   py-1">
              <div className=" w-full">
                <Link className="flex items-center gap-2 mt-2 hover:text-green-800 brightness-200" href='/about'> <h3 className="ml-8 text-2xl"><AiOutlineContacts /></h3><h3 className="text-lg">About Us</h3></Link>
                <Link className="flex items-center gap-2 mt-2 hover:text-green-800 brightness-200" href='/#services'> <h3 className="ml-8 text-2xl"><BsFillCarFrontFill /></h3><h3 className="text-lg">Services</h3></Link>
                <Link className="flex items-center gap-2 mt-2 hover:text-green-800 brightness-200" href='/#plans'> <h3 className="ml-8 text-2xl"><MdModeOfTravel /></h3><h3 className="text-lg">Plans</h3></Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* forpc */}
      <div className="w-full   hidden md:inline justify-between text-black">
        <div className="py-4 px-10 border-b-2 flex items-center gap-x-8">
            <Link href="/contact" className="text-xs">Contact us</Link>
            <Link href="/contact" className="text-xs flex items-center  gap-x-1"><BsWhatsapp/> Start chat</Link>
            <Link href="/contact" className="text-xs flex items-center  gap-x-1"><FiPhoneCall/> Call us</Link>
        </div>
        <div className=" py-5   px-10 flex items-center ">
            <Link className="" href="/">
              <img className="w-48" src="https://firebasestorage.googleapis.com/v0/b/artravells.appspot.com/o/ezgif.com-crop.gif?alt=media&token=81690c70-3732-43a1-9fda-7ae87d3b2215" /></Link>

          <div className="flex items-center gap-x-10 justify-center  w-full ">
            <Link className=" font-medium hover:text-gray-500 tracking-wider title-font" href='/about'>About Us</Link>
            <Link className=" font-medium hover:text-gray-500 tracking-wider title-font" href='/#services'>Services</Link>
            <Link className=" hover:text-gray-500 tracking-wider title-font font-medium " href='/#plans'>Plan Your Trip</Link>
            <hr />
          </div>
        <div className="">
            <Link className="bgcol px-6 py-2 rounded-full text-sm w-full" href="/blog">Blogs</Link>
        </div>
        </div>
        <div className="fixed top-64 right-0  z-10 rounded-l-md bg-[rgba(0,0,0,0.3)] drop-shadow-md border">
          <ul className="p-1 font-bold text-lg">
            <a href="https:wa.link/prs44x" target="_blank" className="flex m-2 text-green-600 items-center">{showNumber && <span className="mr-2">818-181-3626</span>} <RiWhatsappFill onMouseEnter={() => setShowNumber(true)} onMouseLeave={() => setShowNumber(false)} size={30} /></a>
            <hr />
            <Link href="tel:818181326" className="flex m-2  items-center">{showNumber && <span className="mr-2">818-181-3626</span>}<MdCall onMouseEnter={() => setShowNumber(true)} onMouseLeave={() => setShowNumber(false)} size={30} /></Link>
            <hr />
            <Link href="tel:818181326" className="flex m-2 text-[#0088cc] items-center">{showNumber && <span className="mr-2">818-181-3626</span>}<BsTelegram onMouseEnter={() => setShowNumber(true)} onMouseLeave={() => setShowNumber(false)} size={30} /></Link>
          </ul>
        </div>
      </div>

    </>
  );
};

export default DarkNavbar;
