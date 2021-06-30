import { IsAlphanumeric, IsUUID } from "class-validator";

export class CreateUserDto {
    @IsUUID('all')
    id:string;

    @IsAlphanumeric()
    name: string;

    @IsAlphanumeric()
    login: string;

    password: string;
}
