import { Injectable, Logger, Scope } from '@nestjs/common';
import { Request, Response } from 'express';

import winston from 'winston';

@Injectable({ scope: Scope.TRANSIENT })
export class MyLogger extends Logger {
  log(message: string) {
    this.winstonLogging().log('info', message);
    super.log(`LOG: ${message}`);
  }

  customLogger(req: Request): void {
    const { method, url, query, body } = req;
    const start = Date.now();
    const date =new Date();
    const min = date.getMinutes();
    const sec = date.getSeconds();
    const ms = date.getMilliseconds();
    this.winstonLogging().log(
      'info',
      ` ${method} ${url} ${JSON.stringify(query)} ${JSON.stringify(body)} ${min}:${sec}:${ms}`,
    );
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
