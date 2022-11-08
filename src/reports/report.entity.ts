import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;
}
