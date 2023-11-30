import { Injectable } from '@nestjs/common';
import { ChatMessages } from 'src/events/types/events';
import { compareHash } from 'src/utils/utils';

@Injectable()
export class MessageService {
  private chatMessages: ChatMessages[] = [];
  createMessage(text: string, userHash: string) {
    const newMessage = { text, userHash };
    this.chatMessages.push(newMessage);
    return newMessage;
  }
  retrieveAllMessages(userHash: string) {
    const messages = this.chatMessages.map((chat) => {
      const owner = compareHash(chat.userHash, userHash);
      return { ...chat, owner };
    });
    return messages;
  }
}
