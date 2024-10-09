import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Platform from "./pages/Platform/Platform";
import Solutions from "./pages/Solutions/Solutions";
import Products from "./pages/Products/Products";
import Resources from "./pages/Resources/Resources";
import Contact from "./pages/Contact/Contact";
import Why_Radixtech from "./pages/Why_Radixtech/Why_Radixtech";
import About from "./pages/About/About";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/platform" element={<Platform />} />

        <Route path="/solutions" element={<Solutions />} />

        <Route path="/products" element={<Products />} />

        <Route path="/resources" element={<Resources />} />

        <Route path="/why" element={<Why_Radixtech />} />

        <Route path="/about" element={<About />} />

        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
