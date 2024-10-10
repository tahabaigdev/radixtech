import { useState } from "react";
import Common_Heading from "../../styles/Common_Heading/Common_Heading";
import Accordion from "../Accordion/Accordion";

const Faq_Sec = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("General");

  return (
    <section>
      <div className="container py-[8rem] xl:py-[10rem]">
        <div className="flex justify-center text-center xl:justify-start xl:text-left">
          <div>
            <Common_Heading
              title="Salesforce CRM for Small Business FAQ"
              subTitle="Faq"
              titleColor="#000000"
              subTitleColor="#4F4F4F"
            />
          </div>
        </div>

        <div className="mx-auto mt-[4rem] max-w-[84rem]">
          <ul className="flex items-center justify-center gap-[2rem] border-b border-solid border-[#C9C9C9]">
            <li>
              <button
                className={`inline-flex px-[2.4rem] py-[1.6rem] text-[1.6rem] font-bold leading-[2.4rem] tracking-[-0.08px] ${activeTab === "General" ? "border-b-[4px] border-primaryColor" : "border-b-[4px] border-[transparent]"}`}
                onClick={() => setActiveTab("General")}
              >
                General
              </button>
            </li>

            <li>
              <button
                className={`inline-flex px-[2.4rem] py-[1.6rem] text-[1.6rem] font-bold leading-[2.4rem] tracking-[-0.08px] ${activeTab === "AI" ? "border-b-[4px] border-primaryColor" : "border-b-[4px] border-[transparent]"}`}
                onClick={() => setActiveTab("AI")}
              >
                Artificial Intelligence for Small Business
              </button>
            </li>
          </ul>

          <div>
            {activeTab === "General" && (
              <div>
                <Accordion
                  title="What is AI in CRM?"
                  content="AI in CRM refers to the use of artificial intelligence technologies, such as machine learning and natural language processing, to improve customer relationship management. It enables businesses to automate and optimise CRM activities, such as lead management, customer segmentation, and sales forecasting."
                />
              </div>
            )}
            {activeTab === "AI" && <div>Content for AI FAQ</div>}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq_Sec;
