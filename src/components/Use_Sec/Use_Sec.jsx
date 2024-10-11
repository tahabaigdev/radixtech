import Common_Heading from "../../styles/Common_Heading/Common_Heading";
import Filter_Tab_1 from "../Filter_Tab/Filter_Tab_1";

const Use_Sec = () => {
  return (
    <section className="bg-tertiaryColor overflow-x-hidden">
      <div className="container py-[2.1rem]">
        <div className="flex justify-center text-center xl:justify-start xl:text-left">
          <div>
            <Common_Heading
              title="Learn what RadixTech products can do for you."
              subTitle="Platforms"
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

export default Use_Sec;
