import React, {FC} from "react";
import {messageDisplayProps} from "./chatDisplay.type";
import ChatMessage from "./chatMessage/chatMessage";

const ChatDisplay: FC<messageDisplayProps> = ({messages}) => {
  return (
    <div className="w-full h-full flex flex-col flex-[90%]">
      <div className="border p-4 bg-gray-100 flex-1 overflow-y-scroll">
        {messages.map(message => (
          <ChatMessage
            message={message}
            key={`${message.userHash}-${message.text}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatDisplay;
