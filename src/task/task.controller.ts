import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException, UseFilters, UseGuards } from '@nestjs/common';
import { AuthGuard } from "../auth/auth.guard";

import { HttpExceptionFilter } from "../http-exception.filter";
import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('boards/:boardId/tasks')
@UseGuards(AuthGuard)
@UseFilters(new HttpExceptionFilter())
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  create(@Body() createTaskDto: CreateTaskDto, @Param('boardId') boardId: string) {
    Object.assign(createTaskDto, {boardId});
    return this.taskService.create(createTaskDto);
  }

  @Get()
  async findAll(@Param('boardId') boardId: string) {
    return this.taskService.findAll(boardId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string, @Param('boardId') boardId: string) {
    const task = await this.taskService.findOne(id, boardId);
    if(task) return task;
    throw new NotFoundException;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTaskDto: UpdateTaskDto) {
    return this.taskService.update(id, updateTaskDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.taskService.remove(id);
  }
}
