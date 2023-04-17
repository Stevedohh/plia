import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { SiteStatus } from '@plia/plia/types';

import { SiteEntity } from './site.entity';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { PublishSiteDto } from './dto/publish-site.dto';
import { HtmlFileService } from './helpers/storage.helper';

@Injectable()
export class SiteService {
  constructor(
    @InjectRepository(SiteEntity)
    private siteRepository: Repository<SiteEntity>,
    private htmlFileService: HtmlFileService,
  ) {}

  findAll() {
    return this.siteRepository.find({
      select: {
        domain: true,
        url: true,
        id: true,
        name: true,
        status: true,
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
        status: true,
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
    return this.siteRepository.manager.transaction(async (tsx) => {
      const prevSite = await this.findOne(id);

      await tsx.update(SiteEntity, { id }, site);

      if (prevSite.url && prevSite.url !== site.url) {
        await this.htmlFileService.rename(prevSite.url, site.url);
      }
    });
  }

  remove(id: string) {
    return this.siteRepository.manager.transaction(async (tsx) => {
      const site = await this.findOne(id);

      await tsx.delete(SiteEntity, { id });

      await this.htmlFileService.delete(site.url);
    });
  }

  publish(id: string, site: PublishSiteDto) {
    return this.siteRepository.manager.transaction(async (tsx) => {
      await tsx.update(
        SiteEntity,
        { id },
        {
          name: site.name,
          url: site.url,
          status: SiteStatus.PUBLISHED,
        },
      );

      await this.htmlFileService.create(site);
    });
  }
}
