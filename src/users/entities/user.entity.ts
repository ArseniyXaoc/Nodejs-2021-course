import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    login: string;

    @Column()
    password: string;

    // static toResponse(user: User): IUser   {
    //     const { id, name, login } = user;
    //     return { id, name, login };
    //   }
}