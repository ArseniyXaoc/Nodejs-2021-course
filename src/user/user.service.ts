import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  //  create(){
  //     return this.user;
  // }

  //  getById(){
  //     return this.user;
  // }

  //  update(){
  //     return this.user;
  // }

  //  delete(){
  //     return this.user;
  // }
}
