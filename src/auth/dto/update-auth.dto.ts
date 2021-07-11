import { PartialType } from '@nestjs/swagger';
import { UserLoginDto } from './userlogin-auth.dto';

export class UpdateAuthDto extends PartialType(UserLoginDto) {}
