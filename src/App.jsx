import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";

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

  return (
    <div className="app">
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
