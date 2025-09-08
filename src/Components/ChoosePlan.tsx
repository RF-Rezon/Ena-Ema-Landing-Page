import { pricingData } from "@/data/fakeData";
import Image from "next/image";
import React from "react";

const ChoosePlan = () => {
  return (
    <div>
      {/* start choose your plan section */}
      <section className="bg-[#0a0f0d] text-white px-4 md:px-[64px] lg:px-[120px] py-[64px] md:py-[120px] flex flex-col gap-[48px] ">
        {/* this is for heading part */}
        <div>
          <h1 className="text-[32px] md:text-[48px] font-medium">
            Simple, Transparent Pricing —{" "}
            <span className="text-[#1FFFA5]">Choose Your Plan</span>
          </h1>
          <p className="text-[#F5F5F5] text-[14px] md:text-[16px]">
            No hidden fees, no surprises. Just premium landing pages at
            unbeatable prices.
          </p>
        </div>
        {/* this is card part for choose your plan */}
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  text-[#F5F5F5]">
            {pricingData.map((plan, index) => (
              <div
                key={index}
                className="chooseYourPlanCard relative group hover:border-2 border-[#1FFFA5] transition-all duration-500"
              >
                {/* Badge */}
                <span
                  className={`mostButton
      absolute -top-4 left-20 -translate-x-1/2 text-sm px-3 py-1 rounded-full
      transition-all duration-300
      ${
        plan.mostPopular
          ? "text-[#1FFFA5] opacity-100"
          : "text-[#1FFFA5] opacity-0 group-hover:opacity-100"
      }
    `}
                >
                  Most popular
                </span>

                <div className="flex justify-between w-full h-[52.99px]">
                  <div>
                    <h2 className="text-2xl font-bold">{plan.title}</h2>
                    <p className="text-[14px]">{plan.description}</p>
                  </div>
                  <p className="text-end text-[#1FFFA5] text-2xl font-bold">
                    ${plan.price}
                  </p>
                </div>

                <hr className="chooseHr w-full" />

                <ul className="text-[#B2B2B2] flex flex-col gap-3 h-[228px]">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex justify-start items-center gap-[14px]"
                    >
                      <span className="p-[6px] text-[#1FFFA5]">•</span>{" "}
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  className="
                  bg-[#003d25]
                  text-[#1FFFA5]
      cardButton 
      transition-all duration-300
      group-hover:bg-[#1FFFA5] group-hover:text-black
    "
                >
                  {plan.buttonText} →
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Limited Availability part */}
        <div>
          <div className="flex items-center gap-4">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 36 36"
              fill="none"
            >
              <path
                d="M30.8966 16.5066C30.8368 16.2391 30.7126 15.9902 30.535 15.7814C30.3574 15.5727 30.1316 15.4103 29.8771 15.3084L22.6799 12.4298L24.1691 2.5003C24.2238 2.14374 24.1628 1.77905 23.995 1.45971C23.8272 1.14038 23.5615 0.883206 23.2369 0.725923C22.9123 0.56864 22.5458 0.519523 22.1912 0.585775C21.8366 0.652028 21.5126 0.830163 21.2666 1.09405L5.51662 17.9691C5.3294 18.1695 5.19388 18.4127 5.1218 18.6773C5.04972 18.942 5.04325 19.2203 5.10295 19.488C5.16264 19.7557 5.28671 20.0049 5.4644 20.2139C5.64209 20.4228 5.86805 20.5854 6.12271 20.6873L13.3199 23.5659L11.8307 33.4997C11.776 33.8562 11.837 34.2209 12.0048 34.5403C12.1726 34.8596 12.4383 35.1168 12.7629 35.2741C13.0875 35.4313 13.454 35.4805 13.8086 35.4142C14.1632 35.348 14.4872 35.1698 14.7332 34.9059L30.4832 18.0309C30.6712 17.8298 30.8072 17.5858 30.8792 17.3201C30.9513 17.0544 30.9573 16.7751 30.8966 16.5066ZM15.9749 28.6242L16.8566 22.7503C16.913 22.3744 16.8407 21.9904 16.6516 21.6606C16.4625 21.3309 16.1675 21.0746 15.8146 20.9334L9.66646 18.4739L20.0249 7.37577L19.1432 13.2497C19.0868 13.6256 19.1591 14.0096 19.3482 14.3393C19.5373 14.6691 19.8323 14.9253 20.1852 15.0666L26.3333 17.5261L15.9749 28.6242Z"
                fill="#1FFFA5"
              />
            </svg> */}
            <div>
              <h1 className="text-[#F5F5F5] text-2xl font-bold">
                Limited Availability
              </h1>
              <p className="text-[#B2B2B2] text-[14px]">
                We only onboard 5 new clients per month. 2 spots left for this
                month — secure yours today.
              </p>
            </div>
          </div>
        </div>
        {/* Special Offer For Early Clients section */}
        <div className="specialOffer px-4 py-[48px] flex flex-col gap-6 lg:gap-[48px] ">
          <div className="flex justify-center items-center flex-col gap-2">
            <h1 className="text-2xl md:text-[36px] lg:text-[48px]">
              Special Offer For Early Clients
            </h1>
            <p className="text-[#B2B2B2] text-center text-[14px] md:text-[16px]">
              Get 10% OFF + Free Hosting Setup when you book this week.
            </p>
          </div>
          <div className="flex justify-center items-center text-black ">
            <button className="specialOfferBtn my-cta">
              Claim my 10% discount
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChoosePlan;
// some test
