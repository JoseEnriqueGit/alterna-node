import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export default class Villian {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column("text")
	nombre!: string;

	@Column("text")
	alte!: string;
}
