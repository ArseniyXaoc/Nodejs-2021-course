import { finished } from 'stream';
import {Injectable, NestMiddleware} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import { MyLogger } from './logger.service';

@Injectable() 
    export class LoggerMidleware implements NestMiddleware {
        private readonly logger = new MyLogger();

        use(req: Request, res: Response, next: NextFunction) {
            const { method, url, query, body } = req;
            const start = Date.now();
            const date =new Date();
            const min = date.getMinutes();
            const sec = date.getSeconds();
            next();
            finished(res, () => {
              const ms = Date.now() - start;
              const { statusCode } = res;
              this.logger.log(`${method} ${url} ${statusCode} ${JSON.stringify(query)} ${JSON.stringify(body)} ${min} ${sec} [${ms}ms]`)
            });

        }
    }
