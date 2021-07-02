import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Task } from 'src/task/entities/task.entity';
import { Board } from './entities/board.entity';
import { BoardService } from './board.service';
import { BoardController } from './board.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Board, Task])],
  controllers: [BoardController],
  providers: [BoardService]
})
export class BoardModule {}
