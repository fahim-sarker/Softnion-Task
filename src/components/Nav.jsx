import React, { useEffect, useRef, useState } from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import Logo from "../assets/logo.png";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {


  let [show, setShow] = useState(false);
  let barref = useRef ();

  useEffect(() => {
    document.addEventListener("click",(e) => {
      if(barref.current.contains(e.target)) {
        setShow(!show)
      }else {
        setShow(false)
      }
    })
  },[show])



  return (
    <>
      <div className="bg-gradient lg:py-8 py-6 fixed w-[100%] z-50 lg:px-0 px-[30px]">
        <Container>
          <Flex className="justify-between items-center">
            <div className="w-[15%]">
              <Flex className="gap-x-2 items-center">
                <img src={Logo} alt="Logo" />
                <h2 className="font-popins font-semibold text-[28.44px] text-[#FFFFFF]">
                  Restaurant
                </h2>
              </Flex>
            </div>
            <div className="w-[55%] flex">
              <ul className={`lg:flex lg:flex-row flex flex-col gap-y-6 gap-x-10 px-4 pt-10 lg:pt-0 text-[#FFFFFF99] text-lg font-normal lg:static fixed duration-700 ${show == true ? "bg-[rgb(38,38,38)] top-0 left-0 w-1/2 h-full py-2" : "top-0 left-[-250px] h-full"}`}>
              <li className='flex justify-between items-center font-popins font-semibold text-[16.44px] text-[#FFFFFF] border-b-2 border-white lg:hidden'>Restaurant <RxCross2 className='cursor-pointer w-[24px] h-[24px]' /></li>
                <li className="font-raleway font-medium text-[15px] text-[#FFFFFF] cursor-pointer">
                  Home
                </li>
                <li className="font-raleway font-medium text-[15px] text-[#FFFFFF] cursor-pointer">
                  About
                </li>
                <li className="font-raleway font-medium text-[15px] text-[#FFFFFF] cursor-pointer">
                  Portfolio
                </li>
                <li className="font-raleway font-medium text-[15px] text-[#FFFFFF] cursor-pointer">
                  Clients
                </li>
                <li className="font-raleway font-medium text-[15px] text-[#FFFFFF] cursor-pointer">
                  Blog
                </li>
                <li className="font-raleway font-medium text-[15px] text-[#FFFFFF] cursor-pointer">
                  Contact
                </li>
              </ul>
            </div>
            <div className="w-[20%] flex justify-end">
              <button className="w-[157px] h-[44px] bg-[#FEBF00] font-roboto font-bold text-[16px] uppercase text-[#0A1425] leading-6 lg:block hidden">
                Book a table
              </button>
            </div>
            <div
              className="lg:hidden cursor-pointer text-white text-4xl"
              ref={barref}
            >
              <FaBars className="w-[24px] h-[24px]"/>
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Nav;
