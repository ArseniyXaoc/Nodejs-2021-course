import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger'
import YAML from 'yamljs';
import path from 'path';
import { MyLogger } from './utils/logger/logger.service';

import { AppModule } from './app.module';
import typeOrmConfig from './db/dbconfig';

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new MyLogger(),
  });
  SwaggerModule.setup('doc', app,swaggerDocument);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
