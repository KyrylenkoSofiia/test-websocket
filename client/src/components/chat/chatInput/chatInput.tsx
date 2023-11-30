import React, {FC, FormEvent, useCallback, useState} from "react";
import InputField from "../../general/inputField/inputField";
import Button from "../../general/button/button";
import {buttonType} from "../../general/button/button.type";
import {chatInputProps} from "./chatInput.type";

const ChatInput: FC<chatInputProps> = ({disabled, sendMessage}) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    sendMessage(inputValue);
    setInputValue("");
  };

  const handleChange = useCallback((e: FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center justify-between p-4 h-full flex-[10%]">
      <InputField
        disabled={disabled}
        type={"text"}
        name={"message"}
        placeholder={"please enter your message"}
        value={inputValue}
        onChange={handleChange}
      />
      <Button text={"Send"} type={buttonType.submit} disabled={disabled} />
    </form>
  );
};

export default ChatInput;
