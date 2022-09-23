import { Routes } from '@nestjs/core';
import { PageModule, SiteModule } from '@plia/plia/editor/api';

export const AppRoutes: Routes = [
  {
    module: SiteModule,
    path: '/site',
    children: [
      {
        module: PageModule,
        path: '/:siteId/page',
      },
    ],
  },
];
