import {
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ChatMessages, ServerToClientEvents } from './types/events';
import { MessageService } from 'src/message/message.service';
import { generateTokenFromIPAndUserAgent } from 'src/utils/utils';
@WebSocketGateway()
export class EventsGateway {
  @WebSocketServer()
  server: Server<any, ServerToClientEvents>;
  constructor(private readonly messageService: MessageService) {}
  @SubscribeMessage('connect')
  handleConnect(socket: Socket) {}
  @SubscribeMessage('disconnect')
  handleDisconnect() {}
  @SubscribeMessage('createMessage')
  sendMessage(socket: Socket, message: string) {
    const clientIP = socket.handshake.address;
    const userAgent = socket.handshake.headers['user-agent'];
    console.log(message, clientIP, userAgent);
    // const hashedUser = generateTokenFromIPAndUserAgent(clientIP, userAgent);
    // this.messageService.createMessage(message, hashedUser);
  }
  @SubscribeMessage('retrieveAllMessages')
  retrieveAllMessages(socket: Socket) {
    const clientIP = socket.handshake.address;
    const userAgent = socket.handshake.headers['user-agent'];
    // const hashedUser = generateTokenFromIPAndUserAgent(clientIP, userAgent);
    // const chat: ChatMessages[] =
    //   this.messageService.retrieveAllMessages(hashedUser);
    // this.server.to(socket.id).emit('retrieveAllMessages', chat);
  }
}
