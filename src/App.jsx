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
    "@context": "http://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is RadixTech used for?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RadixTech is an industry-leading, cloud-based data engineering tool used for processing and transforming massive quantities of data and exploring the data through machine learning models. Recently added to Azure, it's the latest big data tool for the Microsoft cloud. Learn more on our <a href='https://radixtech.org/'>official website</a>.",
        },
      },
      {
        "@type": "Question",
        name: "Is RadixTech an ETL tool?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RadixTech is a cloud-based platform built on Apache Spark, ideal for Extract, Transform, Load (ETL) processes. It simplifies ETL workflows for data processing. Discover more details on our <a href='https://radixtech.org/services'>services page</a>.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of tool is RadixTech?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RadixTech is a cloud platform simplifying complex data management, integrated with Azure, AWS, and Google Cloud. It's perfect for big data management. Learn more <a href='https://azure.microsoft.com/en-us/products/data-factory'>here</a>.",
        },
      },
      {
        "@type": "Question",
        name: "Does RadixTech require coding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RadixTech allows you to analyze vast data sets, discover insights, and make predictions with just a few clicks, without writing code. For more information, visit our <a href='https://radixtech.org/solutions'>solutions page</a>.",
        },
      },
      {
        "@type": "Question",
        name: "Is RadixTech a database?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "RadixTech integrates with databases but is not a database itself. It offers a virtual data warehouse interface for managing large datasets stored as files. Learn more on our <a href='https://www.reddit.com/'>Reddit page</a>.",
        },
      },
      {
        "@type": "Question",
        name: "What is RadixTech and why is it used?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We have a deep understanding of the humanitarian and development sectors. Our products are designed to connect a range of users from communities, governments, private sectors, and local organizations to make coherent efforts using the latest digital services, shared platforms, and cloud computing tools & technologies. Learn more about our mission on our <a href='https://radixtech.org/about'>About Us page</a>.",
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
        name: "Hero",
        item: "https://www.radixtech.org/#hero",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.radixtech.org/#platform",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Solutions",
        item: "https://www.radixtech.org/#solutions",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Services",
        item: "https://www.radixtech.org/#services",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "About",
        item: "https://www.radixtech.org/#about",
      },
      {
        "@type": "ListItem",
        position: 6,
        name: "Why",
        item: "https://www.radixtech.org/#why",
      },
      {
        "@type": "ListItem",
        position: 7,
        name: "Insights",
        item: "https://www.radixtech.org/#insights",
      },
      {
        "@type": "ListItem",
        position: 8,
        name: "Contact",
        item: "https://www.radixtech.org/#contact",
      },
    ],
  };

  const socialProfileSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "RadixTech",
    url: "https://radixtech.org",
    sameAs: [
      "https://www.facebook.com/radixtechinsight",
      "https://www.linkedin.com/company/103920896",
      "https://www.instagram.com/radixtechinsight",
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

        <script type="application/ld+json">
          {JSON.stringify(socialProfileSchema)}
        </script>
      </Helmet>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
