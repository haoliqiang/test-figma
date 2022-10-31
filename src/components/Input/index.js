import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineGray300: "bg-white_A700 border border-gray_300 border-solid",
  Outline: "bg-gray_900_99",
  Outline1_2: "bg-gray_900_80",
  OutlineGray201: "bg-white_A700 border border-gray_201 border-solid",
  OutlineGray2011_2: "bg-gray_52 border border-gray_201 border-solid",
  OutlineGray302: "bg-white_A700 border border-gray_302 border-solid",
  OutlineGray202: "bg-white_A700 border border-gray_202 border-solid",
  FillGray105: "bg-gray_105",
  OutlineLightgreen300: "border border-light_green_300 border-solid",
  FillAmber300: "bg-amber_300",
  FillCyan401: "bg-cyan_401",
  FillIndigoA100: "bg-indigo_A100",
  FillDeeporange400: "bg-deep_orange_400",
  OutlineBlueA200: "bg-white_A700 border border-blue_A200 border-solid",
  OutlineGray3001_2: "bg-gray_101 border border-gray_300 border-solid",
  FillGray201: "bg-gray_201",
  OutlineGreenA101: "bg-gray_50 border border-green_A101 border-solid",
  OutlinePink100: "bg-red_51 border border-pink_100 border-solid",
};
const shapes = {
  RoundedBorder4: "rounded-radius4",
  CustomBorderTL4:
    "rounded-bl-[0] rounded-br-[0] rounded-tl-[4px] rounded-tr-[4px]",
};
const sizes = {
  sm: "pb-[3px] lg:pt-[4px] xl:pt-[5px] pt-[6px] 3xl:pt-[7px] px-[3px]",
  md: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[8px]",
  lg: "pb-[10px] 3xl:pb-[12px] lg:pb-[7px] xl:pb-[8px] xl:pt-[11px] pt-[13px] 3xl:pt-[15px] lg:pt-[9px] px-[10px] 3xl:px-[12px] lg:px-[7px] xl:px-[8px]",
  xl: "xl:p-[12px] p-[14px] 3xl:p-[16px] lg:p-[9px]",
  "2xl": "lg:p-[12px] xl:p-[16px] p-[18px] 3xl:p-[21px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder4", "CustomBorderTL4"]),
  variant: PropTypes.oneOf([
    "OutlineGray300",
    "Outline",
    "Outline1_2",
    "OutlineGray201",
    "OutlineGray2011_2",
    "OutlineGray302",
    "OutlineGray202",
    "FillGray105",
    "OutlineLightgreen300",
    "FillAmber300",
    "FillCyan401",
    "FillIndigoA100",
    "FillDeeporange400",
    "OutlineBlueA200",
    "OutlineGray3001_2",
    "FillGray201",
    "OutlineGreenA101",
    "OutlinePink100",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "OutlineGray300",
  size: "",
};

export { Input };
