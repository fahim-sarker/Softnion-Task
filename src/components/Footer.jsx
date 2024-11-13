import React from "react";
import Container from "../components/Container";
import Flex from "../components/Flex";
import { IoMailOutline } from "react-icons/io5";
import { FaRegClock, FaPhoneVolume, FaSquareInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { FaSquareXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="lg:py-[120px] py-8 lg:px-0 px-[30px] bg-footerbg bg-cover bg-no-repeat relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[#000000] opacity-80 z-10"></div>
        
        <Container>
          <h2 className="font-bebas font-bold lg:text-[62px] text-[40px] text-[#FFFFFF] text-center relative z-20">
            We ready to have you the best dining experiences
          </h2>

          <div className="lg:flex justify-between pt-[48px] lg:pb-[120px] pb-[60px]">
            <div className="lg:w-[23%] w-full relative z-20">
              <FaRegClock className="text-yellow-400 w-[30px] h-[30px] mx-auto" />
              <h3 className="font-bebas font-bold text-[24px] text-[#FFFFFF] tracking-footerspace text-center pt-6 pb-3">
                Opening hours
              </h3>
              <p className="font-roboto font-normal text-[16px] text-[#f7f8f9] text-center leading-[25px]">
                Monday - Sunday
              </p>
              <h5 className="font-roboto font-normal text-[16px] text-[#f7f8f9] text-center leading-[25px]">
                9:00 AM to 11:30 PM
              </h5>
            </div>
          
            <div className="lg:w-[23%] w-full relative z-20">
              <FaPhoneVolume className="text-yellow-400 w-[30px] h-[30px] mx-auto" />
              <h3 className="font-bebas font-bold text-[24px] text-[#FFFFFF] tracking-footerspace text-center pt-6 pb-3">
                LET'S TALK
              </h3>
              <p className="font-roboto font-normal text-[16px] text-[#f7f8f9] text-center leading-[25px]">
                Phone: 1-800-222-4545
              </p>
              <h5 className="font-roboto font-normal text-[16px] text-[#f7f8f9] text-center leading-[25px]">
                Fax: 1-800-222-4545
              </h5>
            </div>
            <div className="lg:w-[23%] w-full relative z-20">
              <IoMailOutline className="text-yellow-400 w-[30px] h-[30px] mx-auto" />
              <h3 className="font-bebas font-bold text-[24px] text-[#FFFFFF] tracking-footerspace text-center pt-6 pb-3">
                BOOK A TABLE
              </h3>
              <p className="font-roboto font-normal text-[16px] text-[#f7f8f9] text-center leading-[25px]">
                Email: demo@website.com
              </p>
              <h5 className="font-roboto font-normal text-[16px] text-[#f7f8f9] text-center leading-[25px]">
                Support: support@website.com
              </h5>
            </div>
            <div className="lg:w-[23%] w-full relative z-20">
              <GrLocation className="text-yellow-400 w-[30px] h-[30px] mx-auto" />
              <h3 className="font-bebas font-bold text-[24px] text-[#FFFFFF] tracking-footerspace text-center pt-6 pb-3">
                Our Address
              </h3>
              <p className="font-roboto font-normal text-[16px] text-[#f7f8f9] text-center leading-[25px]">
                123 Stree New York City ,
              </p>
              <h5 className="font-roboto font-normal text-[16px] text-[#f7f8f9] text-center leading-[25px]">
                United States Of America.
              </h5>
            </div>
          </div>
          <div className="flex justify-center">
            <Flex className="gap-x-8">
              <div className="h-[53px] w-[53px] border-2 border-[#FFFFFF] rounded-full flex justify-center items-center z-20">
                <a href="#"><FaFacebook className="text-[#FFFFFF] w-5 h-5" /></a>
              </div>
              <div className="h-[53px] w-[53px] border-2 border-[#FFFFFF] rounded-full flex justify-center items-center z-20">
                <a href="#"><FaSquareXTwitter className="text-[#FFFFFF] w-5 h-5" /></a>
              </div>
              <div className="h-[53px] w-[53px] border-2 border-[#FFFFFF] rounded-full flex justify-center items-center z-20">
                <a href="#"><FaSquareInstagram className="text-[#FFFFFF] w-5 h-5" /></a>
              </div>
              <div className="h-[53px] w-[53px] border-2 border-[#FFFFFF] rounded-full flex justify-center items-center z-20">
                <a href="#"><FaLinkedin className="text-[#FFFFFF] w-5 h-5" /></a>
              </div>
            </Flex>
          </div>

          {/* Footer Text */}
          <p className="pt-[25px] font-roboto text-[21px] text-white text-center relative z-50">
            © 2023 All Rights Reserved
          </p>
        </Container>
      </div>
    </>
  );
};

export default Footer;
