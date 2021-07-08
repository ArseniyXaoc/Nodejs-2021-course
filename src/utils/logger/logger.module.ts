import  { Module } from '@nestjs/common';
import { FastifyLogger } from './logger.fastify.service';
import { MyLogger } from './logger.service';

@Module({
    providers: [MyLogger, FastifyLogger],
    exports: [MyLogger, FastifyLogger],
})
export class LoggerModule {}