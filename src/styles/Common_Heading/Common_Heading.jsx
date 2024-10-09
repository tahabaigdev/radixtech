const Common_Heading = ({ title, subTitle, titleColor, subTitleColor }) => {
  return (
    <div>
      <h5
        style={{ color: subTitleColor }}
        className="text-[1.2rem] font-semibold uppercase leading-[1.56rem] tracking-[0.4px]"
      >
        {subTitle}
      </h5>

      <h2
        style={{ color: titleColor }}
        className="text-[4rem] font-semibold leading-[5rem] tracking-[-0.64px] sm:text-[6.4rem] sm:leading-[7.68rem]"
      >
        {title}
      </h2>
    </div>
  );
};

export default Common_Heading;
