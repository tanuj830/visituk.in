import Link from "next/link";
import React from "react";
import { BsAirplaneEngines, BsFillCarFrontFill } from "react-icons/bs";
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
            <Link className="text-xl md:text-2xl text-themecol flex items-center justify-center gap-1" href="/home">
            <img className="w-8 h-8 rounded-lg" src="https://res.cloudinary.com/dqfbod03i/image/upload/v1683104823/goal_1_y5bs8h.gif"/><h6 className="tracking-wider brightness-200">visituttrakhand.in</h6>
            </Link>
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
            <div className="relative w-full tracking-wider  py-1">
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
      <div className="w-full text-black tracking-wider hidden md:inline ">
        <div className=" py-5   px-10 flex items-center justify-between w-100 ">
          <div className="flex items-center ">
            <Link className="text-3xl text-themecol flex items-center justify-center gap-1" href="/">
            <img className="w-8 h-8 rounded-lg" src="https://res.cloudinary.com/dqfbod03i/image/upload/v1683104823/goal_1_y5bs8h.gif"/><h6 className="text-xl brightness-200">visituttrakhand.in</h6>
            </Link>
          </div>
          <div className="flex items-center justify-center ">
            <Link className="flex items-center gap-1 hover:text-green-800 brightness-200" href='/about'> <h3 className="ml-8 text-xl"><AiOutlineContacts /></h3><h3>About Us</h3></Link>
            <Link className="flex items-center gap-1 hover:text-green-800 brightness-200" href='/#services'> <h3 className="ml-8 text-xl"><BsFillCarFrontFill /></h3><h3>Services</h3></Link>
            <Link className="flex items-center gap-1 hover:text-green-800 brightness-200" href='/#plans'> <h3 className="ml-8 text-xl"><MdModeOfTravel /></h3><h3>Plans</h3></Link>
            <hr />
          </div>
        </div>
        <div className="fixed top-64 right-0  z-10 rounded-l-md bg-[rgba(0,0,0,0.3)] drop-shadow-md border">
          <ul className="p-1 font-bold text-lg">
            <a href="https:wa.link/prs44x" target="_blank" className="flex m-2 text-green-800 items-center">{showNumber && <span className="mr-2">818-181-3626</span>} <RiWhatsappFill onMouseEnter={() => setShowNumber(true)} onMouseLeave={() => setShowNumber(false)} size={30} /></a>
            <hr/>
            <Link href="tel:818181326" className="flex m-2  items-center">{showNumber && <span className="mr-2">818-181-3626</span>}<MdCall onMouseEnter={() => setShowNumber(true)} onMouseLeave={() => setShowNumber(false)} size={30} /></Link>
          </ul>
        </div>
      </div>

    </>
  );
};

export default DarkNavbar;
