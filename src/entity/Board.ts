import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Board {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    title: string;

    @Column({type: 'json', array: false})
    columns: Array<{title: string, order: number}>

}

