import { whatWeData } from "../../constants";
import Common_Btn_2 from "../../styles/Common_Btn/Common_Btn_2";
import Common_Heading from "../../styles/Common_Heading/Common_Heading";

const What_We_Sec = () => {
  return (
    <section className="bg-[#FDD566]">
      <div className="container py-[8rem] xl:py-[10rem]">
        <div className="flex items-start justify-between gap-[8rem]">
          <div className="max-w-[100rem]">
            <Common_Heading
              title="We offer software solutions, data analysis, mapping, management support, and training."
              subTitle="What We Do"
              titleColor="#000000"
              subTitleColor="#4F4F4F"
            />
          </div>
        </div>

        <div className="mt-[8rem] flex flex-col gap-[4rem]">
          {whatWeData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-[4rem] border-b border-solid border-blackColor pb-[4rem] sm:flex-row"
            >
              <div>
                <item.icon className="h-[8rem] w-[8rem] stroke-1" />
              </div>

              <div className="flex flex-col gap-[1rem] text-center sm:text-left">
                <h3 className="text-[3.6rem] font-semibold leading-[4.32rem] tracking-[-0.36px] text-blackColor">
                  {item.title}
                </h3>

                <p className="text-[1.8rem] font-medium leading-[3.24rem] text-blackColor">
                  {item.subTitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default What_We_Sec;
