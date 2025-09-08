import { images } from "@/assets";
import Image from "next/image";
import { cards } from "./_constants/constants";

const GotQuestions = () => {
  return (
    <>
      <div className="py-[64px] md:py-[120px] bg-[url('@/assets/images/image22.png')] bg-cover bg-center bg-no-repeat">
        <p
          data-aos="fade-up"
          data-aos-duration={300}
          className="manrope-med-48 mb-9 mx-auto text-center"
        >
          Got Questions<span className="text-primary">? </span>We have Got The
          Answers
        </p>
        <div className="flex items-center flex-col md:px-[210px] px-[16px] ">
          {cards.map((i, indx) => (
            <div
              data-aos="fade-up"
              data-aos-duration={indx * 300}
              key={indx}
              className="p-6 rounded-[12px] bg-card w-full md:mb-6 mb-3 border border-transparent hover:border-[#1FFFA5] 
                         transition-all duration-1000 ease-in-out
                         relative overflow-hidden group"
            >
              <Image
                className="mb-6"
                src={images.ellipse}
                width={12}
                height={12}
                alt="img"
              />
              <p className="manrope-bold-24 mb-6">{i.title}</p>
              <p className="general-reg-18">{i.description}</p>
              <div
                className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-[#1FFFA5]/20 to-transparent 
                              group-hover:h-full transition-all duration-500 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default GotQuestions;
