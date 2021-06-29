import { Controller, Delete, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
    constructor(private userService: UserService){}

    @Get()
    @HttpCode(HttpStatus.OK)
    getAllUsers() {
        
        return this.userService.getAll();
    }

    // @Post

    // @Delete

}
