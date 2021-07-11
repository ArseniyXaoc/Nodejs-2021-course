import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ConfigModule } from '@nestjs/config';
import { LoggerMidleware } from './utils/logger/logger.middleware';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { BoardModule } from './board/board.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import connectionOptions from './ormconfig';

import { Task } from './task/entities/task.entity';
import { Board } from "./board/entities/board.entity";
import { User } from './entity';
import { db1624266293839 } from './migration/1624266293839-db';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),

    TypeOrmModule.forRoot({
      name: process.env['DB_CONNECTION'],
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'user',
      password: '123',
      database: 'userdb',
      synchronize: false,
      logging: false,
      entities: [User, Board, Task],
      migrationsRun: true,
      migrations: [db1624266293839],
      cli: {
        entitiesDir: './entity',
        migrationsDir: './migration',
        subscribersDir: 'build/subscriber',
      },
      autoLoadEntities: true,
    }),

    TaskModule,

    BoardModule,

    UsersModule,

    AuthModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private connection: Connection, private readonly appService: AppService) {}

  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMidleware)
    .forRoutes({path: '*', method: RequestMethod.ALL});
  }
}


