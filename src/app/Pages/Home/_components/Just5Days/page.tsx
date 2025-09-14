import Image from "next/image";
import { cards } from "./_constants/constants";
const Just5Days = () => {
  return (
    <>
      <div className="py-[64px] lg:py-[120px] lg:px-[180px] px-[16px] bg-[url('@/assets/images/image20.png')] bg-cover bg-center bg-no-repeat">
        <p className="text-center manrope-med-48 mb-2">
          From Idea to Live Landing Page in
          <span className="text-primary"> Just 5 Days </span>
        </p>
        <p className="text-center general-reg-16 mb-12">
          Our streamlined process ensures fast delivery without compromising
          quality.
        </p>
        <div className="flex items-center justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-6 gap-y-9 md:w-[912px] w-full">
            {cards.map((i, index) => (
              <div
                key={index}
                className="curved flex flex-col items-center justify-between bg-card relative gap-y-9 p-9"
              >
                <div className="w-full">
                  <div className="h-[84px] w-[84px] mx-auto bg-foreground rounded-full flex items-center justify-center p-6">
                    <Image
                      src={i.image}
                      height={30}
                      width={30}
                      className="object-cover"
                      alt="img"
                    />
                  </div>
                </div>
                <div className="gap-y-2">
                  <p className="general-med-20 text-text-light text-center">
                    {i.name}
                  </p>
                  <p className="general-reg-14 text-secondary-light text-center text-wrap">
                    {i.designations}
                  </p>
                </div>
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[18px] border border-[#1FFFA5] rounded-full">
                  <p className="general-reg-12 text-primary px-2">
                    {i.duration}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Just5Days;
