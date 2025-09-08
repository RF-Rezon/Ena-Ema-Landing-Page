import { images } from "@/assets";
import { number } from "framer-motion";
import { StaticImageData } from "next/image";

interface HeroItem {
  icon: StaticImageData;
  title: string;
  type: "text" | "email" | "number";
}

// hero section fake data
export const heroData: HeroItem[] = [
  { icon: images.user, title: "Your name", type: "text" },
  { icon: images.email_icon, title: "Email Address", type: "email" },
  { icon: images.phone, title: "Phone Number", type: "number" },
];
// this is for bottom of contact in hero section
interface heroContactBottom {
  icon: StaticImageData;
  title: string;
}
export const contactBottom: heroContactBottom[] = [
  { icon: images.lockIcon, title: "SSL secure" },
  { icon: images.checkIcon, title: "Money-back guaranteed" },
  { icon: images.starIcon2, title: "Satisfaction guaranteed" },
];

// this fake data for choose your plan
// src/data/pricingData.ts

export interface PricingPlan {
  title: string;
  price: number;
  description: string;
  features: string[];
  buttonText: string;
  mostPopular?: boolean; // optional, middle plan এ true হবে
}

export const pricingData: PricingPlan[] = [
  {
    title: "Basic",
    price: 200,
    description: "Perfect for solopreneurs",
    features: [
      "Landing Page (Design + Development)",
      "Hosting Deployment",
      "5-Day Delivery",
      "Basic Support",
    ],
    buttonText: "Start my project",
  },
  {
    title: "Standard",
    price: 300,
    description: "Best balance of value & features",
    features: [
      "Everything in Basic",
      "Extra Custom Section",
      "Free Hosting Setup",
      "Free Consultation Call",
      "Priority Support",
    ],
    buttonText: "Start my project",
  },
  {
    title: "Premium",
    price: 500,
    description: "For brands & agencies",
    features: [
      "Everything in Standard",
      "Advanced Animations",
      "Priority Delivery (3 Days)",
      "6 Months Free Support",
      "Performance Optimization",
    ],
    buttonText: "Start my project",
  },
];

// this is for case studies fake data
type ProjectShowcase = {
  name: string;

  highlight1: string;
  highlight2: string;
  image: any;
};

export const projectShowcaseData: ProjectShowcase[] = [
  {
    name: "Velora",
    highlight1: "20% high conversion than average in first week",
    highlight2: "Clean and modern design with clear CTA",
    image: images.section1,
  },
  {
    name: "Flow Point",

    highlight1: "20% higher conversion than average in first week",
    highlight2: "Clean and modern design with clear CTA",
    image: images.section2,
  },
  {
    name: "GrowthSummit",
    highlight1: "20% higher conversion than average in first week",
    highlight2: "Clean and modern design with clear CTA",
    image: images.section3,
  },
];
