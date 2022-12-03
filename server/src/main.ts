import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { cert, initializeApp, ServiceAccount } from 'firebase-admin/app';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());

  const configService: ConfigService = app.get(ConfigService);
  const adminConfig: ServiceAccount = {
    projectId: configService.get('FIREBASE_PROJECT_ID'),
    privateKey: configService.get('FIREBASE_PRIVATE_KEY'),
    clientEmail: configService.get('FIREBASE_CLIENT_EMAIL'),
  };
  initializeApp({
    credential: cert(adminConfig),
  });

  await app.listen(3000);
}

bootstrap();
