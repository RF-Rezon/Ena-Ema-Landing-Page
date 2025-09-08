"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./Pages/Home/page";

const Page = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <>
      <div className="bg-background">
        <Home />
      </div>
    </>
  );
};

export default Page;
