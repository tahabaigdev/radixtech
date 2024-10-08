import ClientLogo1 from "../../assets/images/client-logo-1.svg";
import ClientLogo2 from "../../assets/images/client-logo-2.svg";
import ClientLogo3 from "../../assets/images/client-logo-3.svg";

const Client_Sec = () => {
  return (
    <section className="bg-blackColor py-[4rem]">
      <div className="container flex items-center gap-[4rem]">
        <div className="w-[19.3rem]">
          <h4 className="text-[2rem] font-bold leading-[3rem] text-whiteColor">
            Trusted by 40+ worldwide clients
          </h4>
        </div>

        <div className="w-[100.7rem]">
          <div className="scroller">
            <div className="scroller-in">
              {[
                ClientLogo1,
                ClientLogo2,
                ClientLogo3,
                ClientLogo1,
                ClientLogo2,
                ClientLogo3,
                ClientLogo2,
                ClientLogo3,
                ClientLogo1,
                ClientLogo2,
              ].map((item, idx) => (
                <div key={idx} className="scroller-content min-w-[17rem]">
                  <img src={item} alt="Client logo" />
                </div>
              ))}
            </div>

            <div className="scroller-in">
              {[
                ClientLogo1,
                ClientLogo2,
                ClientLogo3,
                ClientLogo1,
                ClientLogo2,
                ClientLogo3,
                ClientLogo2,
                ClientLogo3,
                ClientLogo1,
                ClientLogo2,
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="scroller-content w-[100%] min-w-[17rem]"
                >
                  <img src={item} alt="Client logo" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client_Sec;
