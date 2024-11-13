import React, { useState } from "react";
import Container from "./Container";
import Flex from "./Flex";
import { MdArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";
import Texti from "../assets/testi.png";
import Text1 from "../assets/test1.png";
import Text2 from "../assets/test2.png";
import Text from "../assets/test.svg";
import Slider from "react-slick";

const Testimonial = () => {
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
        className={`lg:w-[60px] lg:h-[60px] h-[40px] w-[40px] flex justify-center items-center rounded-full drop-shadow-xl cursor-pointer absolute lg:right-6 lg:-top-44 right-[30%] -bottom-[10%] ${
          activeArrow === "next"
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
        className={`lg:w-[60px] lg:h-[60px] h-[40px] w-[40px] flex justify-center items-center rounded-full drop-shadow-xl cursor-pointer absolute lg:right-28 lg:-top-44 right-[50%] -bottom-[10%] ${
          activeArrow === "prev"
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
    speed: 1500,
    autoplaySpeed: 3000,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    cssEase: "ease-in-out",
  };

  return (
    <div className="lg:py-[128px] pt-8 pb-24 lg:px-0 px-[30px] relative">
      <Container>
        <Flex className="justify-between items-center">
          <div>
            <div className="flex gap-x-3 items-center">
              <div className="h-[10px] w-[10px] bg-[#BD1F17]"></div>
              <h3 className="font-bold font-roboto lg:text-[20px] text-[16px] leading-8 text-[#BD1F17]">
                Crispy, Every Bite Taste
              </h3>
            </div>
            <h2 className="font-bebas lg:text-[62px] text-[40px] font-bold text-[#181818] lg:py-4 py-2">
              What Some of my Customers Say
            </h2>
          </div>
        </Flex>
        <Slider {...settings}>
          <div className="relative">
            <Flex className="lg:flex-row flex-col lg:mt-[60px] mt-[30px]">
              <div className="w-full lg:w-3/5 lg:order-last order-first">
                <iframe
                  src="https://www.youtube.com/embed/N5_J5PEBMRQ?si=_CjG_16DDFp6gPL1"
                  className="w-full lg:h-[555px] h-[240px]"
                  title="YouTube Video"
                ></iframe>
              </div>
              <div className="w-full lg:w-2/5 bg-[#febf00] lg:py-[71px] lg:px-[85px] px-[25px] py-[25px] lg:h-[555px]">
                <span className="font-raleway font-bold text-[50px] absolute top-[20%] left-[4%]">
                  “
                </span>
                <p className="font-roboto lg:text-[20px] text-[18px] font-normal text-[#0a1524] leading-8">
                  You can't go wrong with Chicken Mandi, I had it twice. The
                  chicken was cooked perfectly, juicy & soft (usually mandi
                  chicken is a bit dry). I would definitely recommend it.
                </p>
                <Flex className="justify-between items-center lg:mt-[164px] mt-10">
                  <div className="w-[85%]">
                    <h4 className="font-bebas font-bold text-[18px] text-[#0a1425]">
                      Khalid Al Dawsry
                    </h4>
                    <p className="font-roboto text-[14px] font-normal text-[#333333] pt-[3px] pb-2">
                      Jeddah, Saudi
                    </p>
                  </div>
                  <div className="w-[15%]">
                    <img src={Texti} alt="Texti" />
                  </div>
                </Flex>
                <Flex className="justify-between items-center lg:pt-[18px] pt-4">
                  <div className="w-[85%] bg-[#0a1425] h-[2px]"></div>
                  <div className="w-[15%] bg-[#bd1f17] h-[4px]"></div>
                </Flex>
              </div>
              <div className="absolute lg:bottom-[10%] bottom-0 left-0">
                <img src={Text} alt="Text" className="w-[24px] lg:w-[39px]"/>
              </div>
            </Flex>
          </div>
          <div className="relative">
            <Flex className="lg:flex-row flex-col lg:mt-[60px] mt-[30px]">
              <div className="w-full lg:w-3/5 lg:order-last order-first">
                <iframe
                  src="https://www.youtube.com/embed/N5_J5PEBMRQ?si=_CjG_16DDFp6gPL1"
                  className="w-full lg:h-[555px] h-[240px]"
                  title="YouTube Video"
                ></iframe>
              </div>
              <div className="w-full lg:w-2/5 bg-[#febf00] lg:py-[71px] lg:px-[85px] px-[25px] py-[25px] lg:h-[555px] ">
                <span className="font-raleway font-bold text-[50px] absolute top-[20%] left-[4%]">
                  “
                </span>
                <p className="font-roboto lg:text-[20px] text-[18px] font-normal text-[#0a1524] leading-8">
                  You can't go wrong with Chicken Mandi, I had it twice. The
                  chicken was cooked perfectly, juicy & soft (usually mandi
                  chicken is a bit dry). I would definitely recommend it.
                </p>
                <Flex className="justify-between items-center lg:mt-[164px] mt-10">
                  <div className="w-[85%]">
                    <h4 className="font-bebas font-bold text-[18px] text-[#0a1425]">
                      Khalid Al Dawsry
                    </h4>
                    <p className="font-roboto text-[14px] font-normal text-[#333333] pt-[3px] pb-2">
                      Jeddah, Saudi
                    </p>
                  </div>
                  <div className="w-[15%]">
                    <img src={Texti} alt="Texti" />
                  </div>
                </Flex>
                <Flex className="justify-between items-center lg:pt-[18px] pt-4">
                  <div className="w-[85%] bg-[#0a1425] h-[2px]"></div>
                  <div className="w-[15%] bg-[#bd1f17] h-[4px]"></div>
                </Flex>
              </div>
              <div className="absolute lg:bottom-[10%] bottom-0  left-0">
                <img src={Text} alt="Text" className="w-[24px] lg:w-[39px]"/>
              </div>
            </Flex>
          </div>
        </Slider>
      </Container>
      <div>
        <img
          src={Text1}
          alt=""
          className="absolute bottom-[59%] left-0 w-[100px] lg:block hidden"
        />
        <img
          src={Text2}
          alt=""
          className="absolute bottom-[25%] right-0 w-[120px] lg:block hidden"
        />
      </div>
    </div>
  );
};

export default Testimonial;
