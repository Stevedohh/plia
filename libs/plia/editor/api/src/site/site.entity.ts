import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PageEntity } from '../page/page.entity';

@Entity('site')
export class SiteEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  url: string;

  @Column()
  name: string;

  @Column()
  domain: string;

  @OneToMany(() => PageEntity, (page) => page.site)
  pages: PageEntity[];
}
