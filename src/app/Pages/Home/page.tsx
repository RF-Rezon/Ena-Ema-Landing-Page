import Footer from "@/app/common/Footer/Footer";
import CaseStudies from "@/Components/CaseStudies";
import ChoosePlan from "@/Components/ChoosePlan";
import Hero from "@/Components/Hero";
import ReadyToTurn from "@/Components/ReadyToTurn";
import Rectangle from "@/Components/Rectangle";
import "@/styles/globals.css";
import AboutUs from "./_components/AboutUs/page";
import GotQuestions from "./_components/GotQuestions/page";
import Just5Days from "./_components/Just5Days/page";
import TrustUs from "./_components/TrustUs/page";

export default function Home() {
  return (
    <>
      <Hero />
      {/* this is for rectangle */}
      <Rectangle />
      <TrustUs />
      {/* this is for case studies */}
      <CaseStudies />
      {/* this is for choosePlan */}
      <ChoosePlan />
      <Just5Days />
      <AboutUs />
      <GotQuestions />
      {/* this is for ready to turn */}
      <ReadyToTurn />
    </>
  );
}

// hello test
