import Link from "next/link";
import React from "react";
import { BsAirplaneEngines } from "react-icons/bs";
// import SearchBar from "./SearchBar";
import { AiOutlineContacts } from "react-icons/ai";
import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsSearch } from "react-icons/bs";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrChannel} from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import { FaRegKeyboard} from "react-icons/fa";
import { TbBrandBlogger} from "react-icons/tb";
import axios from "axios";


const Navbar = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      {/* for mobile */}
      <div className=" inline md:hidden ">
        <div className=" container flex justify-between items-center gap-4 md:gap-44 shadow-sm py-1 ">
        <div className="flex items-center  py-4">
            <Link className="text-md md:text-2xl text-themecol flex items-center justify-center" href="/home">
              <BsAirplaneEngines /><span className="ml-2">ARTravells</span>
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
            {showMenu == true ?  (
              // <div className="flex mt-6 flex-col w-full ">
              // <div className="flex  items-center justify-start w-full">
              //     <div className="flex flex-col w-full scroll-0">
              //     <Link className="flex items-center gap-1" href='/'> <h3 className="ml-8"><TbBrandBlogger/></h3><h3>Blogs</h3></Link>                     
              //               <Link className="flex items-center gap-1" href='/contact'> <h3 className="ml-8 text-xl"><AiOutlineContacts/></h3><h3>Contact Us</h3></Link>  
              //     <hr />
              //     </div>
              // </div>

              // </div>
              <div className="relative w-full h-full py-10">
                  <div className="absolute bg-white w-full">
                  <Link className="flex items-center gap-1 my-3" href='/'> <h3 className="ml-8"><TbBrandBlogger/></h3><h3>Blogs</h3></Link>                     
             <Link className="flex items-center gap-1 my-3" href='/contact'> <h3 className="ml-8 text-xl"><AiOutlineContacts/></h3><h3>Contact Us</h3></Link>  
                  </div>
              </div>
            ): null}
          {/* </div> */}
        </div>
        {/* <hr /> */}
      </div>

      {/* forpc */}
      <div className=" bg-white  hidden md:inline tracking-widest ">
        <div className=" py-3 xl:container shadow-md container flex items-center justify-between w-100 ">
          <div className="flex items-center ">
            <Link className="text-3xl text-themecol flex items-center justify-center" href="/">
              <BsAirplaneEngines/><span className="ml-2">ARTravells</span>
            </Link>
          </div>
          <div className="flex items-center justify-center ">
                            {/* <Link className="flex items-center gap-1" href='/video/create'> <h3 className="ml-8"><AiOutlineVideoCameraAdd/></h3><h3>Create</h3></Link>                      */}
                            {/* <Link className="flex items-center gap-1" href='/'> <h3 className="ml-8"><GrChannel/></h3><h3>Your Channel</h3></Link>                      */}
                            <Link className="flex items-center gap-1" href='/'> <h3 className="ml-8"><TbBrandBlogger/></h3><h3>Blogs</h3></Link>                     
                            <Link className="flex items-center gap-1" href='/contact'> <h3 className="ml-8 text-xl"><AiOutlineContacts/></h3><h3>About Us</h3></Link>                     
                            <Link className="flex items-center gap-1" href='/contact'> <h3 className="ml-8 text-xl"><AiOutlineContacts/></h3><h3>Contact Us</h3></Link>                     
                  <hr />
                  </div>
          {/* <div className="">
            <ul className="flex items-center justify-between">
              <Link href='/video/create' className="text-2xl"><AiOutlineVideoCameraAdd/></Link>
              <li className="cursor-pointer text-2xl ml-7  hover:rounded-full p-3 duration-500 ease-in">
                <BsGithub />
              </li>
              <li></li>
              <li></li>
            </ul>
          </div> */}
          
        </div>
        
      </div>

    </>
  );
};

export default Navbar;
