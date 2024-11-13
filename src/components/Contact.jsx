import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div className="bg-contactback bg-cover bg-no-repeat lg:pt-[120px] lg:pb-[86px] py-8 lg:px-0 px-[30px]">
        <Container>
          <div className="lg:w-[635px]">
            <Flex className="gap-x-3 items-center">
              <div className="h-[10px] w-[10px] bg-[#BD1F17]"></div>
              <a
                href="#"
                className="font-bold font-roboto lg:text-[20px] text-[16px] leading-8 text-[#BD1F17]"
              >
                Book Now
              </a>
            </Flex>
            <h2 className="font-bebas lg:text-[62px] text-[40px] font-bold text-[#FFFFFF] lg:py-4 py-2">
              Book Your Table
            </h2>
            <p className="font-roboto font-normal text-[16px] text-[#F7F8F9] lg:w-[545px] leading-6">
              Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.
            </p>
            <form action="" className="pt-10 lg:pb-9">
              <input
                type="text"
                placeholder="Your Name *"
                className="py-3 px-4 outline-none bg-transparent border border-[#E5E7EB] lg:w-[302px] w-full font-roboto font-normal text-[14px] text-[#FFFFFF]"
              />
              <input
                type="text"
                placeholder="Your Email"
                className="py-3 px-4 outline-none bg-transparent border border-[#E5E7EB] lg:w-[302px] w-full font-roboto font-normal text-[14px] text-[#FFFFFF] lg:ml-[30px] lg:my-0 my-4"
              />
              <div className="lg:my-6 relative">
                <input
                  type="text"
                  placeholder="Reservation Date"
                  className="py-3 px-4 outline-none bg-transparent border border-[#E5E7EB] lg:w-[302px] w-full font-roboto font-normal text-[14px] text-[#FFFFFF]"
                />
                <FaRegCalendarAlt className="absolute lg:top-[50%] lg:-translate-y-[50%] lg:left-[44%] lg:-translate-x-[44%] top-0 right-[8px] text-[#FFFFFF] h-[15px] lg:my-0 my-4" />
                <input
                  type="text"
                  placeholder="Total People"
                  className="py-3 px-4 outline-none bg-transparent border border-[#E5E7EB] lg:w-[302px] w-full font-roboto font-normal text-[14px] text-[#FFFFFF] lg:ml-[30px] lg:my-0 my-4"
                />
                <IoMdArrowDropup className="absolute lg:top-[40%] lg:-translate-y-[40%] lg:right-[1%] lg:-translate-x-[1%] text-[#FFFFFF] w-[30px] h-[20px] top-[55%] right-0" />
                <IoMdArrowDropdown className="absolute lg:top-[65%] lg:-translate-y-[65%] lg:right-[1%] lg:-translate-x-[1%] text-[#FFFFFF] w-[30px] h-[20px] lg:my-0 my-4 top-[53%] right-0" />
              </div>
              <textarea
                name=""
                id=""
                placeholder="Message"
                className="pt-3 px-4 outline-none bg-transparent border border-[#E5E7EB] font-roboto font-normal text-[14px] text-[#FFFFFF] lg:w-[635px] w-full h-[140px]"
              />
              <button className="lg:w-[142px] w-[123px] lg:h-[56px] h-[48px] mt-8 bg-[#FEBF00] font-roboto font-bold lg:text-[18px] text-[16px] uppercase text-[#0A1425] leading-6">
                Book Now
              </button>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Contact;
