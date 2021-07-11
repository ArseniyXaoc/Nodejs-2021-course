import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from 'src/task/entities/task.entity';
import { Board } from './entities/board.entity'
import { CreateBoardDto } from './dto/create-board.dto';
import { UpdateBoardDto } from './dto/update-board.dto';

@Injectable()
export class BoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  create(createBoardDto: CreateBoardDto) {
    return this.boardRepository.save(createBoardDto);
  }

  findAll() {
    return this.boardRepository.find();
  }

  findOne(id: string) {
    return this.boardRepository.findOne(id);
  }

  update(id: string, updateBoardDto: UpdateBoardDto) {
    return this.boardRepository.update({id}, updateBoardDto);
  }

  remove(id: string) {
    this.taskRepository.delete({boardId:id});
    return this.boardRepository.delete({id});
  }
}
