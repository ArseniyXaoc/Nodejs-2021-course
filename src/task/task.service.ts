import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from './entities/task.entity'
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  create(createTaskDto: CreateTaskDto) {
    return this.taskRepository.save(createTaskDto);
  }

  findAll(boardId: string) {
    return this.taskRepository.find({where: {boardId}});
  }

  findOne(id: string, boardId: string) {
    return this.taskRepository.findOne({where: {id, boardId}});
  }

  update(id: string, updateTaskDto: UpdateTaskDto) {
    return this.taskRepository.update({id}, updateTaskDto);
  }

  remove(id: string) {
    return this.taskRepository.delete({id});
  }

  removeUser(userId: string) {
    return this.taskRepository.update({userId}, {userId: null});
  }
}
