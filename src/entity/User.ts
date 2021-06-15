import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import "reflect-metadata";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column()
    name!: string;

    @Column()
    login!: string;

    @Column()
    password!: number;
}
