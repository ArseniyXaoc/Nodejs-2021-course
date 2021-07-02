import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskModule } from './task/task.module';
import { BoardModule } from './board/board.module';
import { UsersModule } from './users/users.module';

import typeOrmConfig from './db/dbconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),

    TaskModule,

    BoardModule,

    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
