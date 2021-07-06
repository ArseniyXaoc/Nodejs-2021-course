import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import jwt from 'jsonwebtoken';
import { AuthService } from './auth.service';
import { UserLoginDto } from './dto/userlogin-auth.dto';
import ENV from '../common/config';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
 async findOne(@Body() userLoginDto: UserLoginDto ) {
    const hash = await this.authService.validate(userLoginDto);
    if(hash){
     const token = this.createToken(userLoginDto);
     return token;
    }
    throw new NotFoundException();
    
  }

  private createToken(user: UserLoginDto){
    const secretKey: jwt.Secret = ENV.AUTH_KEY || '';
    const payload = { userId: user.id, login: user.login };
    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
    return {token};
  }
}
