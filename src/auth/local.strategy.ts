import {Strategy} from 'passport-local';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {AuthService} from './auth.service';

@Injectable()
export class LocalStratege extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService){
        super();
    }

    async validate(login: string, password: string) {
        const user = await this.authService.validate(login, password); 
        if(!user){ 
            throw new UnauthorizedException();
        }
        return user;
    }
}