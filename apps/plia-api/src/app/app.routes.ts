import { Routes } from '@nestjs/core';
import { PageModule, SiteModule } from '@plia/plia/editor/api';
import { UserRoutes } from '@plia/plia/user/api';
import { AuthRoutes } from '@plia/plia/auth/api';

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
  ...UserRoutes,
  ...AuthRoutes,
];
