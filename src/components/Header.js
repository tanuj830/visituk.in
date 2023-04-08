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
import { MdModeOfTravel, MdOutlineLocalOffer } from "react-icons/md";


const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* for mobile */}
      <div className="xl:container inline md:hidden ">
        <div className="  flex justify-between items-center gap-4 md:gap-44 shadow-sm py-1 px-3 md:px-1 ">
          <div className="flex items-center  py-4">
            <Link className="text-lg md:text-2xl text-themecol flex items-center justify-center gap-1" href="/home">
              <GiMountains /><h6 className="tracking-tighter">visituttrakhand.in</h6>
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
            <div className="relative w-full h-full py-10">
              <div className="absolute bg-white w-full">
                <Link className="flex items-center gap-1 my-3" href='/'> <h3 className="ml-8"><TbBrandBlogger /></h3><h3>Blogs</h3></Link>
                <Link className="flex items-center gap-1 my-3" href='/contact'> <h3 className="ml-8 text-xl"><AiOutlineContacts /></h3><h3>Contact Us</h3></Link>
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

      </div>

    </>
  );
};

export default Navbar;
