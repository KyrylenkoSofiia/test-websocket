import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { helmetConfig, corsOptions } from './server.config';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmetConfig);
  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
