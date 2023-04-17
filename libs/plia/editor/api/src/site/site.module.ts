import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SiteEntity } from './site.entity';
import { SiteController } from './site.controller';
import { SiteService } from './site.service';
import { HtmlFileService } from './helpers/storage.helper';

@Module({
  imports: [TypeOrmModule.forFeature([SiteEntity])],
  controllers: [SiteController],
  providers: [SiteService, HtmlFileService],
})
export class SiteModule {}
