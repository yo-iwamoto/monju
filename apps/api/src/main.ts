import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import fastifyCookie from '@fastify/cookie';
import { dump } from 'js-yaml';
import { writeFileSync } from 'node:fs';
import type { NestFastifyApplication } from '@nestjs/platform-fastify';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());

  const swaggerConfig = new DocumentBuilder().setTitle('@monju/api').setVersion('0.0.1').build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  writeFileSync('../../openapi.yml', dump(document));
  SwaggerModule.setup('docs', app, document);

  await app.register(fastifyCookie, {
    secret: process.env.COOKIE_SECRET,
  });
  await app.listen(8000);
}

bootstrap();
