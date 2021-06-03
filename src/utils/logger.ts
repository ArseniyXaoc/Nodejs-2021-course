import { Request, Response, NextFunction } from 'express';
import { finished } from 'stream';
import winston from 'winston';
// import {createWriteStream} from 'fs';
// import path from 'path';

// const accessLogStream = createWriteStream(path.join(__dirname, 'acccess.log'), {flags: 'a'});
const log = winston.createLogger({
  level: '',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const logger = (req: Request, res: Response, next: NextFunction) => {
  const { method, url, query, body } = req;
  const start = Date.now();
  const date =new Date();
  const min = date.getMinutes();
  const sec = date.getSeconds();
  next();
  finished(res, () => {
    const ms = Date.now() - start;
    const { statusCode } = res;
    log.log({
      level: 'info',
      message: `${method} ${url} ${statusCode} ${JSON.stringify(query)} ${JSON.stringify(body)} ${min} ${sec} [${ms}ms]`,
    });
  });
};

const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction
): void => {
  log.log({
    level: 'error',
    message: err.message,
  });
  res.status(500);
  res.json({
    message: err.message,
  });
};

process.on('uncaughtException', (error: Error) => {
  log.log({
    level: 'error',
    message: `Uncaught exception detected: ${error.message}`,
  });
  process.exit(1);
});

process.on('unhandledRejection', (reason: Error, promise: Promise<any>) => {
  log.log({
    level: 'error',
    message: `Unhandled rejection detected: ${reason.message} on promise ${promise} `,
  });
  process.exit(1);
});

export { logger, errorHandler };
