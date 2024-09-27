import BgGrid from "../../assets/images/grid.svg";
import Common_Btn from "../../styles/Common_Btn/Common_Btn";
import HeroAvatar1 from "../../assets/images/hero-avatar-1.avif";
import HeroAvatar2 from "../../assets/images/hero-avatar-2.avif";
import HeroAvatar3 from "../../assets/images/hero-avatar-3.avif";
import HeroAvatar4 from "../../assets/images/hero-avatar-4.avif";
import HeroAvatar5 from "../../assets/images/hero-avatar-5.avif";
import RatingStar from "../../assets/images/rating-star.svg";
import HeroImg from "../../assets/images/hero-img.avif";

const Hero_Sec = () => {
  return (
    <section className="relative overflow-hidden">
      <img
        src={BgGrid}
        alt="Background Grid"
        className="absolute left-[50%] top-0 translate-x-[-50%]"
      />

      <div className="container relative z-[1] py-[8rem]">
        <div className="grid grid-cols-2 items-center gap-[8rem]">
          <div className="flex flex-col">
            <h1 className="text-[8rem] font-bold leading-[9.6rem] tracking-[-2px] text-blackColor">
              We Are a Digital Design Agency.
            </h1>

            <p className="mb-[4rem] mt-[2rem] text-[1.8rem] font-medium leading-[3.24rem] text-textPrimary">
              That's how fast it goes and I help startups and tech companies
              develop pixel-perfect designs.
            </p>

            <Common_Btn link="/contact" linkText="Let's Talk" />

            <div className="mt-[4rem] flex items-center gap-[2rem]">
              <div>
                <ul className="flex items-center">
                  {[
                    HeroAvatar1,
                    HeroAvatar2,
                    HeroAvatar3,
                    HeroAvatar4,
                    HeroAvatar5,
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="hero-avatar h-[4.8rem] w-[4.8rem] overflow-hidden rounded-[50%] border-[2px] border-solid border-[#faf8f5]"
                    >
                      <img src={item} alt="Avatar Image" />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-[.4rem]">
                <h4 className="text-[2rem] font-medium text-[#333333]">
                  4.5 Stars
                </h4>

                <img src={RatingStar} alt="Rating Star" />
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="h-[60rem] w-[100%]">
              <img
                src={HeroImg}
                alt="Hero Image"
                className="h-[100%] w-[100%] object-cover object-center"
              />
            </div>

            <div className="absolute bottom-0 right-0 max-w-[30rem] rounded-tl-[6rem] bg-[#faf8f5] px-[2rem] py-[4rem]">
              <ul className="flex flex-wrap justify-end gap-[1.4rem]">
                {[
                  "Branding",
                  "Web Design",
                  "UI+UX",
                  "Development",
                  "Mobile App",
                  "Webflow",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="inline-flex rounded-[3.4rem] border border-solid border-textPrimary px-[1.5rem] py-[.4rem] text-[1.6rem] font-medium text-textPrimary"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero_Sec;
