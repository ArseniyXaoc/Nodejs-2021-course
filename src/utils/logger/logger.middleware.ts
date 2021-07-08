import { finished } from 'stream';
import {Injectable, NestMiddleware, Next, Req, Res} from '@nestjs/common';
import {Request, Response, NextFunction} from 'express';
import { MyLogger } from './logger.service';

@Injectable() 
    export class LoggerMidleware implements NestMiddleware {
        private readonly logger = new MyLogger();

        use(@Req() req: Request, @Res() res: Response, @Next() next: NextFunction) {
            const { method, url, query, body, params } = req;
            const start = Date.now();
            const date =new Date();
            const min = date.getMinutes();
            const sec = date.getSeconds();
            next();
            finished(res, () => {
              const ms = Date.now() - start;
              const { statusCode } = res;
              this.logger.log(`${method} ${url} ${statusCode} ${min} ${sec} [${ms}ms]`)
            });

        }
    }
