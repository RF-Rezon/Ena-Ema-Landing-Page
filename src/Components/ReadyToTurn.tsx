"use client";

import { images } from "@/assets";
import { contactBottom, heroData } from "@/data/fakeData";
import Image from "next/image";
import { useState } from "react";

const ReadyToTurn = () => {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (title: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [title]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    // replace with your API call if needed
  };

  return (
    <div
      className="
        bg-[#0a0f0d]
        relative flex items-center flex-col md:py-[131px] md:px-[120px] px-4 py-[64px]
      "
    >
      {/* left shadow */}
      <Image
        src={images.shadow1}
        alt=""
        className="
          hidden md:block
          absolute left-0 top-0
          w-[50vw]
          h-screen
          pointer-events-none
        "
      />

      {/* right shadow */}
      <Image
        src={images.shadow2}
        alt=""
        className="
          hidden md:block
          absolute right-0 top-0
          w-[50vw]
          h-screen
          pointer-events-none
        "
      />

      {/* Heading */}
      <div className="md:w-[90%] w-full md:mb-12 mb-9 text-center mx-auto">
        <p className="manrope-bold-72 text-text-light md:mb-4 mb-3">
          Ready to Turn Visitors Into
          <span className="text-primary"> Real Customers?</span>
        </p>
        <p className="general-reg-18">
          Don't settle for an average page. Get a premium, conversion-focused
          landing page that pays for itself.
        </p>
      </div>

      {/* Form & Button */}
      <div className="flex flex-col w-full items-center">
        <div className="heroContactMain w-[90vw] lg:w-[60vw] mx-auto p-3 md:p-9">
          <div className="flex flex-col w-full gap-y-6">
            <div className="flex flex-col md:flex-row gap-3 w-full">
              {heroData.map((item, index) => (
                <div
                  className="heroContact p-[18px] flex items-center gap-x-2 w-full rounded-md 
                   border-2 border-transparent 
                   transition-colors duration-300 
                   hover:bg-white/5 
                   focus-within:border-[#1fffa5]"
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
                    value={formData[item.title] || ""}
                    type={item.type}
                    onChange={(e) => handleChange(item.title, e.target.value)}
                  />
                </div>
              ))}
            </div>

            {/* Button */}
            <div className="heroContactButton group px-8 py-4 general-med-16 cursor-pointer rounded-[8px] hover:rounded-[18px] transition-all ease-in-out flex items-center space-x-[12px]">
              <button
                onClick={handleSubmit}
                className="text-primary_dark cursor-pointer transition-all duration-300 group-hover:-translate-x-1"
              >
                Get my high-converting landing page
              </button>
              <Image
                src={images.ArrowRight}
                alt="arrow"
                className="transition-all duration-300 group-hover:translate-x-2"
              />
            </div>
          </div>
        </div>

        {/* Contact Bottom */}
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

export default ReadyToTurn;
