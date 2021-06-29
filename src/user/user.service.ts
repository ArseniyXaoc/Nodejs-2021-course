import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
   user= ['1','2','3'];

     getAll(){
        return this.user;
    }

    //  create(){
    //     return this.user;
    // }

    //  getById(){
    //     return this.user;
    // }

    //  update(){
    //     return this.user;
    // }

    //  delete(){
    //     return this.user;
    // }
}
