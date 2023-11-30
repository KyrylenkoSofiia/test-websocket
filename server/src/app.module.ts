import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EventsModule } from './events/events.module';
import { MessageModule } from './message/message.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot(), EventsModule, MessageModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
