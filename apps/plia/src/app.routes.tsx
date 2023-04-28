import { lazy } from 'solid-js';
import { ProfilePage } from '@plia/plia/user/ui';
import { LoginPage, Protected, RegisterPage } from '@plia/plia/auth/ui';
import { SitesPage } from '@plia/plia/site';
import { EditorPage, PreviewPage } from '@plia/plia/editor/ui';
import { LandingPage } from '@plia/plia/landing/ui';

export const routes = [
  {
    path: '/',
    component: lazy(() => Promise.resolve({ default: LandingPage })),
  },
  {
    path: '/login',
    component: lazy(() => Promise.resolve({ default: LoginPage })),
  },
  {
    path: '/register',
    component: lazy(() => Promise.resolve({ default: RegisterPage })),
  },
  {
    path: '/profile',
    component: lazy(() =>
      Promise.resolve({
        default: () => (
          <Protected navigate="/">
            <ProfilePage />
          </Protected>
        ),
      }),
    ),
  },
  {
    path: '/sites',
    component: lazy(() =>
      Promise.resolve({
        default: () => (
          <Protected navigate="/">
            <SitesPage />
          </Protected>
        ),
      }),
    ),
  },
  {
    path: '/builder/site/:siteId/page/:pageId',
    component: null,
    children: [
      {
        path: '/',
        component: lazy(() =>
          Promise.resolve({
            default: () => (
              <Protected navigate="/">
                <EditorPage />
              </Protected>
            ),
          }),
        ),
      },
      {
        path: '/preview',
        component: lazy(() =>
          Promise.resolve({
            default: () => (
              <Protected navigate="/">
                <PreviewPage />
              </Protected>
            ),
          }),
        ),
      },
    ],
  },
];
