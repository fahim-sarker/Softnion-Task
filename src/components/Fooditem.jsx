import React, { useState } from "react";
import Container from "./Container";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import Burger from "../assets/burger.png";
import Pizza from "../assets/pizza.png";
import French from "../assets/french.png";
import Chiken from "../assets/chiken.png";
import Slider from "react-slick";
import Items from "../assets/items.png";

const Fooditem = () => {
  let [activeArrow, setActiveArrow] = useState(0);

  let handleNextClick = () => {
    setActiveArrow("next");
  };

  let handlePrevClick = () => {
    setActiveArrow("prev");
  };

  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`lg:w-[60px] lg:h-[60px] h-[40px] w-[40px] flex justify-center items-center rounded-full drop-shadow-xl cursor-pointer absolute lg:right-6 lg:-top-44 right-[30%] -bottom-[20%] ${activeArrow === "next"
            ? "bg-[#bd1f17] text-white"
            : "bg-[#FFFFFF] text-black"
          }`}
        onClick={() => {
          handleNextClick();
          onClick();
        }}
      >
        <MdArrowForwardIos />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className={`lg:w-[60px] lg:h-[60px] h-[40px] w-[40px] flex justify-center items-center rounded-full drop-shadow-xl cursor-pointer absolute lg:right-28 lg:-top-44 right-[50%] -bottom-[20%] ${activeArrow === "prev"
            ? "bg-[#bd1f17] text-white"
            : "bg-[#FFFFFF] text-black"
          }`}
        onClick={() => {
          handlePrevClick();
          onClick();
        }}
      >
        <MdOutlineArrowBackIos />
      </div>
    );
  }

  const settings = {
    dots: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="lg:py-[120px] pt-8 pb-20 lg:px-0 px-[30px] bg-[#fbf7f2] relative">
        <Container>
          <div className="flex gap-x-3 items-center">
            <div className="h-[10px] w-[10px] bg-[#BD1F17]"></div>
            <h3 className="font-bold font-roboto lg:text-[20px] text-[16px] leading-8 text-[#BD1F17]">
              Crispy, Every Bite Taste
            </h3>
          </div>
          <h2 className="font-bebas lg:text-[62px] text-[40px] font-bold text-[#181818] py-2">
            POPULAR FOOD ITEMS
          </h2>

          <div className="lg:pt-[60px] pt-[30px] lg:pb-0 pb-4">
            <Slider {...settings}>
              <div className="!w-[95%] bg-[#FFFFFF] py-8 px-8 h-[300px]">
                <img
                  src={Burger}
                  alt="Burger"
                  className="h-[120px] w-[120px] mx-auto pb-6"
                />
                <div className="w-[57px] bg-[#bd1f17] h-[4px] mx-auto"></div>
                <h3 className="font-bebas font-bold text-[24px] text-center text-[#0a1425] pt-6 leading-9">
                  vegetables burger
                </h3>
                <p className="font-roboto text-[16px] text-[#0a1425] font-normal leading-8 text-center">
                  Barbecue Italian cuisine pizza
                </p>
              </div>

              <div className="!w-[95%] bg-[#FFFFFF] py-8 px-8 h-[300px]">
                <img
                  src={Pizza}
                  alt="Pizza"
                  className="h-[120px] w-[120px] mx-auto pb-6"
                />
                <div className="w-[57px] bg-[#bd1f17] h-[4px] mx-auto"></div>
                <h3 className="font-bebas font-bold text-[24px] text-center text-[#0a1425] pt-6 leading-9">
                  Special Pizza
                </h3>
                <p className="font-roboto text-[16px] text-[#0a1425] font-normal leading-8 text-center">
                  Barbecue Italian cuisine pizza
                </p>
              </div>

              <div className="!w-[95%] bg-[#FFFFFF] py-8 px-8 h-[300px]">
                <img
                  src={French}
                  alt="French Fries"
                  className="h-[120px] w-[120px] mx-auto pb-6"
                />
                <div className="w-[57px] bg-[#bd1f17] h-[4px] mx-auto"></div>
                <h3 className="font-bebas font-bold text-[24px] text-center text-[#0a1425] pt-6 leading-9">
                  Special French Fries
                </h3>
                <p className="font-roboto text-[16px] text-[#0a1425] font-normal leading-8 text-center">
                  Barbecue Italian cuisine
                </p>
              </div>

              <div className="!w-[95%] bg-[#FFFFFF] py-8 px-8 h-[300px]">
                <img
                  src={Chiken}
                  alt="Chicken"
                  className="h-[120px] w-[120px] mx-auto pb-6"
                />
                <div className="w-[57px] bg-[#bd1f17] h-[4px] mx-auto"></div>
                <h3 className="font-bebas font-bold text-[24px] text-center text-[#0a1425] pt-6 leading-9">
                  Cuisine Chicken
                </h3>
                <p className="font-roboto text-[16px] text-[#0a1425] font-normal leading-8 text-center">
                  Japanese Cuisine Chicken
                </p>
              </div>
            </Slider>
          </div>
        </Container>
        <div className="absolute bottom-[15%] left-0 lg:block hidden">
          <img src={Items} alt="Items" className="w-[150px]" />
        </div>
      </div>
    </>
  );
};

export default Fooditem;
