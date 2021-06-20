import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";
import { Columns } from "./Columns";

@Entity()
export class Board {

    @PrimaryGeneratedColumn("uuid")
    id: number;

    @Column()
    title: string;

    // @Column({type: "json", nullable: true})
    // columns?: string;

    @OneToMany(() => Columns, column => column.board)
    columns: Columns[];

}

