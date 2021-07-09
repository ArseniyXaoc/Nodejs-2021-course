import jwt from 'jsonwebtoken';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private readonly configService: ConfigService){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const secretKey: jwt.Secret = this.configService.get('AUTH_KEY') || '';
    const sessionToken: string | undefined = request.headers.authorization;
    let tokenCheck = false;
    if (!sessionToken) {
      throw new UnauthorizedException();
    }

    const [type, token] = sessionToken.split(' ');
    if (token && type === 'Bearer') {
      jwt.verify(token, secretKey, (_err, decoded) => {
        if (decoded) {
          tokenCheck = true;
        } else tokenCheck = false;
      });
    } else {
      return false;
    }
    return tokenCheck;
  }
}
