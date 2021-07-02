import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { UserLoginDto } from './dto/userlogin-auth.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService){}

  validate(userLogin: UserLoginDto) {
    return this.userService.findLogin(userLogin);
  }

}
