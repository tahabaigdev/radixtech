import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import About_Us from "./pages/About_Us/About_Us";
import Projects from "./pages/Projects/Projects";
import Service from "./pages/Service/Service";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About_Us />} />

        <Route path="/projects" element={<Projects />} />

        <Route path="/service" element={<Service />} />

        <Route path="/blog" element={<Blog />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
