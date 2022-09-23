import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { SiteEntity } from './site.entity';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(SiteEntity)
    private siteRepository: Repository<SiteEntity>,
  ) {}

  findAll() {
    return this.siteRepository.find({
      select: {
        domain: true,
        url: true,
        id: true,
        name: true,
        pages: {
          id: true,
          name: true,
        },
      },
      relations: {
        pages: true,
      },
    });
  }

  findOne(id: string) {
    return this.siteRepository.findOne({
      select: {
        domain: true,
        url: true,
        id: true,
        name: true,
        pages: {
          id: true,
          name: true,
        },
      },
      relations: {
        pages: true,
      },
      where: {
        id,
      },
    });
  }

  create(site: CreateSiteDto) {
    return this.siteRepository.save(site);
  }

  update(id: string, site: UpdateSiteDto) {
    return this.siteRepository.update({ id }, site);
  }

  remove(id: string) {
    return this.siteRepository.delete({ id });
  }
}
