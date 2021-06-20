import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import { Board } from "./Board";

@Entity()
export class Columns {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    title: string;

    @Column()
    oreder: number;

    @ManyToOne(() => Board)
    @JoinColumn()
    board: Board;

}

