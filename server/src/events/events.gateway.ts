import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatMessages, ServerToClientEvents } from './types/events';
import { MessageService } from 'src/message/message.service';
import { hashUser } from 'src/utils/utils';
@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server<any, ServerToClientEvents>;
  constructor(private readonly messageService: MessageService) {}
  @SubscribeMessage('disconnect')
  handleDisconnect() {}
  @SubscribeMessage('createMessage')
  sendMessage(socket: Socket, message: string) {
    const clientIP = socket.handshake.address;
    const userAgent = socket.handshake.headers['user-agent'];
    const hashedUser = hashUser(clientIP, userAgent);
    const newMessage = this.messageService.createMessage(message, hashedUser);
    socket.broadcast.emit('newMessage', { ...newMessage, owner: false });
    this.server
      .to(socket.id)
      .emit('newMessage', { ...newMessage, owner: true });
  }
  @SubscribeMessage('retrieveAllMessages')
  retrieveAllMessages(socket: Socket) {
    const clientIP = socket.handshake.address;
    const userAgent = socket.handshake.headers['user-agent'];
    const hashedUser = hashUser(clientIP, userAgent);
    const chat: ChatMessages[] =
      this.messageService.retrieveAllMessages(hashedUser);
    this.server.to(socket.id).emit('retrieveAllMessages', chat);
  }
}
