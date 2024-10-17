const Common_Heading = ({ title, subTitle, titleColor, subTitleColor }) => {
  return (
    <div>
      <h5
        style={{ color: subTitleColor }}
        className="text-[1.6rem] font-bold uppercase leading-[1.6rem]"
      >
        {subTitle}
      </h5>

      <h2
        style={{ color: titleColor }}
        className="text-[2.6rem] font-medium leading-[3.8rem] tracking-[-0.48px] sm:text-[3rem] sm:leading-[4rem]"
      >
        {title}
      </h2>
    </div>
  );
};

export default Common_Heading;
