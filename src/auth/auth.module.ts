import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStratege } from './local.strategy';
import { UsersModule } from "../users/users.module";
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService, LocalStratege],
  imports: [UsersModule, ConfigService, PassportModule],
})
export class AuthModule {}
