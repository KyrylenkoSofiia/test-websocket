import React, {FC} from "react";
import {buttonProps} from "./button.type";

const Button: FC<buttonProps> = ({text, type, onClick, disabled}) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`duration-400 flex w-full items-center justify-center rounded-md border-2 p-2 text-[#444444] transition ease-in ${
      disabled
        ? "bg-gray-300 text-gray-500 border-gray-500 cursor-not-allowed"
        : "hover:bg-[#4970b5] hover:text-[#fff] border-[#4970b5]"
    }`}
    type={type}>
    {text}
  </button>
);

export default Button;
