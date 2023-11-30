import React, {FC} from "react";
import {chatMessageProps} from "./chatMessage.type";

const ChatMessage: FC<chatMessageProps> = ({message, owner}) => {
  const {text} = message;
  return (
    <div className={`mb-4 flex ${owner ? "justify-end" : "justify-start"}`}>
      <div
        className={`rounded-lg p-4 max-w-[70%] ${
          owner ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}>
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
