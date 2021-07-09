import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import YAML from 'yamljs';
import path from 'path';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { LoggerInterceptor } from './utils/logger/logger.interceptor';
import { AppModule } from './app.module';


const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
const {USE_FASTIFY} = process.env;
async function bootstrap() {
  const app = USE_FASTIFY === "true"? await NestFactory.create<NestFastifyApplication>(AppModule,new FastifyAdapter({logger: true})): await NestFactory.create(AppModule);
  const PORT = app.get(ConfigService).get('PORT');
  // SwaggerModule.setup('doc', app,swaggerDocument);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggerInterceptor())
  await app.listen(PORT);
}
bootstrap();

