import React, {FC} from "react";
import {messageDisplayProps} from "./chatDisplay.type";
import ChatMessage from "./chatMessage/chatMessage";

const ChatDisplay: FC<messageDisplayProps> = ({messages}) => {
  return (
    <div className="w-full h-full flex flex-col">
      <div className="border p-4 bg-gray-100 flex-1 overflow-y-scroll max-h-[93vh] ">
        {messages.map(message => (
          <ChatMessage
            message={message}
            owner={message.owner}
            key={message._id}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatDisplay;
