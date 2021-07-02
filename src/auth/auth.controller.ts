import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/userlogin-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  findOne(@Body() userLoginDto: UserLoginDto ) {
    return this.authService.validate(userLoginDto);
  }
}
