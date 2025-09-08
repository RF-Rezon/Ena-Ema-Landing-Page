import Image from "next/image";
import { cards } from "./_constants/constants";

const TrustUs = () => {
  return (
    <>
      <div className="px-[16px] py-[64px] md:px-[120px] md:py-[120px] bg-background">
        <p
          data-aos="fade-up"
          data-aos-duration={300}
          data-aos-delay="200"
          className="text-center manrope-med-48 mb-2"
        >
          Why Businesses <span className="text-primary">Trust Us</span> With
          Their Designs
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration={300}
          data-aos-delay="300"
          className="text-center general-reg-16 mb-12"
        >
          We combine proven conversion frameworks with agency-level design to
          deliver results that matter.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 md:gap-9 gap-4">
          {cards.map((i, indx) => (
            <div
              key={indx}
              data-aos="fade-up"
              data-aos-delay={indx * 100 + 300}
              className="p-6 flex flex-col items-start justify-between bg-card h-[204px] curved 
                         border border-transparent hover:border-[#1FFFA5] 
                         transition-all duration-1000 ease-in-out
                         relative overflow-hidden group"
            >
              {/* Gradient overlay */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0 bg-gradient-to-t from-[#1FFFA5]/20 to-transparent 
                              group-hover:h-full transition-all duration-500 ease-in-out"
              />

              <Image
                src={i.image}
                height={48}
                width={48}
                className="object-cover relative z-10"
                alt="img"
              />
              <div className="space-y-[12px] relative z-10">
                <p className="manrope-med-16 text-text-light">{i.title}</p>
                <p className="general-reg-14 text-secondary-light">
                  {i.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TrustUs;
