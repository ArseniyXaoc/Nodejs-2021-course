import {Request, Response, NextFunction} from 'express';
import {finished} from 'stream';

const logger = (req: Request, res: Response, next: NextFunction) =>{
    const {method, url, query, body } = req;
    const start = Date.now();
    console.log(url, query, body);
    next();

    finished(res, () => {  // npm package on-finished
        const ms = Date.now() - start;
        const {statusCode} = res;
        console.dir(`${method} ${url} ${statusCode} ${JSON.stringify(query)} ${JSON.stringify(body)} [${ms}ms]`);
      })
}

const errorHandler = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
 console.error(err);
 res.status(500);
 res.json({
     message: err.message
 })
}

export {logger, errorHandler}