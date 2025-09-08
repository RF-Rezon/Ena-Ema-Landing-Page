// components/HeroButton.jsx
"use client";
import { images } from "@/assets";
import Image from "next/image";
import React from "react";

interface HeroButtonProps {
  text: string;
}

const CustomButton: React.FC<HeroButtonProps> = ({ text }) => {
  return (
    <div className="heroContactButton group px-8 py-4 general-med-16 cursor-pointer rounded-[8px] hover:rounded-[18px] transition-all ease-in-out flex items-center space-x-[12px]">
      <button className="text-primary_dark cursor-pointer transition-all duration-300 group-hover:-translate-x-1">
        {text}
      </button>
      <Image
        src={images.ArrowRight}
        alt="arrow"
        className="transition-all duration-300 group-hover:translate-x-2"
      />
    </div>
  );
};

export default CustomButton;
