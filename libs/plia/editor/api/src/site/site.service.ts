import { Repository } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Inject, Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { SiteStatus } from '@plia/plia/types';
import { UserEntity } from '@plia/plia/user/api';

import { SiteEntity } from './site.entity';
import { CreateSiteDto } from './dto/create-site.dto';
import { UpdateSiteDto } from './dto/update-site.dto';
import { PublishSiteDto } from './dto/publish-site.dto';
import { HtmlFileService } from './helpers/storage.helper';

@Injectable({ scope: Scope.REQUEST })
export class SiteService {
  constructor(
    @InjectRepository(SiteEntity)
    private siteRepository: Repository<SiteEntity>,
    private htmlFileService: HtmlFileService,
    @Inject(REQUEST) private request: Request & { user: UserEntity },
  ) {}

  findAllByUser() {
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
      where: {
        user: {
          id: this.request.user.id,
        },
      },
      relations: {
        pages: true,
      },
    });
  }

  findOneByUser(id: string) {
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
        user: {
          id: this.request.user.id,
        },
      },
    });
  }

  async create(site: CreateSiteDto) {
    return this.siteRepository.save({
      ...site,
      user: {
        id: this.request.user.id,
      },
    });
  }

  update(id: string, site: UpdateSiteDto) {
    return this.siteRepository.manager.transaction(async (tsx) => {
      const prevSite = await this.findOneByUser(id);

      await tsx.update(
        SiteEntity,
        {
          id,
          user: {
            id: this.request.user.id,
          },
        },
        site,
      );

      if (prevSite.url && prevSite.url !== site.url) {
        await this.htmlFileService.rename(prevSite.url, site.url);
      }
    });
  }

  remove(id: string) {
    return this.siteRepository.manager.transaction(async (tsx) => {
      const site = await this.findOneByUser(id);

      await tsx.delete(SiteEntity, {
        id,
        user: {
          id: this.request.user.id,
        },
      });

      if (site.url) {
        await this.htmlFileService.delete(site.url);
      }
    });
  }

  publish(id: string, site: PublishSiteDto) {
    return this.siteRepository.manager.transaction(async (tsx) => {
      await tsx.update(
        SiteEntity,
        {
          id,
          user: {
            id: this.request.user.id,
          },
        },
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
