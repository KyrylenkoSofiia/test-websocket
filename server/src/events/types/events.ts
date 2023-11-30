import { Message } from 'src/message/entities/message.entity';

export interface ServerToClientEvents {
  createMessage: (payload: Message) => void;
  retrieveAllMessages: (chatMessages: ChatMessages[]) => void;
}
export interface ChatMessages {
  text: string;
  userHash: string;
}
