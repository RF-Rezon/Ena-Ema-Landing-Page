import { images } from "@/assets";
import Image from "next/image";

import {
  LiaBehance,
  LiaDribbble,
  LiaFacebookSquare,
  LiaInstagram,
  LiaLinkedin,
} from "react-icons/lia";

const Footer = () => {
  return (
    <div className="bg-[#1fffa5] flex items-center justify-between p-4 md:py-[64px] md:px-[64px] lg:px-[120px] lg:py-[64px]">
      <div className="">
        <Image
          src={images.FooterLogo}
          className="object-cover h-[23px] md:h-[36px] w-[100px] md:w-[160px] "
          alt="img"
        />
      </div>
      <p className="hidden md:block text-[12px] font-normal leading-[18px] tracking-[0] text-primary_dark text-end md:text-start">
        © All rights reserved to Ena Ema Technologies
      </p>
      <div className="flex flex-col md:flex-row items-center justify-between gap-y-4 md:gap-y-0">
        <p className="md:hidden block text-[12px] font-normal leading-[18px] tracking-[0] text-primary_dark text-end md:text-start">
          © All rights reserved to Ena Ema Technologies
        </p>
        <div className="self-end md:self-center flex items-center justify-center md:gap-x-4 gap-x-2">
          <LiaLinkedin fill="#0A0F0D" className="h-6 w-6 cursor-pointer" />
          <LiaFacebookSquare
            fill="#0A0F0D"
            className="h-6 w-6 cursor-pointer"
          />
          <LiaInstagram fill="#0A0F0D" className="h-6 w-6 cursor-pointer" />
          <LiaBehance fill="#0A0F0D" className="h-6 w-6 cursor-pointer" />
          <LiaDribbble fill="#0A0F0D" className="h-6 w-6 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
