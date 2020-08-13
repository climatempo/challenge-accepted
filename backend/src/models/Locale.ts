import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "locales" })
export class Locale {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  identification!: number;

  @Column()
  name!: string;

  @Column()
  state!: string;

  @Column()
  latitude!: number;

  @Column()
  longitude!: number;
}
