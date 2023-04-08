import Link from "next/link";
import React from "react";
import { BsAirplaneEngines, BsFillCarFrontFill } from "react-icons/bs";
// import SearchBar from "./SearchBar";
import { AiOutlineContacts } from "react-icons/ai";
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


const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [showNumber,setShowNumber]=React.useState(false);
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* for mobile */}
      <div className="xl:container inline md:hidden ">
        <div className="  flex justify-between items-center gap-4 md:gap-44 shadow-sm py-1 px-3 md:px-1 ">
          <div className="flex items-center  py-4">
            <Link className="text-xl md:text-2xl text-themecol flex items-center justify-center gap-1" href="/home">
              <GiMountains /><h6 className="tracking-wider">visituttrakhand.in</h6>
            </Link>
          </div>

          <div className="ml-2">
            {!showMenu ? (
              <button
                className="text-2xl mr-3 "
                onClick={handleClick}
              >
                <RxHamburgerMenu />
              </button>
            ) : (
              <button
                className="text-2xl mr-3 "
                onClick={handleClick}
              >
                <RxCross1 />
              </button>
            )}
          </div>
        </div>
        <div className="mb-2 md:container flex items-center justify-between">

          {/* <div> */}
          {showMenu == true ? (
            <div className="relative w-full tracking-wider  py-1">
              <div className="sticky bg-white w-full">
              <Link className="flex items-center gap-2 mt-2 hover:text-red-600" href='#about-us'> <h3 className="ml-8 text-2xl"><AiOutlineContacts /></h3><h3 className="text-lg">About Us</h3></Link>
            <Link className="flex items-center gap-2 mt-2 hover:text-red-600" href='#services'> <h3 className="ml-8 text-2xl"><BsFillCarFrontFill /></h3><h3 className="text-lg">Services</h3></Link>
            <Link className="flex items-center gap-2 mt-2 hover:text-red-600" href='#plans'> <h3 className="ml-8 text-2xl"><MdModeOfTravel /></h3><h3 className="text-lg">Plans</h3></Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* forpc */}
      <div className="w-full bg-white  hidden md:inline tracking-widest ">
        <div className=" py-5  shadow-md px-10 flex items-center justify-between w-100 ">
          <div className="flex items-center ">
            <Link className="text-3xl text-themecol flex items-center justify-center gap-1" href="/">
              <GiMountains /><h6 className="tracking-tighter">visituttrakhand.in</h6>
            </Link>
          </div>
          <div className="flex items-center justify-center ">
            <Link className="flex items-center gap-1 hover:text-red-600" href='#about-us'> <h3 className="ml-8 text-xl"><AiOutlineContacts /></h3><h3>About Us</h3></Link>
            <Link className="flex items-center gap-1 hover:text-red-600" href='#services'> <h3 className="ml-8 text-xl"><BsFillCarFrontFill /></h3><h3>Services</h3></Link>
            <Link className="flex items-center gap-1 hover:text-red-600" href='#plans'> <h3 className="ml-8 text-xl"><MdModeOfTravel /></h3><h3>Plans</h3></Link>
            <hr />
          </div>
        </div>
        <div className="fixed top-64 right-0  z-10 rounded-l-md drop-shadow-md bg-gray-100">
          <ul className="p-1 font-bold text-lg">
            <li className="flex m-2  items-center">{showNumber && <span className="mr-2">818-181-3626</span>} <RiWhatsappFill onMouseEnter={()=>setShowNumber(true)} onMouseLeave={()=>setShowNumber(false)} size={30} /></li>
            <li className="flex m-2  items-center">{showNumber && <span className="mr-2">818-181-3626</span>}<MdCall onMouseEnter={()=>setShowNumber(true)} onMouseLeave={()=>setShowNumber(false)} size={30} /></li>
          </ul>
        </div>
      </div>

    </>
  );
};

export default Navbar;
