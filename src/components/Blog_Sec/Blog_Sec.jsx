import { blogData } from "../../constants";
import Common_Btn_2 from "../../styles/Common_Btn/Common_Btn_2";
import Common_Heading from "../../styles/Common_Heading/Common_Heading";

const Blog_Sec = () => {
  return (
    <section className="bg-whiteColor">
      <div className="container py-[10rem]">
        <div className="flex items-start justify-between gap-[8rem]">
          <div className="max-w-[100rem]">
            <Common_Heading
              title="Check out our latest news while you're on the go!"
              subTitle="Latest Blogs"
              titleColor="#000000"
              subTitleColor="#4F4F4F"
            />
          </div>

          <div>
            <Common_Btn_2
              link="/blog"
              linkText="View all Blogs"
              textColor="#000000"
              iconColor="#000000"
            />
          </div>
        </div>

        <div className="mt-[4rem] grid grid-cols-2 gap-[4rem]">
          {blogData.map((item) => (
            <a key={item.id} href="#" className="group">
              <div className="flex flex-col gap-[1rem]">
                <div className="aspect-[1.5/1] overflow-hidden">
                  <img
                    src={item.imgUrl}
                    alt="Blog Image"
                    className="h-[100%] w-[100%] object-cover object-center transition-all duration-[0.3s] ease-out group-hover:scale-[1.05]"
                  />
                </div>

                <div className="flex flex-col gap-[1rem]">
                  <div className="flex items-center gap-[1rem] text-textPrimary">
                    <span className="text-[1.2rem] font-semibold uppercase leading-[1.56rem] tracking-[0.4px]">
                      {item.category}
                    </span>{" "}
                    <div className="h-[.6rem] w-[.6rem] bg-[#FCB900]"></div>{" "}
                    <span className="text-[1.4rem] font-medium leading-[2.24rem]">
                      {item.date}
                    </span>
                  </div>

                  <h4 className="text-[2rem] font-bold capitalize leading-[3rem] text-blackColor">
                    {item.title}
                  </h4>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog_Sec;
