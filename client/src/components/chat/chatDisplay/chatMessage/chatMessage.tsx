import React, {FC, memo} from "react";
import {chatMessageProps} from "./chatMessage.type";

const ChatMessage: FC<chatMessageProps> = ({message}) => {
  const {text, owner} = message;
  return (
    <div className={`mb-4 flex ${owner ? "justify-end" : "justify-start"}`}>
      <div
        className={`rounded-lg p-4 max-w-[70%]  break-all ${
          owner ? "bg-blue-500 text-white" : "bg-gray-200"
        }`}>
        {text}
      </div>
    </div>
  );
};

export default memo(ChatMessage, (prevProps, nextProps) => {
  return (
    prevProps.message.text === nextProps.message.text &&
    prevProps.message.owner === nextProps.message.owner
  );
});
