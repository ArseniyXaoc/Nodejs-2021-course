import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { LoggerMidleware } from './utils/logger/logger.middleware';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { BoardModule } from './board/board.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

import typeOrmConfig from './db/dbconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),

    TaskModule,

    BoardModule,

    UsersModule,

    AuthModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private connection: Connection) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMidleware)
    .forRoutes({path: '*', method: RequestMethod.ALL});
  }
}
