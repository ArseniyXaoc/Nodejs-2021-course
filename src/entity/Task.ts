import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Task {

    @PrimaryGeneratedColumn("uuid")
    id!: number;

    @Column()
    title!: string;

    @Column()
    order!: string;

    @Column()
    description!: string;

    @Column()
    userId!: string;

    @Column()
    boardId!: string;

    @Column()
    columnId!: string;

}
