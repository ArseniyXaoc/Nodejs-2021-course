import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger'
import YAML from 'yamljs';
import path from 'path';
import { NestFastifyApplication, FastifyAdapter } from '@nestjs/platform-fastify';
import { LoggerInterceptor } from './utils/logger/logger.interceptor';
import { MyLogger } from './utils/logger/logger.service';
import ENV from './common/config';
import { AppModule } from './app.module';
import typeOrmConfig from './db/dbconfig';

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

async function bootstrap() {
  const app = ENV.USE_FASTIFY === "true"? await NestFactory.create<NestFastifyApplication>(AppModule,new FastifyAdapter({logger: true})): await NestFactory.create(AppModule);
  // SwaggerModule.setup('doc', app,swaggerDocument);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalInterceptors(new LoggerInterceptor())
  await app.listen(3000);
}
bootstrap();

