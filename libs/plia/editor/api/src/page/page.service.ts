import { Repository } from 'typeorm';
import { REQUEST } from '@nestjs/core';
import { Inject, Injectable, Scope } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { UserEntity } from '@plia/plia/user/api';

import { PageEntity } from './page.entity';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';

@Injectable({ scope: Scope.REQUEST })
export class PageService {
  constructor(
    @InjectRepository(PageEntity)
    private pageRepository: Repository<PageEntity>,
    @Inject(REQUEST) private request: Request & { user: UserEntity },
  ) {}

  findAll(siteId: string) {
    return this.pageRepository.find({
      where: {
        site: {
          id: siteId,
          user: {
            id: this.request.user.id,
          },
        },
      },
    });
  }

  findOne(siteId: string, id: string) {
    return this.pageRepository.findOne({
      where: {
        id,
        site: {
          id: siteId,
          user: {
            id: this.request.user.id,
          },
        },
      },
    });
  }

  create(siteId: string, page: CreatePageDto) {
    return this.pageRepository.save({
      ...page,
      site: {
        id: siteId,
      },
    });
  }

  update(siteId: string, id: string, page: UpdatePageDto) {
    return this.pageRepository.update(
      {
        id,
        site: {
          id: siteId,
          user: {
            id: this.request.user.id,
          },
        },
      },
      page,
    );
  }

  remove(siteId: string, id: string) {
    return this.pageRepository.delete({
      id,
      site: {
        id: siteId,
        user: {
          id: this.request.user.id,
        },
      },
    });
  }
}
