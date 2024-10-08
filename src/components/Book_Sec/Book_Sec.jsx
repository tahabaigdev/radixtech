import { Calendar } from "lucide-react";
import CtaImage from "../../assets/images/cta-image.svg";

const Book_Sec = () => {
  return (
    <section>
      <div className="container py-[10rem]">
        <div className="grid h-[100%] w-[100%] grid-cols-2 items-center gap-[4rem] bg-primaryColor p-[4rem]">
          <div>
            <h3 className="text-[5rem] font-medium leading-[6rem] tracking-[-0.64px] text-whiteColor">
              Book your free consultation now
            </h3>

            <p className="mb-[4rem] mt-[1rem] text-[1.8rem] font-medium leading-[3.24rem] text-whiteColor">
              This is a placeholder text for the consultation call to action
              that can be a few lines in length.
            </p>

            <div>
              <button className="inline-flex h-[4.8rem] min-w-[14.8475rem] items-center justify-center gap-[1rem] bg-blackColor px-[2rem] py-[1.2rem] text-[1.6rem] font-semibold leading-[2.4rem] text-whiteColor">
                Book Now <Calendar />
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <img src={CtaImage} alt="Cta Image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book_Sec;
