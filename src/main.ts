import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Это должно указывать на папку public
  app.useStaticAssets(join(__dirname, '..', 'public'));

  const port = process.env.PORT || 4000; // Убедитесь, что порт указан правильно
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();

