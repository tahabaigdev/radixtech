import React, { lazy, Suspense } from "react";
import Hero_Sec from "../../components/Hero_Sec/Hero_Sec";

// Lazy load the other components
const About_Sec = lazy(() => import("../../components/About_Sec/About_Sec"));

const Insights_Sec = lazy(
  () => import("../../components/Insights_Sec/Insights_Sec"),
);
const Products_Sec = lazy(
  () => import("../../components/Products_Sec/Products_Sec"),
);
const Testimonials_Sec = lazy(
  () => import("../../components/Testimonials_Sec/Testimonials_Sec"),
);
const Solutions_Sec = lazy(
  () => import("../../components/Solutions_Sec/Solutions_Sec"),
);
const Client_Sec = lazy(() => import("../../components/Client_Sec/Client_Sec"));
const Schedule_Sec = lazy(
  () => import("../../components/Schedule_Sec/Schedule_Sec"),
);
const Services_Sec = lazy(
  () => import("../../components/Services_Sec/Services_Sec"),
);
const Why_Radix_Sec = lazy(
  () => import("../../components/Why_Radix_Sec/Why_Radix_Sec"),
);

const Home = () => {
  return (
    <>
      <Hero_Sec />

      <Suspense fallback={<div>Loading Client Section...</div>}>
        <Client_Sec />
      </Suspense>

      <Suspense fallback={<div>Loading Products Section...</div>}>
        <Products_Sec />
      </Suspense>

      <Suspense fallback={<div>Loading Solutions Section...</div>}>
        <Solutions_Sec />
      </Suspense>

      <Suspense fallback={<div>Loading Services Section...</div>}>
        <Services_Sec />
      </Suspense>

      <Suspense fallback={<div>Loading Testimonials...</div>}>
        <Testimonials_Sec />
      </Suspense>

      <Suspense fallback={<div>Loading About Section...</div>}>
        <About_Sec />
      </Suspense>

      <Suspense fallback={<div>Loading Why Radix Section...</div>}>
        <Why_Radix_Sec />
      </Suspense>

      <Suspense fallback={<div>Loading Insights Section...</div>}>
        <Insights_Sec />
      </Suspense>

      <Suspense fallback={<div>Loading Schedule Section...</div>}>
        <Schedule_Sec />
      </Suspense>
    </>
  );
};

export default Home;
