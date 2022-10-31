import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";
const variants = {
  OutlineBluegray100: "bg-white_A700 border border-bluegray_100 border-solid",
  OutlineGray402: "bg-white_A700 border border-gray_402 border-solid",
  OutlineBlueA401: "border border-blue_A401 border-solid",
  OutlineBlueA400: "border border-blue_A400 border-solid",
  OutlineBluegray1001_2: "bg-gray_101 border border-bluegray_100 border-solid",
};
const shapes = { RoundedBorder8: "rounded-radius8" };
const sizes = {
  sm: "p-[1px]",
  md: "xl:p-[12px] p-[14px] 3xl:p-[16px] lg:p-[9px]",
  lg: "xl:pb-[10px] pb-[12px] 3xl:pb-[14px] lg:pb-[8px] lg:pt-[10px] xl:pt-[13px] pt-[15px] 3xl:pt-[18px] xl:px-[10px] px-[12px] 3xl:px-[14px] lg:px-[8px]",
};
const Radio = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      checked = false,
      errors = [],
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = React.useState(checked);

    React.useEffect(() => {
      setValue(checked);
    }, [checked]);

    const handleChange = (event) => {
      setValue(event.target.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName} ${shapes[shape] || ""} ${
              variants[variant] || ""
            } ${sizes[size] || ""}`}
            ref={ref}
            type="radio"
            name={name}
            aria-checked={!!value}
            checked={!!value}
            onChange={handleChange}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);
Radio.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder8"]),
  variant: PropTypes.oneOf([
    "OutlineBluegray100",
    "OutlineGray402",
    "OutlineBlueA401",
    "OutlineBlueA400",
    "OutlineBluegray1001_2",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
};

Radio.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  shape: "",
  variant: "OutlineBluegray100",
  size: "sm",
};

export { Radio };
