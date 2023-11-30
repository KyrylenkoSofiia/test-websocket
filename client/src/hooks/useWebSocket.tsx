import {useEffect, useState} from "react";
import {io, Socket} from "socket.io-client";
import {messageType} from "../types/generalTypes";

type WebSocketHookReturnType = {
  socket: Socket | null;
  isConnected: boolean;
  messages: messageType[];
};

const useWebSocket = (url: string): WebSocketHookReturnType => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [messages, setMessages] = useState<messageType[]>([]);
  useEffect(() => {
    const connectionOptions = {
      secure: true,
      rejectUnauthorized: false,
      transports: ["websocket", "polling", "flashsocket"],
    };
    const newSocket = io(url, connectionOptions);

    newSocket.on("connect", () => {
      console.log(`WebSocket connected `);
      setIsConnected(true);
      newSocket.emit("retrieveAllMessages");
    });

    newSocket.on("retrieveAllMessages", response => {
      setMessages([...response]);
    });

    newSocket.on("disconnect", () => {
      console.log("WebSocket disconnected");
      setIsConnected(false);
    });

    newSocket.on("close", (error: Error) => {
      console.error("WebSocket error:", error);
      setIsConnected(false);
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, [url]);

  return {socket, isConnected, messages};
};

export default useWebSocket;
