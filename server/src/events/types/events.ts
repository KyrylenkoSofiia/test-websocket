import { Message } from 'src/message/entities/message.entity';

export interface ServerToClientEvents {
  createMessage: (payload: Message) => void;
  retrieveAllMessages: (chatMessages: ChatMessages[]) => void;
  newMessage: (newMessage: ChatMessagesWithOwner) => void;
}
export interface ChatMessages {
  text: string;
  userHash: string;
}

interface ChatMessagesWithOwner extends ChatMessages {
  owner: boolean;
}
