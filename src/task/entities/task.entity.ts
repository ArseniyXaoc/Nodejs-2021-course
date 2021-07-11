
import {Entity, PrimaryGeneratedColumn, Column,ManyToOne  } from "typeorm";
import { User } from "../../users/entities/user.entity";
import { Board } from "../../board/entities/board.entity";

@Entity()
export class Task {
    @PrimaryGeneratedColumn()
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

    @ManyToOne((_type) => Board, {nullable: true, onDelete: 'SET NULL'})
    @Column('uuid', {name: "boardId", nullable: true})
    boardId: string | null

    @Column({nullable: true})
    columnId: string;

}
