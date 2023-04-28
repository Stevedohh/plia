import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RouterModule } from '@nestjs/core';

import { PageModule, SiteModule } from '@plia/plia/editor/api';
import { UserModule } from '@plia/plia/user/api';
import { AuthMiddleware, AuthModule } from '@plia/plia/auth/api';

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
    UserModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
