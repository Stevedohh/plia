import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

import { SiteStatus } from '@plia/plia/types';

import { PageEntity } from '../page/page.entity';

@Entity('site')
export class SiteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true,
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
}
