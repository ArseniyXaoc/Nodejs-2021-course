import { Injectable, Logger, Scope } from '@nestjs/common';
import { Request, Response } from 'express';

import winston from 'winston';

@Injectable({ scope: Scope.TRANSIENT })
export class MyLogger extends Logger {
  log(message: string) {
    this.winstonLogging().log('info', message);
    super.log(`LOG: ${message}`);
  }

  error(message: string, trace: string) {
    super.error(`LOG: ${message}`, trace);
  }

  warn(massage: string) {}

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
