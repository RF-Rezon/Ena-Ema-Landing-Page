"use client";
import { images } from "@/assets";
import { contactBottom, heroData } from "@/data/fakeData";
import Image from "next/image";
import CustomButton from "./button";

const Hero = () => {
  return (
    <div className="relative flex items-center flex-col md:py-[131px] md:px-[120px] px-4 py-4 mb-[26px] md:mb-0 bg-background">
      <Image
        className="absolute top-0"
        src={images.hero_top_shadow}
        alt="Hero Top Shadow"
      />
      {/* icon part */}
      <div className="md:absolute md:top-[24px]">
        <Image
          className="object-cover md:h-full md:w-full h-[18px] w-[80px] "
          src={images.Logo}
          alt="logo"
        />
      </div>
      {/* text part */}
      <div className="flex justify-center items-center flex-col mt-[33px] md:mt-0">
        <span className="textPart text-[12px] px-4 py-2 md:mb-6 mb-9">
          <svg
            className="h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <g clipPath="url(#clip0_156_8277)">
              <path
                d="M12.4373 7.83187L9.31984 6.6825L8.16796 3.5625C8.07988 3.32361 7.92068 3.11747 7.71181 2.97187C7.50294 2.82627 7.25445 2.74821 6.99984 2.74821C6.74523 2.74821 6.49674 2.82627 6.28787 2.97187C6.079 3.11747 5.9198 3.32361 5.83171 3.5625L4.68234 6.6825L1.56234 7.83187C1.32345 7.91996 1.11731 8.07916 0.971711 8.28803C0.826109 8.4969 0.748047 8.74539 0.748047 9C0.748047 9.25461 0.826109 9.5031 0.971711 9.71197C1.11731 9.92084 1.32345 10.08 1.56234 10.1681L4.67984 11.3175L5.83171 14.4375C5.9198 14.6764 6.079 14.8825 6.28787 15.0281C6.49674 15.1737 6.74523 15.2518 6.99984 15.2518C7.25445 15.2518 7.50294 15.1737 7.71181 15.0281C7.92068 14.8825 8.07988 14.6764 8.16796 14.4375L9.31734 11.32L12.4373 10.1681C12.6762 10.08 12.8824 9.92084 13.028 9.71197C13.1736 9.5031 13.2516 9.25461 13.2516 9C13.2516 8.74539 13.1736 8.4969 13.028 8.28803C12.8824 8.07916 12.6762 7.91996 12.4373 7.83187ZM8.47609 10.0294C8.37428 10.0669 8.28183 10.1261 8.20511 10.2028C8.12839 10.2795 8.06923 10.3719 8.03171 10.4738L6.99984 13.2675L5.97046 10.4738C5.93294 10.3719 5.87378 10.2795 5.79706 10.2028C5.72035 10.1261 5.62789 10.0669 5.52609 10.0294L2.73234 9L5.52609 7.97062C5.62789 7.93311 5.72035 7.87395 5.79706 7.79723C5.87378 7.72051 5.93294 7.62805 5.97046 7.52625L6.99984 4.7325L8.02921 7.52625C8.06673 7.62805 8.12589 7.72051 8.20261 7.79723C8.27933 7.87395 8.37179 7.93311 8.47359 7.97062L11.2673 9L8.47609 10.0294ZM8.74984 2.5C8.74984 2.30109 8.82886 2.11032 8.96951 1.96967C9.11016 1.82902 9.30093 1.75 9.49984 1.75H10.2498V1C10.2498 0.801088 10.3289 0.610322 10.4695 0.46967C10.6102 0.329018 10.8009 0.25 10.9998 0.25C11.1988 0.25 11.3895 0.329018 11.5302 0.46967C11.6708 0.610322 11.7498 0.801088 11.7498 1V1.75H12.4998C12.6988 1.75 12.8895 1.82902 13.0302 1.96967C13.1708 2.11032 13.2498 2.30109 13.2498 2.5C13.2498 2.69891 13.1708 2.88968 13.0302 3.03033C12.8895 3.17098 12.6988 3.25 12.4998 3.25H11.7498V4C11.7498 4.19891 11.6708 4.38968 11.5302 4.53033C11.3895 4.67098 11.1988 4.75 10.9998 4.75C10.8009 4.75 10.6102 4.67098 10.4695 4.53033C10.3289 4.38968 10.2498 4.19891 10.2498 4V3.25H9.49984C9.30093 3.25 9.11016 3.17098 8.96951 3.03033C8.82886 2.88968 8.74984 2.69891 8.74984 2.5ZM15.7498 5.5C15.7498 5.69891 15.6708 5.88968 15.5302 6.03033C15.3895 6.17098 15.1988 6.25 14.9998 6.25H14.7498V6.5C14.7498 6.69891 14.6708 6.88968 14.5302 7.03033C14.3895 7.17098 14.1988 7.25 13.9998 7.25C13.8009 7.25 13.6102 7.17098 13.4695 7.03033C13.3289 6.88968 13.2498 6.69891 13.2498 6.5V6.25H12.9998C12.8009 6.25 12.6102 6.17098 12.4695 6.03033C12.3289 5.88968 12.2498 5.69891 12.2498 5.5C12.2498 5.30109 12.3289 5.11032 12.4695 4.96967C12.6102 4.82902 12.8009 4.75 12.9998 4.75H13.2498V4.5C13.2498 4.30109 13.3289 4.11032 13.4695 3.96967C13.6102 3.82902 13.8009 3.75 13.9998 3.75C14.1988 3.75 14.3895 3.82902 14.5302 3.96967C14.6708 4.11032 14.7498 4.30109 14.7498 4.5V4.75H14.9998C15.1988 4.75 15.3895 4.82902 15.5302 4.96967C15.6708 5.11032 15.7498 5.30109 15.7498 5.5Z"
                fill="#1FFFA5"
              />
            </g>
            <defs>
              <clipPath id="clip0_156_8277">
                <rect width="16" height="16" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <p className="general-reg-12">
            Trusted by 30+ startups & entrepreneurs worldwide
          </p>
        </span>
        <div className="md:w-[90%] w-full md:mb-12 mb-9 text-center">
          <p className="manrope-bold-72 text-text-light md:mb-4 mb-3">
            Strategic Landing Pages That Convert From Just
            <span className="text-primary"> $200</span>
          </p>
          <p className="general-reg-18">
            Stop wasting traffic on generic pages. We deliver premium,
            conversion-focused landing pages designed, developed, and launched
            in just 5 days.
          </p>
        </div>
      </div>
      {/* this is for hero contact */}
      <div className="flex flex-col">
        <div className="heroContactMain mx-auto p-3 md:p-9 md:w-[794px] w-full">
          <div className="flex flex-col w-full gap-y-6">
            <div className="flex flex-col md:flex-row gap-3 w-full">
              {heroData.map((item, index) => (
                <div
                  className="heroContact p-[18px] flex items-center gap-x-2 w-full rounded-md 
             border-2 border-transparent 
             transition-colors duration-300 
             hover:bg-white/5 
             focus:ring-[#1fffa5]"
                  key={index}
                >
                  <Image
                    height={16}
                    width={16}
                    src={item.icon}
                    alt={item.title}
                  />
                  <input
                    className="flex-1 text-nowrap focus:outline-none border-none general-reg-12"
                    placeholder={item.title}
                    type={item.type}
                  />
                </div>
              ))}
            </div>
            <CustomButton text="Get my high-converting landing page" />
          </div>
        </div>

        <div className="flex justify-between md:justify-center items-center flex-wrap md:gap-[64px] mt-4">
          {contactBottom.map((data, index) => (
            <div
              className="flex justify-center items-center space-x-[8px]"
              key={index}
            >
              <Image height={16} width={16} src={data.icon} alt={data.title} />
              <span className="text-nowrap general-reg-12-2">{data.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;
