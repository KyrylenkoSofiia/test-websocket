import { Injectable } from '@nestjs/common';
import { ChatMessages } from 'src/events/types/events';

@Injectable()
export class MessageService {
  private chatMessages: ChatMessages[] = [];
  async createMessage(text: string, userHash: string) {
    return this.chatMessages.push({ text, userHash });
  }
  retrieveAllMessages(userHash: string) {
    const messages = this.chatMessages.map((chat) => {
      if (chat.userHash === userHash) {
        return { ...chat, owner: true };
      } else {
        return { ...chat, owner: true };
      }
    });
    return messages;
  }
}
