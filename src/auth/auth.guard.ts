import jwt from 'jsonwebtoken';
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Observable } from 'rxjs';
import ENV from '../common/config';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const secret = ENV.AUTH_KEY || '';
    const sessionToken: string | undefined = request.headers.authorization;
    let tokenCheck = false;
    if (!sessionToken) {
      throw new UnauthorizedException();
    }

    const [type, token] = sessionToken.split(' ');
    if (token && type === 'Bearer') {
      jwt.verify(token, secret, (_err, decoded) => {
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
