import { images } from "@/assets";
import { projectShowcaseData } from "@/data/fakeData";
import Image from "next/image";
import CustomButton from "./button";
const CaseStudies = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-[48px] py-[120px] px-4 bg-[#0A0F0D]">
      <div>
        <h1 className="manrope-med-48 mb-2 text-text-light text-center">
          Case Studies
        </h1>
        <p className="general-reg-16 text-text-light text-center">
          See the designs that delivered results
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-4 md:gap-4">
        {projectShowcaseData.map((i, index) => (
          <div
            key={index}
            className="p-3 border-2 border-[#2A3C36] rounded-[12px] bg-background flex flex-col items-center gap-y-1"
          >
            <div className="h-full w-full">
              <Image
                src={i.image}
                className="object-cover h-full w-full"
                alt="img"
              />
            </div>
            <div className="flex flex-col items-start justify-center p-3 gap-y-2.5 w-full">
              <div className="self-start">
                <p className="manrope-bold-24">{i.name}</p>
              </div>
              <div className="flex flex-col items-start justify-between gap-y-2">
                <div className="px-4 py-2 rounded-full gap-x-2 bg-foreground flex items-center">
                  <Image src={images.checkIcon} alt="img" />
                  <p className="general-reg-12">{i.highlight1}</p>
                </div>
                <div className="px-4 py-2 rounded-full gap-x-2 bg-foreground flex items-center">
                  <Image src={images.checkIcon} alt="img" />
                  <p className="general-reg-12">{i.highlight2}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <CustomButton text="I want similar results" />
    </div>
  );
};

export default CaseStudies;
