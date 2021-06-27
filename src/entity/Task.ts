import {Entity, PrimaryGeneratedColumn, Column,ManyToOne  } from "typeorm";
import { User, Board } from ".";

interface ITask {
    
title:string
order:number
id:string
description:string
columnId:string | null
boardId:string | null
}

@Entity()
 class Task {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column()
    order: number;

    @Column()
    description: string;

    @ManyToOne(() => User, user => user.id, {nullable: true, onDelete: 'SET NULL'})
    @Column('uuid', {name: "userId", nullable: true})
    userId: string | null
    // @JoinColumn({ name: "userId" })
    // userId: string | null;

    @ManyToOne((_type) => Board, {nullable: true, onDelete: 'SET NULL'})
    @Column('uuid', {name: "boardId", nullable: true})
    boardId: string | null
    // @ManyToOne(() => Board, board => board.id, {nullable: true, onDelete: 'SET NULL'})
    // @JoinColumn({ name: "boardId.id" })
    // boardId: string | null;

    @Column({nullable: true})
    columnId: string;

    // @Column({ nullable: true})
    // userId: string;

    // @Column({ nullable: true})
    // boardId: string;

    // @Column({ nullable: true})
    // columnId: string;
    

}

export {Task, ITask}
