import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { PageEntity } from './page.entity';
import { CreatePageDto } from './dto/create-page.dto';
import { UpdatePageDto } from './dto/update-page.dto';

@Injectable()
export class PageService {
  constructor(
    @InjectRepository(PageEntity)
    private pageRepository: Repository<PageEntity>,
  ) {}

  findAll(siteId: string) {
    return this.pageRepository.find({
      where: {
        site: {
          id: siteId,
        },
      },
    });
  }

  findOne(siteId: string, id: string) {
    // TODO add exception when page or site not found with interceptor
    return this.pageRepository.findOne({ where: { id, site: { id: siteId } } });
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
        },
      },
      page,
    );
  }

  remove(siteId: string, id: string) {
    return this.pageRepository.delete({ id, site: { id: siteId } });
  }
}
