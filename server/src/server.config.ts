import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
import helmet from 'helmet';
import * as fs from 'fs';
import * as path from 'path';

export const sslOptions = {
  key: fs.readFileSync(
    path.resolve(__dirname, './../kyrylenko.sofiia@gmail.com-key.pem'),
  ),
  cert: fs.readFileSync(
    path.resolve(__dirname, './../kyrylenko.sofiia@gmail.com.pem'),
  ),
};

export const helmetConfig = helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      fontSrc: ["'self'"],
      imgSrc: ["'self'", 'data:'],
      connectSrc: ["'self'"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
    },
  },
  frameguard: {
    action: 'deny',
  },
  referrerPolicy: {
    policy: 'same-origin',
  },
  xssFilter: true,
});

export const corsOptions: CorsOptions = {
  origin: 'http://localhost:3001/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
};
