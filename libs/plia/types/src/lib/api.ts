import { Id, Structure } from './structure';

export enum Domains {
  PLIA = 'PLIA',
}

export type CreateSiteRequest = {
  name: string;
  url?: string;
  domain: Domains;
};

export type CreateSiteResponse = CreateSiteRequest & {
  id: Id;
};

export type CreatePageRequest = {
  name: string;
  components_structure?: Structure;
};

export type CreatePageResponse = CreatePageRequest & {
  id: Id;
};

export type Site = {
  id: Id;
  url: string;
  name: string;
  domain: Domains;
  pages: Array<{
    id: Id;
    name: string;
  }>;
};

export type Sites = Array<Site>;

export type Page = {
  id: Id;
  name: string;
  components_structure: string;
};

export type UpdatePageRequest = {
  name?: string;
  components_structure: Structure;
};

export type Pages = Array<Page>;

export type EditorParams = {
  siteId: string;
  pageId: string;
};
