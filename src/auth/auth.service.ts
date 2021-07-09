import jwt from 'jsonwebtoken';
import bcript from 'bcrypt';
import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { UserLoginDto } from './dto/userlogin-auth.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UsersService) {}

  async validate(userLogin: UserLoginDto) {
    const { login, password }: UserLoginDto = userLogin;
    const employe : Promise<UserLoginDto | undefined> = this.userService.findLogin({login});
    return employe.then((async data => {
      if(data){
        const checkHash = await bcript.compare(password, data.password).then((result: boolean) => result);
        return checkHash;
      } return false;
    }));
  }
}
