import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService)
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(config.get('SERVER_PORT') ? config.get('SERVER_PORT') : 3001);
}
bootstrap();
