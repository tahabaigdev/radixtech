import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import { Helmet } from "react-helmet-async";

const App = () => {
  const lenis = useRef(null);

  useEffect(() => {
    // Initialize Lenis when the component mounts
    lenis.current = new Lenis({
      duration: 2, // Adjust speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
      direction: "vertical", // Enable vertical scrolling
      smooth: true, // Enable smooth scrolling
    });

    function raf(time) {
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => lenis.current.destroy();
  }, []);

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is Radixtech used for??",
        acceptedAnswer: {
          "@type": "Answer",
          text: "<p>Radixtech is an industry-leading, cloud-based data engineering tool used for processing and transforming massive quantities of data and exploring the data through machine learning models. Recently added to Azure, it's the latest big data tool for the Microsoft cloud..</p>",
        },
      },
      {
        "@type": "Question",
        name: "Is Radixtech an ETL tool?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In the ever-evolving landscape of data processing and analysis, organizations are continually seeking robust solutions to streamline their Extract, Transform, Load (ETL) processes. Radixtech, a cloud-based platform built on Apache Spark, has emerged as a popular choice for ETL workflows.06-Mar-2024.",
        },
      },
    ],
  };

  const youtubeSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Data-Driven Dialogues: Data Speaks, We Listen",
    description: `"Data-Driven Dialogues" is a podcast produced by RadixTech that aims to empower professionals with practical insights on digital innovation and data-driven decision-making. 🎧 Tune in to hear interviews with top global experts sharing their wisdom on navigating the fast-evolving worlds of #Data, #Technology, and #DigitalTransformation. Through engaging conversations and real-world examples, the podcast provides valuable advice, inspiring case studies, and practical coaching sessions to help listeners unlock innovative solutions.`,
    thumbnailUrl: "https://youtu.be/NzsLyoaGF88",
    uploadDate: "2024-10-12",
    duration: "PT2M30S",
    contentUrl: "https://www.youtube.com/watch?v=NzsLyoaGF88",
    embedUrl: "https://www.youtube.com/embed/NzsLyoaGF88",
    publisher: {
      "@type": "Organization",
      name: "RadixTech",
      logo: {
        "@type": "ImageObject",
        url: "https://your-logo-url.com",
      },
    },
  };

  const breadcurmbSchema = {
    "@context": "https://schema.org/",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Facebook",
        item: "https://www.facebook.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "LinkedIn",
        item: "https://www.linkedin.com/company/103920896/admin/dashboard/",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Instagram",
        item: "https://www.instagram.com/radixtechinsight/",
      },
    ],
  };

  return (
    <div className="app">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaMarkup)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(youtubeSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(breadcurmbSchema)}
        </script>
      </Helmet>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
