import { Routes } from '@nestjs/core';
import { RoleModule } from './partitions';
import { UserModule } from './user.module';

export const UserRoutes: Routes = [
  {
    module: UserModule,
    path: '/user',
    children: [
      {
        module: RoleModule,
        path: '/role',
      },
    ],
  },
];
