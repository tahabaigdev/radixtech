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
import UseCaseImg1 from "../assets/images/use-case-img-1.jpg";
import DataServicesImg from "../assets/images/data-services.gif";
import ReportingServicesImg from "../assets/images/reporting-services.gif";
import Ict4dImg from "../assets/images/ict4d.gif";
import CapacityBuildingImg from "../assets/images/capacity-building.gif";
import GisImg from "../assets/images/gis.gif";
import AmlImg from "../assets/images/aml.gif";
import DmaImg from "../assets/images/dma.gif";
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
} from "lucide-react";
import { FaFacebookF, FaLinkedinIn, FaUsers, FaYoutube } from "react-icons/fa";
import { IoIosCodeWorking, IoLogoInstagram } from "react-icons/io";
import { RiDashboard2Line, RiUserSmileLine } from "react-icons/ri";
import {
  TbCashRegister,
  TbClipboardData,
  TbDatabaseSearch,
  TbMapSearch,
  TbPlugConnectedX,
  TbReportSearch,
} from "react-icons/tb";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { AiOutlineDatabase } from "react-icons/ai";
import {
  MdOutlineAssessment,
  MdOutlineContactPhone,
  MdOutlineInsights,
  MdOutlineMobileFriendly,
  MdPeopleOutline,
} from "react-icons/md";
import { LiaChalkboardTeacherSolid, LiaPodcastSolid } from "react-icons/lia";
import {
  PiBriefcase,
  PiCopySimple,
  PiExport,
  PiMapTrifold,
  PiWashingMachineBold,
} from "react-icons/pi";
import { BiAccessibility, BiUserPin } from "react-icons/bi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { FiPieChart } from "react-icons/fi";
import {
  GrSecure,
  GrServerCluster,
  GrShieldSecurity,
  GrTechnology,
  GrUserWorker,
} from "react-icons/gr";
import { LuBoxes, LuBrainCircuit, LuContact } from "react-icons/lu";
import { FaTruckFieldUn, FaUsersViewfinder } from "react-icons/fa6";
import { GoWorkflow } from "react-icons/go";
import { GiMeshNetwork } from "react-icons/gi";
import { CiCalendar } from "react-icons/ci";

export const navLinks = [
  {
    id: 0,
    linkText: "Platforms",
    arg: "platform",
  },

  {
    id: 1,
    linkText: "Solutions",
    arg: "solutions",
  },

  {
    id: 2,
    linkText: "Why RadixTech",
    arg: "why",
  },

  {
    id: 3,
    linkText: "About Us",
    arg: "about",
  },

  {
    id: 4,
    linkText: "Insights",
    arg: "insights",
  },
];

export const dataHubData = [
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

export const solutionsData = [
  {
    id: 0,
    icon: Ratio,
    title: "Simple",
    subTitle:
      "We simplify user experiences to make data-driven decision-making easier for all users",
  },

  {
    id: 1,
    icon: ScanBarcode,
    title: "Secure",
    subTitle:
      "With GDPR-compliant security protocols, RadixTech ensures strong governance, protecting your data and privacy.",
  },

  {
    id: 2,
    icon: BrainCircuit,
    title: "Intelligent",
    subTitle:
      "Our platform adapts to your organization's needs, leveraging data intelligence for optimized performance.",
  },

  {
    id: 3,
    icon: Cpu,
    title: "Seamless Integrations",
    subTitle:
      "RadixTech integrates with critical systems, such as MEAL, HR, Finance, and Supply Chain tools, to streamline workflows.",
  },
];

export const insightsData = [
  {
    id: 0,
    link: "https://www.linkedin.com/posts/weareradix_datadrivendialogues-digitalinnovation-datadrivendecisionmaking-activity-7250648143707459584-NZPT?utm_source=share&utm_medium=member_desktop",
    imgUrl: InsightsImg1,
    title: "Podcast",
    description: `"Data-Driven Dialogues" podcast offer guidance on navigating the complexities of data, technology, and digital transformation. Provides valuable advice, inspiring case studies, and practical coaching sessions.`,
  },

  {
    id: 1,
    link: "https://www.linkedin.com/posts/weareradix_podcast-datadriven-podcast-activity-7249747893610287104-_DiW?utm_source=share&utm_medium=member_desktop",
    imgUrl: InsightsImg2,
    title: "Insights",
    description:
      "We cover pertinent questions, provides practical advice and strategies to navigate data, technology, and digital transformation, helping professionals unlock innovative solutions.",
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

export const platformFirstColumnDropdownLinks = [
  {
    id: 0,
    icon: RiDashboard2Line,
    text: "Management Information System (MIS)",
    link: "",
  },

  {
    id: 1,
    icon: TbReportSearch,
    text: "MEAL System",
    link: "",
  },

  {
    id: 2,
    icon: IoPeopleCircleOutline,
    text: "Beneficiary Registration System",
    link: "",
  },

  {
    id: 3,
    icon: TbCashRegister,
    text: "Cash and Humanitarian Aid Distribution System",
    link: "",
  },

  {
    id: 4,
    icon: TbDatabaseSearch,
    text: "DataHub",
    link: "",
  },
];

export const platformSecondColumnDropdownLinks = [
  {
    id: 0,
    icon: BiAccessibility,
    text: "Accessibility",
    link: "",
  },

  {
    id: 1,
    icon: HiOutlineDesktopComputer,
    text: "User-Friendly Interface",
    link: "",
  },

  {
    id: 2,
    icon: FiPieChart,
    text: "Reports and Dashboards",
    link: "",
  },

  {
    id: 3,
    icon: TbMapSearch,
    text: "Data on GIS Maps",
    link: "",
  },

  {
    id: 4,
    icon: PiExport,
    text: "Export Options",
    link: "",
  },

  {
    id: 5,
    icon: FaUsers,
    text: "Customizable Teams and User Roles",
    link: "",
  },
];

export const platformThirdColumnDropdownLinks = [
  {
    id: 0,
    icon: BiUserPin,
    text: "Single Sign-On (SSO)",
    link: "",
  },

  {
    id: 1,
    icon: GrServerCluster,
    text: "Multiple Server Locations",
    link: "",
  },

  {
    id: 2,
    icon: GrShieldSecurity,
    text: "Compliance & Security",
    link: "",
  },
];

export const solutionsFirstColumnDropdownLinks = [
  {
    id: 0,
    icon: AiOutlineDatabase,
    text: "Data",
    link: "",
  },

  {
    id: 1,
    icon: TbClipboardData,
    text: "Reporting",
    link: "",
  },

  {
    id: 2,
    icon: MdOutlineMobileFriendly,
    text: "ICT4D",
    link: "",
  },

  {
    id: 3,
    icon: LiaChalkboardTeacherSolid,
    text: "Capacity Building",
    link: "",
  },

  {
    id: 4,
    icon: PiMapTrifold,
    text: "GIS",
    link: "",
  },

  {
    id: 5,
    icon: PiWashingMachineBold,
    text: "Machine Learning",
    link: "",
  },

  {
    id: 6,
    icon: MdOutlineAssessment,
    text: "Data Maturity Assessment",
    link: "",
  },
];

export const solutionsSecondColumnDropdownLinks = [
  {
    id: 0,
    icon: PiCopySimple,
    text: "Simple",
    link: "",
  },

  {
    id: 1,
    icon: GrSecure,
    text: "Secure",
    link: "",
  },

  {
    id: 2,
    icon: LuBrainCircuit,
    text: "Intelligent",
    link: "",
  },

  {
    id: 3,
    icon: TbPlugConnectedX,
    text: "Seamless integrations",
    link: "",
  },
];

export const insightsFirstColumnDropdownLinks = [
  {
    id: 0,
    icon: LiaPodcastSolid,
    text: "Podcast",
    arg: "insights",
  },

  {
    id: 1,
    icon: MdOutlineInsights,
    text: "Insights",
    arg: "insights",
  },
];

export const insightsSecondColumnDropdownLinks = [
  {
    id: 0,
    icon: CiCalendar,
    text: "Schedule a Conversation",
    arg: "contact",
  },

  {
    id: 1,
    icon: MdOutlineContactPhone,
    text: "Get in Touch",
    arg: "contact",
  },
];

export const whyFirstColumnDropdownLinks = [
  {
    id: 0,
    icon: FaTruckFieldUn,
    text: "Contextual understanding",
    link: "",
  },

  {
    id: 1,
    icon: FaUsersViewfinder,
    text: "User-Friendly Solutions",
    link: "",
  },
];

export const whySecondColumnDropdownLinks = [
  {
    id: 0,
    icon: RiUserSmileLine,
    text: "What Makes Us Different?",
    link: "",
  },

  {
    id: 1,
    icon: LuBoxes,
    text: "All in with RadixTech",
    link: "",
  },
];

export const aboutFirstColumnDropdownLinks = [
  {
    id: 0,
    icon: GoWorkflow,
    text: "What we do",
    link: "",
  },

  {
    id: 1,
    icon: GrUserWorker,
    text: "Who we are",
    link: "",
  },

  {
    id: 2,
    icon: GiMeshNetwork,
    text: "What we think",
    link: "",
  },

  {
    id: 3,
    icon: IoIosCodeWorking,
    text: "Mission",
    link: "",
  },
];

export const aboutSecondColumnDropdownLinks = [
  {
    id: 0,
    icon: MdPeopleOutline,
    text: "Partners",
    link: "",
  },

  {
    id: 1,
    icon: GrTechnology,
    text: "Technology Expertise",
    link: "",
  },

  {
    id: 2,
    icon: PiBriefcase,
    text: "Careers",
    link: "",
  },

  {
    id: 3,
    icon: LuContact,
    text: "Contact",
    link: "",
  },
];

export const mainLinks = [
  {
    id: 0,
    text: "Platforms",
    arg: "platform",
  },

  {
    id: 1,
    text: "Solutions",
    arg: "solutions",
  },

  {
    id: 2,
    text: "Why RadixTech",
    arg: "why",
  },

  {
    id: 3,
    text: "About Us",
    arg: "about",
  },

  {
    id: 4,
    text: "Insights",
    arg: "insights",
  },
];

export const socialLinksData = [
  {
    id: 0,
    link: "https://www.linkedin.com/company/weareradix/",
    icon: FaLinkedinIn,
  },

  {
    id: 1,
    link: "https://www.youtube.com/@weareRadixtech",
    icon: FaYoutube,
  },

  {
    id: 2,
    link: "https://www.facebook.com/weareradix/",
    icon: FaFacebookF,
  },

  {
    id: 3,
    link: "https://www.instagram.com/radixtechinsight/",
    icon: IoLogoInstagram,
  },
];

export const slideContentData = [
  {
    title: "Data Services",
    description:
      "From data collection and management to advanced analytics and visualization, we provide a full suite of data services tailored to meet your unique needs.",
    imgSrc: DataServicesImg,
  },

  {
    title: "Reporting Services",
    description:
      "Save time and reduce errors with automated and real-time reporting systems that ensure transparency and accountability with stakeholders.",
    imgSrc: ReportingServicesImg,
  },

  {
    title: "Information & Communication Technology for Development (ICT4D)",
    description:
      "Empower your team with training programs, mentoring, and capacity-building services focused on data collection, analysis, and reporting.",
    imgSrc: Ict4dImg,
  },

  {
    title: "Capacity Building",
    description:
      "Empower your team with training programs, mentoring, and capacity-building services focused on data collection, analysis, and reporting.",
    imgSrc: CapacityBuildingImg,
  },

  {
    title: "Geographic Information Systems (GIS)",
    description:
      "Visualize data spatially to reveal trends, connections, and patterns for better decision-making in development and humanitarian contexts.",
    imgSrc: GisImg,
  },

  {
    title: "Advanced Machine Learning",
    description:
      "Easily build predictive models with cutting-edge machine learning capabilities without requiring deep technical knowledge.",
    imgSrc: AmlImg,
  },

  {
    title: "Data Maturity Assessment",
    description:
      "Understand your organization’s data readiness to drive value. We assess data quality, standardization, and accessibility, helping your business evolve.",
    imgSrc: DmaImg,
  },
];

export const aboutAccodionData = [
  {
    title: "What We Do",
    description:
      "We provide data-driven solutions that empower organizations to make informed decisions in humanitarian aid and development. We simplifying data for effective aid and humanitarian action. Making complex data easier to understand and use, enabling aid workers and humanitarian organizations to make more informed, timely decisions.",
  },

  {
    title: "Who We Are",
    description:
      "We are team of experienced aid workers and development practitioners dedicated to delivering innovative digital solutions that support nonprofits, donor and aid organization worldwide.",
  },

  {
    title: "What We Think",
    description:
      "We believe in the power of technology to transform aid work, making it more efficient, impactful, and accessible. It involves streamlining data processes—such as data collection, analysis, and reporting—so that these organizations can focus on taking effective actions to address the needs of vulnerable communities and manage emergency responses more efficiently",
  },
];

export const whyRadixAccodionData = [
  {
    title: "Contextual understanding",
    description:
      "We have a deep understanding of ways of working of humanitarian and development sector. We are well aware that our products should be designed in a way that those connect a range of users from communities, government, private sector and local organizations so that they can make coherent efforts using the latest digital services, shared platforms and cloud computing tools & technologies.",
  },

  {
    title: "User-Friendly Solutions",
    description:
      "RadixTech ensures data is accessible and actionable for everyone in your organization, enhancing operational efficiency and reducing risks.",
  },

  {
    title: "What Makes Us Different?",
    list: [
      {
        title: "Nonprofit Expertise:",
        description:
          "With a focus on nonprofit challenges, we develop missiondriven, innovative solutions that help organizations achieve their goals",
      },

      {
        title: "Mission-Driven Innovation:",
        description:
          "We leverage the latest technologies to develop innovative solutions that help nonprofits achieve their goals more effectively and efficiently.",
      },

      {
        title: "Dedicated Support:",
        description:
          "We are committed to supporting your mission. Our team works closely with you to understand your needs and deliver solutions that truly make a difference.",
      },
    ],
  },

  {
    title: "All in with RadixTech",
    description:
      "At RadixTech, we empower organizations to drive transformational change. Our peoplecentric approach ensures your team is equipped to lead and succeed, leveraging innovative tools and insights that fuel growth and efficiency.",
  },
];

export const ourPartnersAccodionData = [
  {
    title: "Reliable Industrial Solutions Engineering (RISE)",
    description:
      "Reliable Industrial Solutions Engineering (RISE), an ISO 45001 and ISO 9001 certified company.",
  },

  {
    title: "ISomLab",
    description: "ISomLab, operating in Somalia, Türkiye, and Germany.",
  },
];

export const techExpertiseAccodionData = [
  {
    title: "Technology Expertise",
    description:
      "RadixTech harnesses a wide array of advanced technologies to meet the diverse needs of international nonprofit organizations involved in humanitarian responses and long-term development projects.",
  },

  {
    title: "Microsoft Ecosystem",
    description:
      "Leveraging the power of Microsoft tools such as Azure, Power BI, and SQL Server for secure data storage, analysis, and scalable cloud solutions.",
  },

  {
    title: "Data Analytics & Visualization",
    description:
      "Advanced analytics using platforms like Tableau, Power BI, and Google Data Studio to transform complex data into clear, actionable insights.",
  },

  {
    title: "Geographic Information Systems (GIS)",
    description:
      "Utilizing GIS platforms like ArcGIS and QGIS to map and analyze geographic data, supporting better decision-making for humanitarian aid and development work.",
  },

  {
    title: "Cloud-Based Platforms",
    description:
      "Working with AWS, Google Cloud, and Microsoft Azure for scalable, flexible cloud solutions that support remote and on-the-ground operations globally.",
  },

  {
    title: "Data Security & Compliance",
    description:
      "Ensuring robust data protection and privacy by adhering to GDPR standards and implementing best practices for data security across all platforms.",
  },

  {
    title: "Enterprise Resource Planning (ERP)",
    description:
      "Experience with ERP systems such as SAP, Oracle, and Salesforce to streamline operations, financial management, and logistics in large-scale nonprofit organizations.",
  },

  {
    title: "Mobile Data Collection",
    description:
      "Using mobile-based platforms such as SurveyCTO, CommCare, KoboToolbox, and ODK for real-time data collection, even in remote or low-connectivity areas.",
  },

  {
    title: "Integration & Interoperability",
    description:
      "Ensuring seamless integration with essential systems like MEAL, HR, Finance, Supply Chain, and MIS tools, enabling a unified approach to data and decision-making.",
  },
];

export const misAccordionData = [
  {
    title: "Overview",
    list: [
      {
        description:
          "Comprehensive platform for integrating and analysing data from various humanitarian sources.",
      },

      {
        description:
          "It collects and analyses data from a wide range of tools, including humanitarian categorization and prioritization systems, award management systems, expenditure tracking, HR, beneficiary counts, and supply chains.",
      },

      {
        description:
          "Integrates data from external sources such as the INFORM Severity Index, UNHCR's Refugee Data Finder, and the World Bank’s country population data, among others.",
      },

      {
        description:
          "Provides insights into categories such as response details, donor contributions, regional breakdowns, and expenditure. An understanding of country dynamics, and insights into general context, operational specifics, active and pipeline awards, regional and country breakdowns, thematic breakdowns, expenditure insights, and key figures sourced from secondary data.",
      },

      {
        description:
          "Offers advanced analytics like predictive modelling for informed decision-making.",
      },
    ],
  },

  {
    title: "Key Features",
    list: [
      {
        title: "Automated Processes:",
        description:
          " Focuses on decision-making by reducing manual data processing.",
      },

      {
        title: "Data Export:",
        description: " Allows exporting of data anytime.",
      },

      {
        title: "Real-Time Data Compilation:",
        description:
          " Immediate access to real-time data collected from field operations.",
      },
    ],
  },

  {
    title: "Shared Features",
    list: [
      {
        title: "Accessibility:",
        description:
          " Available through cloud-based SaaS, self-managed infrastructure, or desktop software.",
      },

      {
        title: "User-Friendly Interface:",
        description: " Intuitive for users with various technical skills.",
      },

      {
        title: "Reports and Dashboards:",
        description:
          " Instant data analysis and reporting with customized templates.",
      },

      {
        title: "Data on GIS Maps:",
        description:
          " Allows viewing and filtering data submissions on a web map for analysis.",
      },

      {
        title: "Export Options:",
        description:
          " Data can be exported to various formats such as Excel, CSV, and KML.",
      },

      {
        title: "Customizable Teams and User Roles:",
        description:
          " Supports managing multiple teams and projects with tailored user permissions.",
      },

      {
        title: "Single Sign-On (SSO):",
        description: " Seamless user login via Google, Okta, or Azure AD.",
      },

      {
        title: "Multiple Server Locations:",
        description: " Secure hosting in the US or EU data centers.",
      },

      {
        title: "Compliance & Security:",
        description:
          " Adheres to GDPR, with secure data storage, encryption, and user authentication. Security measures such as 2-factor authentication.",
      },
    ],
  },
];

export const mealAccordionData = [
  {
    title: "Overview",
    list: [
      {
        description:
          "A platform for tracking and assessing humanitarian and development project outcomes.",
      },

      {
        description:
          "Focuses on setting performance targets, real-time monitoring, and generating reports.",
      },

      {
        description:
          "Tools for setting performance targets, monitoring progress, and generating aggregated reports.",
      },
    ],
  },

  {
    title: "Key Features",
    list: [
      {
        title: "Performance Tracking:",
        description:
          " Tools for monitoring progress at various levels (country, program, field).",
      },

      {
        title: "Real-Time Data:",
        description: " Data visualization tools to monitor and analyze data.",
      },

      {
        title: "Advanced Integration:",
        description: "  Compatible with tools like Tableau and Power BI.",
      },

      {
        title: "Low-Resource Settings:",
        description:
          " Designed for low-resource environments to provide end-toend solutions.",
      },
    ],
  },

  {
    title: "Shared Features",
    list: [
      {
        title: "Accessibility:",
        description:
          " Available through cloud-based SaaS, self-managed infrastructure, or desktop software.",
      },

      {
        title: "User-Friendly Interface:",
        description: " Intuitive for users with various technical skills.",
      },

      {
        title: "Reports and Dashboards:",
        description:
          " Instant data analysis and reporting with customized templates.",
      },

      {
        title: "Data on GIS Maps:",
        description:
          " Allows viewing and filtering data submissions on a web map for analysis.",
      },

      {
        title: "Export Options:",
        description:
          " Data can be exported to various formats such as Excel, CSV, and KML.",
      },

      {
        title: "Customizable Teams and User Roles:",
        description:
          " Supports managing multiple teams and projects with tailored user permissions.",
      },

      {
        title: "Single Sign-On (SSO):",
        description: " Seamless user login via Google, Okta, or Azure AD.",
      },

      {
        title: "Multiple Server Locations:",
        description: " Secure hosting in the US or EU data centers.",
      },

      {
        title: "Compliance & Security:",
        description:
          " Adheres to GDPR, with secure data storage, encryption, and user authentication. Security measures such as 2-factor authentication.",
      },
    ],
  },
];

export const brsAccordionData = [
  {
    title: "Overview",
    list: [
      {
        description:
          "A Beneficiary Registration System is designed to identify, register, and manage individuals or groups eligible to receive aid or services. ",
      },

      {
        description:
          "An essential system for tracking who receives assistance and ensuring the aid reaches those in need.",
      },
    ],
  },

  {
    title: "Key Features",
    list: [
      {
        title: "Data Collection:",
        description:
          " Captures key information like names, demographics, and identification documents.",
      },

      {
        title: "Eligibility Verification:",
        description:
          " Ensures the right individuals receive aid through crossreferencing with guidelines or authorities.",
      },

      {
        title: "Unique Identification:",
        description:
          " Provides each beneficiary with a unique ID to prevent duplication.",
      },

      {
        title: "Privacy & Security:",
        description:
          " Robust protocols for data protection and compliance with GDPR.",
      },

      {
        title: "Offline Access:",
        description:
          " Data collection even in low-connectivity areas with synchronization later.",
      },

      {
        title: "Customizable Forms:",
        description:
          " Tailored registration forms to collect specific data as needed.",
      },

      {
        title: "Reporting & Analytics:",
        description:
          " Offers tools for analyzing aid distribution and tracking who has received assistance.",
      },
    ],
  },

  {
    title: "Shared Features",
    list: [
      {
        title: "Accessibility:",
        description:
          " Available through cloud-based SaaS, self-managed infrastructure, or desktop software.",
      },

      {
        title: "User-Friendly Interface:",
        description: " Intuitive for users with various technical skills.",
      },

      {
        title: "Reports and Dashboards:",
        description:
          " Instant data analysis and reporting with customized templates.",
      },

      {
        title: "Data on GIS Maps:",
        description:
          " Allows viewing and filtering data submissions on a web map for analysis.",
      },

      {
        title: "Export Options:",
        description:
          " Data can be exported to various formats such as Excel, CSV, and KML.",
      },

      {
        title: "Customizable Teams and User Roles:",
        description:
          " Supports managing multiple teams and projects with tailored user permissions.",
      },

      {
        title: "Single Sign-On (SSO):",
        description: " Seamless user login via Google, Okta, or Azure AD.",
      },

      {
        title: "Multiple Server Locations:",
        description: " Secure hosting in the US or EU data centers.",
      },

      {
        title: "Compliance & Security:",
        description:
          " Adheres to GDPR, with secure data storage, encryption, and user authentication. Security measures such as 2-factor authentication.",
      },
    ],
  },
];

export const cashAccordionData = [
  {
    title: "Overview",
    list: [
      {
        description:
          "The Cash and Humanitarian Aid Distribution System is a comprehensive digital platform designed to manage the logistics of aid distribution, inventory, and cashbased interventions (CBIs).",
      },

      {
        description:
          "It streamlines the process of delivering both physical aid and cash assistance to beneficiaries in humanitarian and development settings.",
      },

      {
        description:
          "This system plays a critical role in enabling organizations to provide direct financial support to those in need, such as in disaster recovery, emergency relief, or economic development programs.",
      },
    ],
  },

  {
    title: "Key Features",
    list: [
      {
        title: "Data Management:",
        description:
          " Supports diverse data types (quantitative, qualitative, GPS).",
      },

      {
        title: "Cash Distribution:",
        description: " Tracks and secures cash transfers to beneficiaries.",
      },

      {
        title: "Inventory Management:",
        description:
          " Tracks in-kind aid like food and supplies, reducing waste.",
      },

      {
        title: "Real-Time Monitoring:",
        description:
          " Provides real-time updates on cash and aid distribution.",
      },

      {
        title: "Scalability:",
        description: " Adaptable for use at local, regional, or global levels.",
      },

      {
        title: "Secure Transactions:",
        description:
          " Ensures safe transfers with fraud prevention and encryption.",
      },

      {
        title: "System Integration:",
        description:
          " Integrates with other systems like MEAL and beneficiary registration.",
      },
    ],
  },

  {
    title: "Shared Features",
    list: [
      {
        title: "Accessibility:",
        description:
          " Available through cloud-based SaaS, self-managed infrastructure, or desktop software.",
      },

      {
        title: "User-Friendly Interface:",
        description: " Intuitive for users with various technical skills.",
      },

      {
        title: "Reports and Dashboards:",
        description:
          " Instant data analysis and reporting with customized templates.",
      },

      {
        title: "Data on GIS Maps:",
        description:
          " Allows viewing and filtering data submissions on a web map for analysis.",
      },

      {
        title: "Export Options:",
        description:
          " Data can be exported to various formats such as Excel, CSV, and KML.",
      },

      {
        title: "Customizable Teams and User Roles:",
        description:
          " Supports managing multiple teams and projects with tailored user permissions.",
      },

      {
        title: "Single Sign-On (SSO):",
        description: " Seamless user login via Google, Okta, or Azure AD.",
      },

      {
        title: "Multiple Server Locations:",
        description: " Secure hosting in the US or EU data centers.",
      },

      {
        title: "Compliance & Security:",
        description:
          " Adheres to GDPR, with secure data storage, encryption, and user authentication. Security measures such as 2-factor authentication.",
      },
    ],
  },
];

export const dataHubAccordionData = [
  {
    title: "Overview",
    list: [
      {
        description:
          "A comprehensive data management system that seamlessly stores, manages, and integrates multiple data types, enabling smooth data exchange and enhanced software interoperability.",
      },
    ],
  },

  {
    title: "Key Features",
    list: [
      {
        description:
          "Drag-and-drop interface for designing questionnaires and posting them on smart devices.",
      },

      {
        description:
          "Ensures team alignment with the most recent data without compromising security and privacy.",
      },

      {
        description:
          "Paperless mobile data collection with real-time synchronization through cloud services.",
      },

      {
        description:
          "Offline data storage until devices reconnect to the internet.",
      },

      {
        description: "Multi-language form translations.",
      },
    ],
  },

  {
    title: "Shared Features",
    list: [
      {
        title: "Accessibility:",
        description:
          " Available through cloud-based SaaS, self-managed infrastructure, or desktop software.",
      },

      {
        title: "User-Friendly Interface:",
        description: " Intuitive for users with various technical skills.",
      },

      {
        title: "Reports and Dashboards:",
        description:
          " Instant data analysis and reporting with customized templates.",
      },

      {
        title: "Data on GIS Maps:",
        description:
          " Allows viewing and filtering data submissions on a web map for analysis.",
      },

      {
        title: "Export Options:",
        description:
          " Data can be exported to various formats such as Excel, CSV, and KML.",
      },

      {
        title: "Customizable Teams and User Roles:",
        description:
          " Supports managing multiple teams and projects with tailored user permissions.",
      },

      {
        title: "Single Sign-On (SSO):",
        description: " Seamless user login via Google, Okta, or Azure AD.",
      },

      {
        title: "Multiple Server Locations:",
        description: " Secure hosting in the US or EU data centers.",
      },

      {
        title: "Compliance & Security:",
        description:
          " Adheres to GDPR, with secure data storage, encryption, and user authentication. Security measures such as 2-factor authentication.",
      },
    ],
  },
];
