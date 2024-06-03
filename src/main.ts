import { TransformExceptionInterceptor } from '@core/interceptors/transform-exception.interceptor';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import 'dotenv/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  app.useGlobalInterceptors(new TransformExceptionInterceptor());
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Personal blog example')
    .setDescription('The personal blog API description')
    .setVersion('1.0')
    .addTag('Personal blog')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000, '0.0.0.0');
  console.log(`Application is running on: http://10.10.10.11:3000`);
}
bootstrap();
