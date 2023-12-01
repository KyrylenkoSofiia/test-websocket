import React, {FC} from "react";
import {buttonProps} from "./button.type";

const Button: FC<buttonProps> = ({
  buttonContent,
  type,
  onClick,
  disabled,
  additionalClass,
}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`duration-400 flex w-full items-center justify-center rounded-md p-2 text-[#444444] transition ease-in  ${
      disabled ? "text-gray-500  cursor-not-allowed" : "hover:text-[#fff]"
    } ${additionalClass}`}
    type={type}>
    {buttonContent}
  </button>
);

export default Button;
