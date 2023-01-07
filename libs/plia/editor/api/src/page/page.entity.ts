import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';

import { Structure, StylesStructure } from '@plia/plia/types';

import { SiteEntity } from '../site/site.entity';

@Entity('page')
export class PageEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    nullable: true,
  })
  name: string;

  @Column('simple-json', { nullable: true })
  styles_structure: StylesStructure;

  @Column('simple-json', { nullable: true })
  components_structure: Structure;

  @ManyToOne(() => SiteEntity, (site) => site.pages)
  @JoinColumn({ name: 'site_id' })
  site: SiteEntity;
}
