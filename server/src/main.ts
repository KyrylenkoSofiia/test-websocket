import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';
import * as path from 'path';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
async function bootstrap() {
  const keyFile = fs.readFileSync(
    path.resolve(__dirname + '/../kyrylenko.sofiia@gmail.com-key.pem'),
  );
  const certFile = fs.readFileSync(
    path.resolve(__dirname + '/../kyrylenko.sofiia@gmail.com.pem'),
  );

  const sslOptions = {
    httpsOptions: {
      key: keyFile,
      cert: certFile,
    },
  };

  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  };

  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
