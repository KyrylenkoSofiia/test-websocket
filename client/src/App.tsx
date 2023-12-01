import React, {useEffect, useState, useCallback} from "react";
import "./index.css";
import ChatInput from "./components/chat/chatInput/chatInput";
import ChatDisplay from "./components/chat/chatDisplay/chatDisplay";
import useWebSocket from "./hooks/useWebSocket/useWebSocket";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {messageType} from "./types/generalTypes";

function App() {
  const {isConnected, socket} = useWebSocket(
    "ws://localhost:3000",
    "retrieveAllMessages",
  );
  const [messages, setMessages] = useState<messageType[]>([]);

  const addMessage = useCallback(
    (message: messageType) => {
      setMessages(prev => [...prev, message]);
    },
    [setMessages],
  );

  const setAllMessages = useCallback(
    (messages: messageType[]) => {
      setMessages(messages);
    },
    [setMessages],
  );

  useEffect(() => {
    if (socket) {
      socket.on("retrieveAllMessages", (messages: messageType[]) => {
        setAllMessages(messages);
      });

      socket.on("newMessage", (message: messageType) => {
        addMessage(message);
      });
    }
  }, [socket]);

  const sendMessage = (message: string) => {
    socket?.emit("createMessage", message);
  };

  return (
    <div className="h-screen flex flex-col ">
      <ToastContainer />
      <ChatDisplay messages={messages} />
      <ChatInput disabled={!isConnected} sendMessage={sendMessage} />
    </div>
  );
}

export default App;
