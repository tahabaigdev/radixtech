import Common_Heading from "../../styles/Common_Heading/Common_Heading";
import AboutSecImg from "../../assets/images/about-sec-img.avif";

const About_Sec = () => {
  return (
    <section className="bg-blackColor">
      <div className="container py-[10rem]">
        <div className="grid grid-cols-2 gap-[4rem]">
          <div className="text-whiteColor">
            <Common_Heading
              title="Helping brands and individuals connect on a deeper level."
              subTitle="About Us"
            />
          </div>

          <div className="flex justify-end">
            <div className="flex max-w-[540px] flex-col gap-[2rem]">
              <p className="text-[1.8rem] font-medium leading-[3.24rem] text-whiteColor">
                TechNova takes pride in providing the best mobile, web
                development services over the course of 10+ years. Throughout
                that time, we have established ourselves as a trusted all
                partner, completing 915+ projects with our in-house team of 110+
                employees.
              </p>

              <div className="h-[28rem] w-[100%]">
                <img
                  src={AboutSecImg}
                  alt="About Image"
                  className="h-[100%] w-[100%] object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-[8rem] grid grid-cols-4 gap-[4rem]">
          <div className="flex flex-col items-start text-left text-whiteColor">
            <h4 className="text-[6.4rem] font-semibold leading-[7.68rem] tracking-[-0.64px]">
              915+
            </h4>

            <h5 className="text-[1.6rem] font-medium leading-[2.56rem]">
              Projects Completed
            </h5>
          </div>

          <div className="flex flex-col items-start text-left text-whiteColor">
            <h4 className="text-[6.4rem] font-semibold leading-[7.68rem] tracking-[-0.64px]">
              10
            </h4>

            <h5 className="text-[1.6rem] font-medium leading-[2.56rem]">
              Years of Experience
            </h5>
          </div>

          <div className="flex flex-col items-start text-left text-whiteColor">
            <h4 className="text-[6.4rem] font-semibold leading-[7.68rem] tracking-[-0.64px]">
              110+
            </h4>

            <h5 className="text-[1.6rem] font-medium leading-[2.56rem]">
              Employees
            </h5>
          </div>

          <div className="flex flex-col items-start text-left text-whiteColor">
            <h4 className="text-[6.4rem] font-semibold leading-[7.68rem] tracking-[-0.64px]">
              2k+
            </h4>

            <h5 className="text-[1.6rem] font-medium leading-[2.56rem]">
              Happy Customers
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About_Sec;
