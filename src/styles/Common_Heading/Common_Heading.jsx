const Common_Heading = ({ title, subTitle, titleColor, subTitleColor }) => {
  return (
    <div>
      <h5
        style={{ color: subTitleColor }}
        className="text-[1.6rem] font-semibold uppercase leading-[1.6rem]"
      >
        {subTitle}
      </h5>

      <h2
        style={{ color: titleColor }}
        className="text-[3rem] font-medium leading-[4rem] tracking-[-0.48px] sm:text-[4.5rem] sm:leading-[5.5rem]"
      >
        {title}
      </h2>
    </div>
  );
};

export default Common_Heading;
