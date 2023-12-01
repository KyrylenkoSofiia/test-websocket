import React, {FC} from "react";
import {inputFieldType} from "./inputField.type";

const InputField: FC<inputFieldType> = ({
  name,
  placeholder,
  value,
  onChange,
  disabled,
  additionalClass,
}) => {
  return (
    <textarea
      onChange={onChange}
      name={name}
      disabled={disabled}
      className={`w-full rounded-md px-4 py-2 border-2 transition ease-in focus:outline-none h-full resize-none ${
        disabled
          ? "bg-gray-300 text-gray-500 border-gray-500 cursor-not-allowed"
          : "bg-white border-[#4970b5] text-[#4970b5] focus:border-[#4970b5]"
      } ${additionalClass}`}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default InputField;
