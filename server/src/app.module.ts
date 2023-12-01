import { Module } from '@nestjs/common';
import { EventsModule } from './events/events.module';
import { MessageModule } from './message/message.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), EventsModule, MessageModule],
})
export class AppModule {}
