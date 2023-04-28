import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

import { SiteStatus } from '@plia/plia/types';
import { UserEntity } from '@plia/plia/user/api';

import { PageEntity } from '../page/page.entity';

@Entity('site')
export class SiteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true,
    unique: true,
  })
  url: string;

  @Column({
    nullable: true,
  })
  name: string;

  @Column({
    nullable: true,
  })
  domain: string;

  @Column({
    default: SiteStatus.UNPUBLISHED,
  })
  status: string;

  @OneToMany(() => PageEntity, (page) => page.site)
  pages: PageEntity[];

  @ManyToOne(() => UserEntity, (user) => user.sites)
  @JoinColumn({ name: 'user_id' })
  user: UserEntity;
}
