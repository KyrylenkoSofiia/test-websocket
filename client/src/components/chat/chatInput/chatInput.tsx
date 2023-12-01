import React, {FC, FormEvent, useCallback, useState} from "react";
import InputField from "../../general/inputField/inputField";
import Button from "../../general/button/button";
import {buttonType} from "../../general/button/button.type";
import {chatInputProps} from "./chatInput.type";
import {arrowIcon} from "../../../assets/arrow-icon";

const ChatInput: FC<chatInputProps> = ({disabled, sendMessage}) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    sendMessage(inputValue);
    setInputValue("");
  };

  const handleChange = useCallback((e: FormEvent<HTMLTextAreaElement>) => {
    setInputValue(e.currentTarget.value);
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-between p-4 h-full flex-[10%] items-center gap-4 ">
      <InputField
        disabled={disabled}
        name={"message"}
        placeholder={"please enter your message"}
        value={inputValue}
        onChange={handleChange}
        additionalClass="flex-[90%]"
      />
      <Button
        buttonContent={arrowIcon}
        type={buttonType.submit}
        disabled={disabled}
        additionalClass="flex-[10%]"
      />
    </form>
  );
};

export default ChatInput;
