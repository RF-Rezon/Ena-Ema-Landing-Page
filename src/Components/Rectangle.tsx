"use client";
import { images } from "@/assets";
import Image from "next/image";
import Marquee from "react-fast-marquee";
const Rectangle = () => {
  return (
    <>
      <div className="md:h-[470px] h-[468px] w-full bg-background mt-[20px] md:mt-0">
        <Marquee>
          <Image
            className="object-cover rounded-[12px] mx-2 md:h-[470px] h-[468px] w-auto"
            src={images.proj1}
            alt="img"
          />
          <Image
            className="object-cover rounded-[12px] mx-2 md:h-[470px] h-[468px] w-auto"
            src={images.proj2}
            alt="img"
          />
          <Image
            className="object-cover rounded-[12px] mx-2 md:h-[470px] h-[468px] w-auto"
            src={images.proj3}
            alt="img"
          />
        </Marquee>
      </div>
    </>
  );
};

export default Rectangle;
