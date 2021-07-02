import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
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
    return this.userRepository.findOne(id, {select:['id', 'name', 'login']});
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({id}, updateUserDto);
  }

  remove(id: string) {
    return this.userRepository.delete({id});
  }
}

type IUser = {
  id: string;
  name: string;
  login: string;
  password?: string;
}
