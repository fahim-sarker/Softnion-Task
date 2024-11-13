import React from "react";
import Container from "./Container";
import Bannerimg from "../assets/bannerimage.png";
import Bannerimg1 from "../assets/bannerlogo.png";
import Bannerimg2 from "../assets/bannertoken.png";

const Banner = () => {
  return (
    <div className="bg-gradient lg:pt-[220px] lg:pb-[160px] lg:px-0 px-[30px] pt-28 pb-8 overflow-hidden">
      <Container>
        <div className="lg:flex justify-between">
          <div className="lg:w-[45%] w-full lg:pt-[104px] lg:pb-[99px] relative z-40">
            <h1 className="font-bebas font-bold lg:text-[120px] text-[44px] lg:leading-[120px] leading-[56px] text-[#FFFFFF] bg-text-gradient py-5 lg:w-[830px] w-[330px] lg:pr-0 pr-2 z-50">
              Taste the authentic Saudi cuisine
            </h1>
            <p className="font-roboto font-normal lg:text-[24px] text-[18px] lg:leading-8 leading-7 text-[#FFFFFF] lg:w-[559px] w-[330px] lg:pr-0 pr-2 lg:pt-[16px] pt-[10px] lg:pb-[38px] pb-8">
              Among the best Saudi chefs in the world, serving you something
              beyond flavor.
            </p>
            <button className="lg:w-[180px] w-[152px] lg:h-[56px] h-[48px] bg-[#FEBF00] font-roboto font-bold lg:text-[18px] text-[15px] uppercase text-[#0A1425] lg:mb-0 mb-12">
              Explore Menu
            </button>
          </div>
          <div className="lg:w-[55%] w-full relative z-30">
            <img
              src={Bannerimg}
              alt="Bannerimg"
              className="w-full max-h-[649px] object-cover"
            />
            <img
              src={Bannerimg1}
              alt="ban_img"
              className="absolute lg:-top-10 lg:-right-8 -top-6 -right-1"
            />
            <img
              src={Bannerimg2}
              alt="ban_img"
              className="absolute lg:bottom-0 lg:-right-12 right-4 bottom-4 bg-yellow-400 rounded-full lg:h-[120px] lg:w-[120px] h-[53px] w-[53px] lg:p-2 p-1"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
