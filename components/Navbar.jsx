import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/vercel.svg";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

export default function Navbar() {
  const [isOpenNav, setIsOpenNav] = React.useState(false);

  const handleNav = () => {
    setIsOpenNav(!isOpenNav);
  };

  return (
    <div className="w-full h-20 shadow-xl z-[10] ">
      <div className="flex justify-between items-center w-fill h-full px-2 2xl:px-16">
        <Image src={logo} alt="logo" width="125" height="50" />
        <div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 font-bold uppercase py-3 hover:border-b ">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 font-bold uppercase py-3 hover:border-b ">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 font-bold uppercase py-3 hover:border-b ">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 font-bold uppercase py-3 hover:border-b ">
                Projects
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 font-bold uppercase py-3 hover:border-b ">
                Contact
              </li>
            </Link>
          </ul>

          {/* Button Menu */}
          <div onClick={handleNav}>
            <AiOutlineMenu size={25} />
          </div>

          <div
            className={
              isOpenNav
                ? "fixed left-0 top-0 w-full h-screen bg-black/50 easy-out duration-500"
                : ""
            }
          >
            <div
              className={
                isOpenNav
                  ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
                  : "fixed left-[-100%] top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              }
            >
              <div className="flex w-full item-center justify-between border-current ">
                <Image src={logo} width="85" height="35" />
                <div
                  onClick={handleNav}
                  className="rounded-full p-3 cursor-pointer border shadow-lg hover:bg-gray-200 active:bg-gray-300 border-none"
                >
                  <AiOutlineClose size={25} />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p className="font-bold w-[85%] md:w-[90%] py-4">
                  Lorem ipsum dolor sit amet consectetur
                </p>
              </div>

              <div>
                <ul>
                  <Link href="/">
                    <li className="font-bold uppercase py-3 hover:border-b ">
                      Home
                    </li>
                  </Link>
                  <Link href="/">
                    <li className="font-bold uppercase py-3 hover:border-b ">
                      About
                    </li>
                  </Link>
                  <Link href="/">
                    <li className="font-bold uppercase py-3 hover:border-b ">
                      Skills
                    </li>
                  </Link>
                  <Link href="/">
                    <li className="font-bold uppercase py-3 hover:border-b ">
                      Projects
                    </li>
                  </Link>
                  <Link href="/">
                    <li className="font-bold uppercase py-3 hover:border-b ">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="pt-40">
                <p className="font-bold uppercase text-[#5651e5]">
                  Let's Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <FaLinkedinIn />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <FaGithub />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <AiOutlineMail />
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300 ">
                    <BsFillPersonLinesFill />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
