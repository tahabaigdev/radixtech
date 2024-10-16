import { useState } from "react";
import {
  ourPartnersAccodionData,
  techExpertiseAccodionData,
  whyRadixAccodionData,
} from "../../constants";
import Common_Heading from "../../styles/Common_Heading/Common_Heading";
import Accordion from "../Accordion/Accordion";

const Why_Radix_Sec = () => {
  const [activeTab, setActiveTab] = useState("Why RadixTech");

  return (
    <section id="why">
      <div className="container py-[6rem]">
        <div className="flex justify-center text-center xl:justify-start xl:text-left">
          <div>
            <Common_Heading
              title="Why Organizations Choose RadixTech"
              subTitle="Why RadixTech"
              titleColor="#000000"
              subTitleColor="#4F4F4F"
            />
          </div>
        </div>

        <div className="mx-auto mt-[4rem] max-w-[84rem]">
          <ul className="flex items-center justify-center gap-[2rem] border-b border-solid border-[#C9C9C9]">
            <li>
              <button
                className={`inline-flex px-[2.4rem] py-[1.6rem] text-[1.6rem] font-bold leading-[2.4rem] tracking-[-0.08px] ${activeTab === "Why RadixTech" ? "border-b-[4px] border-primaryColor" : "border-b-[4px] border-[transparent]"}`}
                onClick={() => setActiveTab("Why RadixTech")}
              >
                Why RadixTech
              </button>
            </li>

            <li>
              <button
                className={`inline-flex px-[2.4rem] py-[1.6rem] text-[1.6rem] font-bold leading-[2.4rem] tracking-[-0.08px] ${activeTab === "Our Partners" ? "border-b-[4px] border-primaryColor" : "border-b-[4px] border-[transparent]"}`}
                onClick={() => setActiveTab("Our Partners")}
              >
                Our Partners
              </button>
            </li>

            <li>
              <button
                className={`inline-flex px-[2.4rem] py-[1.6rem] text-[1.6rem] font-bold leading-[2.4rem] tracking-[-0.08px] ${activeTab === "Technology Expertise" ? "border-b-[4px] border-primaryColor" : "border-b-[4px] border-[transparent]"}`}
                onClick={() => setActiveTab("Technology Expertise")}
              >
                Technology Expertise
              </button>
            </li>
          </ul>

          {activeTab === "Why RadixTech" && (
            <div>
              {whyRadixAccodionData.map((item, idx) => (
                <Accordion
                  key={idx}
                  title={item.title}
                  content={item.description}
                  list={item.list} // Pass list here
                />
              ))}
            </div>
          )}

          {activeTab === "Our Partners" && (
            <div>
              {ourPartnersAccodionData.map((item, idx) => (
                <Accordion
                  key={idx}
                  title={item.title}
                  content={item.description}
                  list={item.list} // Pass list here
                />
              ))}
            </div>
          )}

          {activeTab === "Technology Expertise" && (
            <div>
              {techExpertiseAccodionData.map((item, idx) => (
                <Accordion
                  key={idx}
                  title={item.title}
                  content={item.description}
                  list={item.list} // Pass list here
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Why_Radix_Sec;
