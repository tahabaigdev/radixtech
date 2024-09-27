import PortfolioImg1 from "../assets/images/portfolio-img-1.avif";
import PortfolioImg2 from "../assets/images/portfolio-img-2.avif";
import PortfolioImg3 from "../assets/images/portfolio-img-3.avif";
import PortfolioImg4 from "../assets/images/portfolio-img-4.avif";
import WhatWeIcon1 from "../assets/images/branding.svg";
import WhatWeIcon2 from "../assets/images/development.svg";
import WhatWeIcon3 from "../assets/images/design.svg";
import BlogImg1 from "../assets/images/blog-img-1.avif";
import BlogImg2 from "../assets/images/blog-img-2.avif";

export const navLinks = [
  {
    id: 0,
    link: "/",
    linkText: "HOME",
  },

  {
    id: 1,
    link: "/about",
    linkText: "ABOUT US",
  },

  {
    id: 2,
    link: "/projects",
    linkText: "PROJECTS",
  },

  {
    id: 3,
    link: "/service",
    linkText: "SERVICE",
  },

  {
    id: 4,
    link: "/blog",
    linkText: "BLOG",
  },
];

export const portfolioData = [
  {
    id: 0,
    imgUrl: PortfolioImg1,
    title: "Future Landing Page",
    subTitle: "Web Design",
  },

  {
    id: 1,
    imgUrl: PortfolioImg2,
    title: "AI Automation Dashboard",
    subTitle: "Ui Ux",
  },

  {
    id: 2,
    imgUrl: PortfolioImg3,
    title: "Minimal Portfolio Showcase Application",
    subTitle: "Mobile App",
  },

  {
    id: 3,
    imgUrl: PortfolioImg4,
    title: "Clean Show Business Card Mockup",
    subTitle: "Branding",
  },
];

export const whatWeData = [
  {
    id: 0,
    imgUrl: WhatWeIcon1,
    title: "Branding design",
    subTitle:
      "Elevating brands through tailored and impactful design solutions.",
  },

  {
    id: 1,
    imgUrl: WhatWeIcon2,
    title: "Web & Mobile Development",
    subTitle:
      "Empowering digital innovation through expert Web & Mobile Development services.",
  },

  {
    id: 2,
    imgUrl: WhatWeIcon3,
    title: "UI/UX Design",
    subTitle:
      "Crafting intuitive and visually compelling digital experiences for users.",
  },
];

export const blogData = [
  {
    id: 0,
    imgUrl: BlogImg1,
    title: "5 Key Trends Shaping E-commerce in 2023",
    category: "Technology",
    date: "October 25, 2023",
  },

  {
    id: 1,
    imgUrl: BlogImg2,
    title: "The Power of Influencer Marketing: A Comprehensive Guide",
    category: "Marketing",
    date: "November 11, 2023",
  },
];
