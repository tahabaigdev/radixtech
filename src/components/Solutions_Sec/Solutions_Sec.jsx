import { solutionsData } from "../../constants";
import Common_Heading from "../../styles/Common_Heading/Common_Heading";

const Solutions_Sec = () => {
  return (
    <section id="solutions" className="overflow-x-hidden bg-tertiaryColor">
      <div className="container py-[6rem]">
        <div className="flex items-start justify-center gap-[8rem] text-center xl:justify-between xl:text-left">
          <div className="max-w-[100rem]">
            <Common_Heading
              title="Optimized for productivity, cost savings, and growth potential."
              subTitle="Solutions"
              titleColor="#000000"
              subTitleColor="#4F4F4F"
            />
          </div>
        </div>

        <div className="mt-[8rem] grid gap-[3.2rem] lg:grid-cols-2">
          {solutionsData.map((item, index) => {
            return (
              <div
                key={item.id}
                className="flex flex-col items-center gap-[1rem] border-b border-[transparent] border-primaryColor bg-[#FAF8F5] p-[2rem] pb-[4rem] shadow-shadow2 transition-all duration-300 hover:border-[#e9e2da] hover:shadow-shadow3 sm:flex-row"
              >
                <div>
                  <item.icon className="h-[6rem] w-[6rem] stroke-1 text-primaryColor" />
                </div>

                <div className="flex flex-col gap-[.5rem] text-center sm:text-left">
                  <h3 className="text-[2rem] font-semibold leading-[3rem] tracking-[-0.36px] text-blackColor">
                    {item.title}
                  </h3>

                  <p className="text-[1.4rem] font-medium leading-[3rem] text-blackColor lg:max-w-[40rem]">
                    {item.subTitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions_Sec;
