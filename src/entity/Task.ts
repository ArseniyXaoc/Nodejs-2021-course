import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column()
    title!: string;

    @Column()
    order!: string;

    @Column()
    description!: string;

    @Column()
    userId!: string | null;

    @Column()
    boardId!: string;

    @Column()
    columnId!: string;

}
