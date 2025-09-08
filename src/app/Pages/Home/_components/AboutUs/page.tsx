"use client";
import { images } from "@/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import { cards } from "./_constants/constants";

const AboutUs = () => {
  return (
    <div className="py-[64px]  md:py-[120px] pr-[16px] md:pr-0 bg-[url('@/assets/images/image21.png')] bg-cover bg-center bg-no-repeat">
      <p
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="200"
        className="md:text-left text-center manrope-med-48 mb-2 pl-[16px] md:pl-[120px]"
      >
        What Our Clients Are Saying
        <span className="text-primary"> About Us</span>
      </p>
      <p
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
        className="md:text-left text-center general-reg-16 mb-12 pl-[16px] md:pl-[120px]"
      >
        Real feedback from real businesses who've seen real results.
      </p>

      {/* Drag Container */}
      <motion.div
        className="cursor-grab overflow-hidden pl-[16px] md:pl-[120px]"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ left: -600, right: 0 }}
          className="flex gap-6"
        >
          {cards.map((i, index) => (
            <div
              key={index}
              data-aos="fade-left"
              data-aos-duration={index * 100 + 300}
              data-aos-delay="600"
              className="min-w-[280px] p-6 flex flex-col items-start justify-between bg-card rounded-[12px] h-[240px]"
            >
              <div>
                <div className="flex items-center gap-x-2">
                  {[...Array(5)].map((_, idx) => (
                    <Image
                      key={idx}
                      src={images.starIcon}
                      height={16}
                      width={16}
                      alt="img"
                      className="object-cover mb-6"
                    />
                  ))}
                </div>
                <blockquote className="general-reg-14 text-text-light">
                  {i.description}
                </blockquote>
              </div>
              <div className="flex items-center justify-start gap-x-3">
                <Image
                  src={i.image}
                  height={36}
                  width={36}
                  alt="img"
                  className="object-cover rounded-full"
                />
                <div>
                  <p className="general-med-16 text-text-light mb-[2px]">
                    {i.name}
                  </p>
                  <p className="general-reg-12 text-text-light">{i.title}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
