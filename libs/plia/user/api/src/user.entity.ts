import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { SiteEntity } from '@plia/plia/editor/api';
import { RoleEntity } from './partitions';

@Entity('user')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  full_name: string;

  @Column()
  img_url: string;

  @OneToOne(() => RoleEntity)
  @JoinColumn({ name: 'role_id' })
  role: RoleEntity;

  @OneToMany(() => SiteEntity, (site) => site.user)
  sites: SiteEntity[];
}
