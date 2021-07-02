import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Task } from 'src/task/entities/task.entity';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    @InjectRepository(Task)
    private taskRepository: Repository<Task>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user: IUser = await this.userRepository.save(createUserDto);
    delete user.password;
    return user;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne(id, { select: ['id', 'name', 'login'] });
  }

  findLogin({ login, password }: { login: string; password: string }) {
    return this.userRepository.findOne({ where: { login, password } });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id }, updateUserDto);
  }

  remove(id: string) {
    this.taskRepository.update({ userId: id }, { userId: null });
    return this.userRepository.delete({ id });
  }
}

type IUser = {
  id: string;
  name: string;
  login: string;
  password?: string;
};
