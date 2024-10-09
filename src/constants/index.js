import PortfolioImg1 from "../assets/images/portfolio-img-1.gif";
import PortfolioImg2 from "../assets/images/portfolio-img-2.gif";
import PortfolioImg3 from "../assets/images/portfolio-img-3.gif";
import PortfolioImg4 from "../assets/images/portfolio-img-4.gif";
import InsightsImg1 from "../assets/images/insights-img-1.gif";
import InsightsImg2 from "../assets/images/insights-img-2.gif";
import TestimonialsAvatar1 from "../assets/images/testimonials-avatar-1.avif";
import TestimonialsAvatar2 from "../assets/images/testimonials-avatar-2.avif";
import TestimonialsAvatar3 from "../assets/images/testimonials-avatar-3.avif";
import TestimonialsAvatar4 from "../assets/images/testimonials-avatar-4.avif";
import TestimonialsAvatar5 from "../assets/images/testimonials-avatar-5.avif";
import TestimonialsAvatar6 from "../assets/images/testimonials-avatar-6.avif";
import {
  BadgeInfo,
  BookCheck,
  Boxes,
  BrainCircuit,
  ChartPie,
  ChevronsLeftRightEllipsis,
  Cpu,
  Database,
  NotepadText,
  Ratio,
  ScanBarcode,
  Settings,
  User,
  Users,
  Youtube,
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export const navLinks = [
  {
    id: 0,
    link: "/platform",
    linkText: "Platforms",
  },

  {
    id: 1,
    link: "/solutions",
    linkText: "Solutions",
  },

  {
    id: 2,
    link: "resources",
    linkText: "Insights",
  },

  {
    id: 3,
    link: "why",
    linkText: "Why RadixTech",
  },

  {
    id: 4,
    link: "about",
    linkText: "About Us",
  },
];

export const portfolioData = [
  {
    id: 0,
    imgUrl: PortfolioImg1,
    title: "Contextual understanding",
    subTitle: "digital services",
  },

  {
    id: 1,
    imgUrl: PortfolioImg2,
    title: "Work closely with field teams",
    subTitle: "technical advisors",
  },

  {
    id: 2,
    imgUrl: PortfolioImg3,
    title: "Our team",
    subTitle: "Manager Information System",
  },

  {
    id: 3,
    imgUrl: PortfolioImg4,
    title: "Collaborative Expertise",
    subTitle: "customized digital platforms",
  },
];

export const whatWeData = [
  {
    id: 0,
    icon: Ratio,
    title: "End to end solutions",
    subTitle:
      "We offer customized and adaptive mobile and web-based platforms that capture field data through mobile devices or remote data entry interfaces.",
  },

  {
    id: 1,
    icon: ScanBarcode,
    title: "Custom Product/Software Development",
    subTitle:
      "We provide technical expertise and consultancy in building cross-platform Application: web and mobile native app (iOS/Android) development and train staffs of humanitarian and development organizations for its successful implementations.",
  },

  {
    id: 2,
    icon: Database,
    title: "Transition to Digital Data",
    subTitle:
      "We help organizations embrace digital data collection and improve the quality and efficiency of their monitoring. We develop tools and systems, train staff or manage entire data collection processes.",
  },

  {
    id: 3,
    icon: Cpu,
    title: "Transfer of Technology",
    subTitle:
      "We help design, implement, and maintain highly-tailored systems for large or small scale projects/programs. Our focused trainings are designed in a way that allow complete transfer of technology and your staffs will themselves be managing all developed systems.",
  },

  {
    id: 4,
    icon: BookCheck,
    title: "Training",
    subTitle:
      "We travel on-site to conduct training and organize face to face sessions to develop required skills for digital data management so that you can use our products in the most efficient and effective way. We also provide trainings to adapt, deploy, operate, maintain and use ICT solutions considering the technology involved and the ecosystem that supports its use.",
  },

  {
    id: 5,
    icon: BadgeInfo,
    title: "We are here to help",
    subTitle:
      "We are a team of experts with a broad range of qualifications and skills encompassing all aspects of humanitarian and development work.",
  },
];

export const insightsData = [
  {
    id: 0,
    imgUrl: InsightsImg1,
    title: "5 Key Trends Shaping E-commerce in 2023",
    category: "Technology",
    date: "October 25, 2023",
  },

  {
    id: 1,
    imgUrl: InsightsImg2,
    title: "The Power of Influencer Marketing: A Comprehensive Guide",
    category: "Marketing",
    date: "November 11, 2023",
  },
];

export const testimonialsData = [
  {
    id: 0,
    message:
      "RadixTech’s platforms streamline our data management, enabling us to make informed decisions quickly and effectively during humanitarian interventions.",
    title: "John M.",
    subTitle: "Director Crisis Anticipation and Response",
    imgUrl: TestimonialsAvatar1,
  },

  {
    id: 1,
    message:
      "The innovative solutions provided by RadixTech have significantly improved our project reporting and monitoring, enhancing our overall program effectiveness.",
    title: "David L.",
    subTitle: "Project Manager",
    imgUrl: TestimonialsAvatar2,
  },

  {
    id: 2,
    message:
      "Thanks to RadixTech, our data analysis processes are efficient, allowing us to generate critical insights for impactful decision-making.",
    title: "Sarah K.",
    subTitle: "Health Specialist",
    imgUrl: TestimonialsAvatar3,
  },

  {
    id: 3,
    message:
      "RadixTech has revolutionized our approach to data management, ensuring we can support communities with timely and accurate information.",
    title: "Joseph.",
    subTitle: "Regional Emergencies Director Operations",
    imgUrl: TestimonialsAvatar4,
  },

  {
    id: 4,
    message:
      "Working with RadixTech has transformed our data practices, enabling us to focus on meaningful interventions in humanitarian and development sectors.",
    title: "Lisa H.",
    subTitle: "Research Analyst",
    imgUrl: TestimonialsAvatar5,
  },

  {
    id: 5,
    message:
      "The support from RadixTech has been exceptional, providing us with the tools needed to evaluate and adapt our programs effectively.",
    title: "Michael R.",
    subTitle: "Monitoring and Evaluation Specialist",
    imgUrl: TestimonialsAvatar6,
  },
];

export const productDropdownLinks = [
  {
    id: 0,
    icon: NotepadText,
    text: "Reporting",
    link: "",
  },

  {
    id: 1,
    icon: Boxes,
    text: "Planning",
    link: "",
  },

  {
    id: 2,
    icon: ChartPie,
    text: "Budgeting",
    link: "",
  },

  {
    id: 3,
    icon: BrainCircuit,
    text: "Intelligence",
    link: "",
  },

  {
    id: 4,
    icon: ChevronsLeftRightEllipsis,
    text: "Integrations",
    link: "",
  },
];

export const personaDropdownLinks = [
  {
    id: 0,
    icon: User,
    text: "For CFOs",
    link: "",
  },

  {
    id: 1,
    icon: Users,
    text: "For Finance Managers",
    link: "",
  },

  {
    id: 2,
    icon: Settings,
    text: "For Operations",
    link: "",
  },
];

export const companyDropdownLinks = [
  {
    id: 0,
    icon: NotepadText,
    text: "Report",
    link: "",
  },

  {
    id: 1,
    icon: Boxes,
    text: "Plan",
    link: "",
  },

  {
    id: 2,
    icon: ChartPie,
    text: "Bud",
    link: "",
  },

  {
    id: 3,
    icon: BrainCircuit,
    text: "Int",
    link: "",
  },

  {
    id: 4,
    icon: ChevronsLeftRightEllipsis,
    text: "Integr",
    link: "",
  },
];

export const lifeDropdownLinks = [
  {
    id: 0,
    icon: User,
    text: "For CFOs",
    link: "",
  },

  {
    id: 1,
    icon: Users,
    text: "For Finance Managers",
    link: "",
  },

  {
    id: 2,
    icon: Settings,
    text: "For Operations",
    link: "",
  },
];

export const mainLinks = [
  {
    id: 0,
    text: "Solutions",
    link: "/solutions",
  },

  {
    id: 1,
    text: "Products",
    link: "/products",
  },

  {
    id: 2,
    text: "Resources",
    link: "/resources",
  },

  {
    id: 3,
    text: "Why RadixTech",
    link: "/why",
  },
];

export const socialLinksData = [
  {
    id: 0,
    link: "",
    icon: IoLogoInstagram,
  },

  {
    id: 1,
    link: "",
    icon: FaYoutube,
  },

  {
    id: 2,
    link: "",
    icon: FaLinkedinIn,
  },

  {
    id: 3,
    link: "",
    icon: FaFacebookF,
  },
];
