import About_Sec from "../../components/About_Sec/About_Sec";
import Blog_Sec from "../../components/Blog_Sec/Blog_Sec";
import Hero_Sec from "../../components/Hero_Sec/Hero_Sec";
import Portfolio_Sec from "../../components/Portfolio_Sec/Portfolio_Sec";
import What_We_Sec from "../../components/What_We_Sec/What_We_Sec";

const Home = () => {
  return (
    <>
      <Hero_Sec />

      <About_Sec />

      <Portfolio_Sec />

      <What_We_Sec />

      <Blog_Sec />
    </>
  );
};

export default Home;
