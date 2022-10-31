import React from "react";
import PropTypes from "prop-types";

const shapes = {
  icbRoundedBorder3: "rounded-radius3",
  icbCircleBorder22: "rounded-radius22",
  icbCircleBorder10: "rounded-radius10",
  icbCircleBorder44: "rounded-radius44",
  RoundedBorder4: "rounded-radius4",
  CustomBorderTL4:
    "rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0]",
};
const variants = {
  icbFillGray54: "bg-gray_54",
  icbFillGray101: "bg-gray_101",
  icbFillGray102: "bg-gray_102",
  icbFillGray202: "bg-gray_202",
  icbOutlineWhiteA700e5:
    "bg-black_900_26 border border-solid border-white_A700_e5",
  icbFillGray10075: "bg-gray_100_75",
  icbFillBlueA401: "bg-blue_A401",
  icbFillGray500: "bg-gray_500",
  icbFillGray201: "bg-gray_201",
  icbFillGray105: "bg-gray_105",
  icbFillBlueA203: "bg-blue_A203",
  icbOutlineWhiteA700e51_2:
    "bg-black_900_33 border border-solid border-white_A700_e5",
  icbFillBlueA202: "bg-blue_A202",
  icbFillBluegray200: "bg-bluegray_200",
  icbFillBlueA400: "bg-blue_A400",
  icbOutlineBluegray100: "bg-gray_101 border border-bluegray_100 border-solid",
  icbFillGray100: "bg-gray_100",
  icbOutlineWhiteA7007f:
    "bg-white_A700_19 border border-solid border-white_A700_7f",
  FillBlueA400: "bg-blue_A400 text-white_A700",
  OutlineGray300: "border border-gray_300 border-solid text-bluegray_800",
  FillBlueA401: "bg-blue_A401 text-white_A700",
  FillGray203: "bg-gray_203 text-gray_905",
  OutlineGray301: "border border-gray_301 border-solid text-gray_905",
  FillGray204: "bg-gray_204 text-gray_905",
  FillRed602: "bg-red_602 text-white_A700",
  Outline: "bg-gray_900_80 text-white_A700",
  OutlineBlack90026: "bg-white_A700 shadow-bs2 text-bluegray_800",
  FillGray201: "bg-gray_201 text-bluegray_800",
  FillRed600: "bg-red_600 text-white_A700",
  FillGray54: "bg-gray_54 text-bluegray_500",
  FillBlueA202: "bg-blue_A202 text-white_A700",
  FillBlue700: "bg-blue_700 text-white_A700",
  OutlineGray302:
    "bg-white_A700 border-bw05 border-gray_302 border-solid shadow-bs text-black_900_e5",
  FillBlueA200: "bg-blue_A200 text-white_A700",
  FillBlue800: "bg-blue_800 text-white_A700",
  OutlineGray3001_2:
    "bg-gray_101 border border-gray_300 border-solid text-bluegray_200",
  FillRed300: "bg-red_300 text-white_A700",
  FillRed900: "bg-red_900 text-white_A700",
  OutlineBlack9001e: "bg-blue_701 shadow-bs1 text-white_A700",
  OutlineBlue7007f: "border border-blue_700_7f border-solid text-blue_701",
  OutlineLightblueA700:
    "border border-light_blue_A700 border-solid text-light_blue_A700",
  OutlineGray3021_2:
    "bg-white_A700 border border-gray_302 border-solid text-black_900_d8",
};
const sizes = {
  smIcn: "p-[3px]",
  mdIcn: "lg:p-[5px] xl:p-[7px] p-[8px] 3xl:p-[9px]",
  lgIcn: "p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px]",
  xlIcn: "lg:p-[15px] xl:p-[19px] p-[22px] 3xl:p-[26px]",
  sm: "p-[4px]",
  md: "3xl:p-[10px] lg:p-[6px] xl:p-[8px] p-[9px]",
  lg: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[8px]",
  xl: "lg:p-[13px] xl:p-[16px] p-[19px] 3xl:p-[22px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "icbRoundedBorder3",
    "icbCircleBorder22",
    "icbCircleBorder10",
    "icbCircleBorder44",
    "RoundedBorder4",
    "CustomBorderTL4",
  ]),
  variant: PropTypes.oneOf([
    "icbFillGray54",
    "icbFillGray101",
    "icbFillGray102",
    "icbFillGray202",
    "icbOutlineWhiteA700e5",
    "icbFillGray10075",
    "icbFillBlueA401",
    "icbFillGray500",
    "icbFillGray201",
    "icbFillGray105",
    "icbFillBlueA203",
    "icbOutlineWhiteA700e51_2",
    "icbFillBlueA202",
    "icbFillBluegray200",
    "icbFillBlueA400",
    "icbOutlineBluegray100",
    "icbFillGray100",
    "icbOutlineWhiteA7007f",
    "FillBlueA400",
    "OutlineGray300",
    "FillBlueA401",
    "FillGray203",
    "OutlineGray301",
    "FillGray204",
    "FillRed602",
    "Outline",
    "OutlineBlack90026",
    "FillGray201",
    "FillRed600",
    "FillGray54",
    "FillBlueA202",
    "FillBlue700",
    "OutlineGray302",
    "FillBlueA200",
    "FillBlue800",
    "OutlineGray3001_2",
    "FillRed300",
    "FillRed900",
    "OutlineBlack9001e",
    "OutlineBlue7007f",
    "OutlineLightblueA700",
    "OutlineGray3021_2",
  ]),
  size: PropTypes.oneOf([
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "sm",
    "md",
    "lg",
    "xl",
  ]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
