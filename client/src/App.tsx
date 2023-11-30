import React from "react";
import "./index.css";
import ChatInput from "./components/chat/chatInput/chatInput";
import ChatDisplay from "./components/chat/chatDisplay/chatDisplay";
import useWebSocket from "./hooks/useWebSocket";

// const mockMessages: messageType[] = [
//   {text: "Hello!", _id: "1", owner: false},
//   {text: "How are you?", _id: "2", owner: true},
//   {text: "What about you?", _id: "4", owner: false},
//   {text: "Just working on this chat app.", _id: "5", owner: true},
//   {text: "That sounds cool!", _id: "6", owner: false},
//   {text: "Hello!", _id: "7", owner: false},
//   {text: "How are you?", _id: "8", owner: true},
//   {text: "What about you?", _id: "9", owner: false},
//   {text: "Just working on this chat app.", _id: "10", owner: true},
//   {text: "That sounds cool!", _id: "11", owner: false},
//   {text: "Hello!", _id: "12", owner: false},
//   {text: "How are you?", _id: "13", owner: true},
//   {text: "What about you?", _id: "14", owner: false},
//   {text: "Just working on this chat app.", _id: "15", owner: true},
//   {text: "That sounds cool!", _id: "16", owner: false},
// ];

function App() {
  const {isConnected, socket, messages} = useWebSocket("ws://localhost:3000");

  const sendMessage = (message: string) => {
    socket?.emit("createMessage", message);
  };

  return (
    <div className="h-screen flex flex-col">
      <ChatDisplay messages={messages} />
      <ChatInput disabled={!isConnected} sendMessage={sendMessage} />
    </div>
  );
}

export default App;
