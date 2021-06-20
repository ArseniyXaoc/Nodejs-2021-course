import {Entity, PrimaryGeneratedColumn, Column,ManyToOne , JoinColumn } from "typeorm";
import { User, Board } from ".";

@Entity()
export class Task {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    order: number;

    @Column()
    description: string;

    @ManyToOne(() => User, user => user.id, {nullable: true})
    @JoinColumn({ name: "userId" })
    userId: string | null;

    @ManyToOne(() => Board, board => board.id, {nullable: true})
    @JoinColumn({ name: "boardId" })
    boardId: string | null;

    @Column({nullable: true})
    columnId: string;

    // @Column({ nullable: true})
    // userId: string;

    // @Column({ nullable: true})
    // boardId: string;

    // @Column({ nullable: true})
    // columnId: string;

}
