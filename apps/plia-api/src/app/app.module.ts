import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from '@nestjs/core';

import { PageModule, SiteModule } from '@plia/plia/editor/api';
import { TypeOrmConfigService } from '../config/config.service';

import { AppRoutes } from './app.routes';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmConfigService,
    }),
    RouterModule.register(AppRoutes),
    SiteModule,
    PageModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
