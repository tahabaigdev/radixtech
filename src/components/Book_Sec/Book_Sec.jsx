import { Calendar } from "lucide-react";
import CtaImage from "../../assets/images/cta-image.svg";

const Book_Sec = () => {
  return (
    <section>
      <div className="container py-[8rem] xl:py-[10rem]">
        <div className="grid h-[100%] w-[100%] grid-cols-1 items-center gap-[4rem] bg-primaryColor p-[4rem] lg:grid-cols-2">
          <div>
            <h3 className="text-center text-[4rem] font-medium leading-[5rem] tracking-[-0.64px] text-whiteColor sm:text-[5rem] sm:leading-[6rem] lg:text-left">
              Schedule a demo
            </h3>

            <p className="mb-[4rem] mt-[1rem] text-center text-[1.8rem] font-medium leading-[3.24rem] text-whiteColor lg:text-left">
              Learn how we can solve data issues for your organization, with our
              tech platforms and services specially designed for humanitarian
              and development work.
            </p>

            <div className="text-center lg:text-left">
              <a
                href="mailto:info@RadixTech.org"
                className="inline-flex h-[4.8rem] min-w-[14.8475rem] items-center justify-center gap-[1rem] bg-blackColor px-[2rem] py-[1.2rem] text-[1.6rem] font-semibold leading-[2.4rem] text-whiteColor"
              >
                Schedule a demo <Calendar />
              </a>
            </div>
          </div>

          <div className="flex justify-center overflow-hidden rounded-[1.2rem]">
            <img src={CtaImage} alt="Cta Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book_Sec;
