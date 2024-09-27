import { ArrowUpRight } from "lucide-react";
import Common_Btn_2 from "../../styles/Common_Btn/Common_Btn_2";
import Common_Heading from "../../styles/Common_Heading/Common_Heading";
import { portfolioData } from "../../constants";

const Portfolio_Sec = () => {
  return (
    <section>
      <div className="container py-[10rem]">
        <div className="flex items-start justify-between gap-[4rem]">
          <div>
            <Common_Heading
              title="The experiences are super innovative and creative."
              subTitle="Portfolio"
              titleColor="#000000"
              subTitleColor="#4F4F4F"
            />
          </div>

          <div>
            <Common_Btn_2
              link="/projects"
              linkText="View all Works"
              textColor="#000000"
              iconColor="#000000"
            />
          </div>
        </div>

        <div className="mt-[4rem] grid grid-cols-2 gap-[4rem]">
          {portfolioData.map((item) => (
            <a key={item.id} href="#" className="group">
              <div className="flex flex-col gap-[1rem]">
                <div className="aspect-[1.5/1] overflow-hidden">
                  <img
                    src={item.imgUrl}
                    alt="Portfolio Image"
                    className="h-[100%] w-[100%] object-cover object-center transition-all duration-[0.3s] ease-out group-hover:scale-[1.05]"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-[2rem] font-bold capitalize leading-[3rem] text-blackColor">
                      {item.title}
                    </h4>

                    <h5 className="text-[1.2rem] font-semibold uppercase leading-[1.56rem] tracking-[0.4px] text-textPrimary">
                      {item.subTitle}
                    </h5>
                  </div>

                  <div>
                    <ArrowUpRight className="h-[2rem] w-[2rem] transition-all duration-[0.3s] ease-out group-hover:scale-[1.4]" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio_Sec;
