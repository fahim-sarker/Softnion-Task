import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { FaCodepen } from "react-icons/fa6";
import { FaAward } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import Outer from "../assets/aboutouter.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { MdPhoneInTalk } from "react-icons/md";

const About = () => {
  return (
    <>
      <div className="lg:py-[120px] py-8 lg:px-0 px-[30px] relative">
        <Container>
          <div className="lg:flex justify-between">
            <div className="lg:w-[45%] w-full bg-aboutback lg:h-[460px] h-[246px] bg-center bg-cover bg-no-repeat lg:pt-[30px] pt-4 lg:pl-6 pl-3">
              <div className="lg:w-[240px] w-[148px] lg:h-[136px] h-[73px] bg-[#FFFFFF] rounded-[20px] lg:pt-[22px] pt-[12px] lg:pl-[22px] pl-[11px] lg:pb-5 pr-1 shadow-shadowabout">
                <Flex className="gap-x-[10px] items-center">
                  <div className="bg-[#FFFFFF] lg:h-[94px] lg:w-[94px] w-[53px] h-[53px] rounded-full flex items-center justify-center lg:border-8 border-4 border-[#FEBF00] relative after:absolute after:content-[''] lg:after:top-0 lg:after:left-0 after:top-0 after:left-0 lg:after:h-[17px] lg:after:w-[17px] after:h-[9px] after:w-[9px] after:bg-[#FEBF00] after:rounded-full">
                    <h4 className="lg:text-[26px] text-[13px] font-sans font-bold text-[#181818]">
                      50+
                    </h4>
                  </div>
                  <h3 className="font-sans font-semibold lg:text-[16px] text-[8px] text-[#181818] lg:w-[93px]">
                    Market Experiences
                  </h3>
                </Flex>
              </div>
            </div>
            <div className="lg:w-[50%] w-full lg:mt-0 mt-[32px]">
              <Tabs>
                <TabList className="flex gap-x-4 border-b-2 border-[#b52b1d]">
                  <Tab
                    className="px-4 py-[6px] flex justify-center items-center cursor-pointer font-roboto font-medium text-[14px] text-[#181818] !outline-none"
                    selectedClassName="bg-[#b52b1d] text-white"
                  >
                    About
                  </Tab>
                  <Tab
                    className="px-4 py-[6px] flex justify-center items-center cursor-pointer font-roboto font-medium text-[14px] text-[#181818] !outline-none"
                    selectedClassName="bg-[#b52b1d] text-white"
                  >
                    Experience
                  </Tab>
                  <Tab
                    className="px-4 py-[6px] flex justify-center items-center cursor-pointer font-roboto font-medium text-[14px] text-[#181818] !outline-none"
                    selectedClassName="bg-[#b52b1d] text-white"
                  >
                    Contact
                  </Tab>
                </TabList>
                <TabPanel>
                  <div className="lg:pt-8 pt-6">
                    <h2 className="font-bebas font-bold lg:text-[62px] text-[40px] lg:w-[624px] lg:leading-[62px] leading-[48px] text-[#333333]">
                      Exceptional culinary experience and delicious food
                    </h2>
                    <p className="text-[16px] font-normal font-roboto text-[#333333] pb-[32px] pt-[18px] leading-[26px] lg:w-[624px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ornare non sed est cursus. Vel hac convallis ipsum,
                      facilisi odio pellentesque bibendum viverra tempus. Lorem
                      ipsum dolor sit amet consectetur adipiscing elit do
                      eiusmod tempor incididunt ut labore et dolore magna minim
                      veniam nostrud exercitation.
                    </p>
                    <Flex className="lg:gap-x-8 gap-x-4">
                      <button className="lg:w-[161px] w-[149px] lg:h-[56px] h-12 bg-[#FEBF00] font-roboto font-bold lg:text-[18px] text-[16px] uppercase text-[#0A1425] leading-6">
                        About More
                      </button>
                      <h5 className="flex lg:gap-x-2 gap-x-1 items-center font-roboto font-bold lg:text-[18px] text-[14px]">
                        <MdPhoneInTalk className="text-[#bd1f17]" />
                        +88 3426 739 485
                      </h5>
                    </Flex>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="lg:pt-8 pt-6">
                    <h2 className="font-bebas font-bold lg:text-[62px] text-[40px] lg:w-[624px] lg:leading-[62px] leading-[48px] text-[#333333]">
                    Savor the authentic flavors of our seasonal menu
                    </h2>
                    <p className="text-[16px] font-normal font-roboto text-[#333333] pb-[32px] pt-[18px] leading-[26px] lg:w-[624px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ornare non sed est cursus. Vel hac convallis ipsum,
                      facilisi odio pellentesque bibendum viverra tempus. Lorem
                      ipsum dolor sit amet consectetur adipiscing elit do
                      eiusmod tempor incididunt ut labore et dolore magna minim
                      veniam nostrud exercitation.
                    </p>
                    <Flex className="lg:gap-x-8 gap-x-4">
                      <button className="lg:w-[161px] w-[149px] lg:h-[56px] h-12 bg-[#FEBF00] font-roboto font-bold lg:text-[18px] text-[16px] uppercase text-[#0A1425] leading-6">
                        About More
                      </button>
                      <h5 className="flex lg:gap-x-2 gap-x-1 items-center font-roboto font-bold lg:text-[18px] text-[14px]">
                        <MdPhoneInTalk className="text-[#bd1f17]" />
                        +88 3426 739 485
                      </h5>
                    </Flex>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="lg:pt-8 pt-6">
                    <h2 className="font-bebas font-bold lg:text-[62px] text-[40px] lg:w-[624px] w-[330px] lg:leading-[62px] leading-[48px] text-[#333333]">
                    Indulge in a unique dining experience delicious
                    </h2>
                    <p className="text-[16px] font-normal font-roboto text-[#333333] pb-[32px] pt-[18px] leading-[26px] lg:w-[624px]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ornare non sed est cursus. Vel hac convallis ipsum,
                      facilisi odio pellentesque bibendum viverra tempus. Lorem
                      ipsum dolor sit amet consectetur adipiscing elit do
                      eiusmod tempor incididunt ut labore et dolore magna minim
                      veniam nostrud exercitation.
                    </p>
                    <Flex className="lg:gap-x-8 gap-x-4">
                      <button className="lg:w-[161px] w-[149px] lg:h-[56px] h-12 bg-[#FEBF00] font-roboto font-bold lg:text-[18px] text-[16px] uppercase text-[#0A1425] leading-6">
                        About More
                      </button>
                      <h5 className="flex lg:gap-x-2 gap-x-1 items-center font-roboto font-bold lg:text-[18px] text-[14px]">
                        <MdPhoneInTalk className="text-[#bd1f17]" />
                        +88 3426 739 485
                      </h5>
                    </Flex>
                  </div>
                </TabPanel>

              </Tabs>
            </div>
          </div>
          <div className="lg:flex justify-between lg:pt-[74px] pt-[50px]">
            <div className="lg:w-1/3 w-full flex gap-x-4 items-center">
              <div className="lg:h-[90px] lg:w-[90px] w-[70px] h-[70px] rounded-full bg-[#FFFFFF] shadow-aboutshadow flex justify-center items-center">
                <FaCodepen className="text-[#BD1F17] lg:w-[33px] lg:h-[35px] h-[20px] w-[20px]" />
              </div>
              <div className="">
                <h3 className="font-bebas font-bold lg:text-[30px] text-[24px] text-[#0a1425] leading-9]">
                  fast delivery
                </h3>
                <p className="font-roboto font-normal lg:text-[20px] text-[18px] text-[#0a1425] -space-x-[1.5%]">
                  Within 30 minutes
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 w-full flex gap-x-4 items-center lg:my-0 my-8">
              <div className="lg:h-[90px] lg:w-[90px] w-[70px] h-[70px] rounded-full bg-[#FFFFFF] shadow-aboutshadow flex justify-center items-center">
                <FaAward className="text-[#BD1F17] lg:w-[33px] lg:h-[35px] h-[20px] w-[20px]" />
              </div>
              <div className="">
                <h3 className="font-bebas font-bold lg:text-[30px] text-[24px] text-[#0a1425] leading-9]">
                  absolute dining
                </h3>
                <p className="font-roboto font-normal lg:text-[20px] text-[18px] text-[#0a1425] -space-x-[1.5%]">
                  Best buffet restaurant
                </p>
              </div>
            </div>
            <div className="lg:w-1/3 w-full flex gap-x-4 items-center">
              <div className="lg:h-[90px] lg:w-[90px] w-[70px] h-[70px] rounded-full bg-[#FFFFFF] shadow-aboutshadow flex justify-center items-center">
                <FiShoppingBag className="text-[#BD1F17] lg:w-[33px] lg:h-[35px] h-[20px] w-[20px]" />
              </div>
              <div className="">
                <h3 className="font-bebas font-bold lg:text-[30px] text-[24px] text-[#0a1425] leading-9]">
                  pickup delivery
                </h3>
                <p className="font-roboto font-normal lg:text-[20px] text-[18px] text-[#0a1425] -space-x-[1.5%]">
                  Grab your food order
                </p>
              </div>
            </div>
          </div>
        </Container>
        <img
          src={Outer}
          alt=""
          className="absolute bottom-[20%] right-0 -rotate-[24.95] lg:block hidden"
        />
      </div>
    </>
  );
};

export default About;
