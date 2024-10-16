import Common_Heading from "../../styles/Common_Heading/Common_Heading";
import Filter_Tab_1 from "../Filter_Tab/Filter_Tab_1";

const Services_Sec = () => {
  return (
    <section id="services" className="overflow-x-hidden">
      <div className="container py-[6rem]">
        <div className="flex justify-center text-center xl:justify-start xl:text-left">
          <div>
            <Common_Heading
              title="Level up your quality of work with value driven results"
              subTitle="Services"
              titleColor="#000000"
              subTitleColor="#4F4F4F"
            />
          </div>
        </div>

        <div className="mt-[4rem]">
          <Filter_Tab_1 />
        </div>
      </div>
    </section>
  );
};

export default Services_Sec;
