import { SiteService } from './site.service';
import { PageService } from './page.service';

export type HttpContextProviderProps = {
  site: () => ReturnType<typeof SiteService>;
  page: () => ReturnType<typeof PageService>;
};

export const HttpContextProvider: HttpContextProviderProps = {
  site: SiteService,
  page: PageService,
};
