import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import "reflect-metadata";

interface IUser  {
    id:string;
    name: string;
    login: string;
  }
  
  interface ISecretUser extends IUser {
    password: string;
  }

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id!: string;

    @Column()
    name!: string;

    @Column()
    login!: string;

    @Column()
    password!: string;

    static toResponse(user: ISecretUser): IUser   {
        const { id, name, login } = user;
        return { id, name, login };
      }
}
