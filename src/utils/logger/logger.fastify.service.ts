import { Injectable, Logger, Scope } from '@nestjs/common';
import { Request, Response } from 'express';
import {FastifyLoggerInstance} from 'fastify'
import { Bindings } from 'fastify/types/logger';
import winston from 'winston';

@Injectable({ scope: Scope.TRANSIENT })
export class FastifyLogger implements FastifyLoggerInstance {

  info(msg: unknown){
    this.winstonLogging().log('info', msg);
  };

  warn(msg: unknown){
    this.winstonLogging().log('error', msg);
  };

  error(msg: unknown){
    this.winstonLogging().log('error', msg);
  };

  fatal(msg: unknown){
    this.winstonLogging().log('error', msg);
  };

  trace(msg: unknown){
    this.winstonLogging().log('info', msg);
  };

  debug(msg: unknown){
    this.winstonLogging().log('info', msg);
  };

  child(bindings: Bindings): FastifyLoggerInstance{
    return new FastifyLogger();
  }

  winstonLogging() {
    return winston.createLogger({
      level: '',
      format: winston.format.json(),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: 'log/error.log',
          level: 'error',
        }),
        new winston.transports.File({ filename: 'log/combined.log' }),
      ],
    });
  }

  
}
