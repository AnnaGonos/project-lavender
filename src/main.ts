import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Получите ConfigService
  const configService = app.get(ConfigService);

  // Узнайте порт из переменных окружения
  const PORT = configService.get<number>('PORT') || 3000; // Установите значение по умолчанию

  await app.listen(PORT);
  console.log(`Application is running on: http://localhost:${PORT}`);
}

bootstrap();
