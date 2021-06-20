import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { User, Board } from ".";

@Entity()
export class Task {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    title: string;

    @Column()
    order: number;

    @Column()
    description: string;

    @ManyToOne(() => User)
    @JoinColumn()
    user: User;

    @ManyToOne(() => Board)
    @JoinColumn()
    board: string;

    @Column()
    columnsId: string;

    // @Column({ nullable: true})
    // userId: string;

    // @Column({ nullable: true})
    // boardId: string;

    // @Column({ nullable: true})
    // columnId: string;

}
