import { SiteService, SiteServiceReturnType } from './site.service';
import { PageService, PageServiceReturnType } from './page.service';

export type HttpContextProviderProps = {
  site: () => SiteServiceReturnType;
  page: () => PageServiceReturnType;
};

export const HttpContextProvider: HttpContextProviderProps = {
  site: SiteService,
  page: PageService,
};
