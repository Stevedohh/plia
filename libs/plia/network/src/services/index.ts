import { AuthService } from './auth.service';
import { PageService } from './page.service';
import { SiteService } from './site.service';

export type HttpContextProviderProps = {
  site: () => ReturnType<typeof SiteService>;
  page: () => ReturnType<typeof PageService>;
  auth: () => ReturnType<typeof AuthService>;
};

export const HttpContextProvider: HttpContextProviderProps = {
  site: SiteService,
  page: PageService,
  auth: AuthService,
};
