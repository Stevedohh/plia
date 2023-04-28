import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('role')
export class RoleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  value: string;
}
