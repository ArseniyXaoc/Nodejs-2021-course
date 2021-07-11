import { Request } from 'express';
import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Body } from '@nestjs/common';
import { Observable } from 'rxjs';
import { MyLogger } from './logger.service';

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
  private readonly logger = new MyLogger();

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const ctx = context.switchToHttp();
    const {body, query} = ctx.getRequest<Request>();
    this.logger.log(`Request body: ${JSON.stringify(body)} QUERY:${JSON.stringify(query)} `);
    return next.handle();
  }
}
