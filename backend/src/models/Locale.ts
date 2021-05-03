import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('locales')
class Locale {
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Column()
  name!: string;
  
  @Column()
  state!: string;
  
  @Column()
  latitude!: number;
  
  @Column()
  longitude!: number;

  @CreateDateColumn()
  created_at!: Date;

  @UpdateDateColumn()
  updated_at!: Date;
}

export default Locale;