import LazyLoad from "react-lazyload";
import ClientLogo1 from "../../assets/images/client-logo-1.png";
import ClientLogo2 from "../../assets/images/client-logo-2.png";
import ClientLogo3 from "../../assets/images/client-logo-3.png";
import ClientLogo4 from "../../assets/images/client-logo-4.png";

const Client_Sec = () => {
  return (
    <section className="overflow-hidden bg-secondaryColor py-[3rem]">
      <div className="container flex flex-col items-center gap-[4rem] xl:flex-row">
        <div className="w-[19.3rem]">
          <h4 className="text-center text-[2rem] font-bold leading-[3rem] text-whiteColor xl:text-left">
            Trusted by worldwide clients
          </h4>
        </div>

        <div className="w-[100%] xl:w-[100.7rem]">
          <div className="scroller">
            <div className="scroller-in">
              {[
                ClientLogo1,
                ClientLogo2,
                ClientLogo3,
                ClientLogo4,
                ClientLogo1,
                ClientLogo2,
                ClientLogo3,
                ClientLogo4,
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
                ClientLogo4,
                ClientLogo1,
                ClientLogo2,
                ClientLogo3,
                ClientLogo4,
              ].map((item, idx) => (
                <LazyLoad
                  key={idx}
                  className="scroller-content w-[100%] min-w-[17rem]"
                >
                  <img src={item} alt="Client logo" />
                </LazyLoad>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client_Sec;
