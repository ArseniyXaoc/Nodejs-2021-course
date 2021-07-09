import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { UsersModule } from "../users/users.module";
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [UsersModule, ConfigService],
})
export class AuthModule {}
