import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseFilters,
  HttpStatus,
  NotFoundException,
  UseGuards,
  Req,
  Res,
  UseInterceptors,
} from '@nestjs/common';
import { MyLogger } from "../utils/logger/logger.service";
import { AuthGuard } from "../auth/auth.guard";
import { HttpExceptionFilter } from '../utils/filter/http-exception.filter';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
@UseGuards(AuthGuard)
@UseFilters(new HttpExceptionFilter())
export class UsersController {
  private readonly logger = new MyLogger();

  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const user = await this.usersService.findOne(id);
    if(user) return user;
    throw new NotFoundException();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
