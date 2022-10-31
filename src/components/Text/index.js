import React from "react";
const variantClasses = {
  h1: "lg:text-[39px] xl:text-[49px] text-[56px] 3xl:text-[67px]",
  h2: "font-normal lg:text-[32px] xl:text-[40px] text-[46px] 3xl:text-[55px]",
  h3: "lg:text-[28px] xl:text-[35px] text-[40px] 3xl:text-[48px]",
  h4: "lg:text-[27px] xl:text-[33px] text-[38px] 3xl:text-[45px]",
  h5: "lg:text-[25px] xl:text-[32px] text-[36px] 3xl:text-[43px]",
  h6: "font-semibold lg:text-[22px] xl:text-[28px] text-[32px] 3xl:text-[38px]",
  body1:
    "font-normal lg:text-[19px] xl:text-[24px] text-[28px] 3xl:text-[33px]",
  body2:
    "font-semibold lg:text-[18px] xl:text-[23px] text-[26px] 3xl:text-[31px]",
  body3: "lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  body4: "lg:text-[15px] xl:text-[19px] text-[22px] 3xl:text-[26px]",
  body5: "lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  body6: "lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  body7: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  body8: "xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  body9: "xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
