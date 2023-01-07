import { Id, Structure } from './structure';

export enum Domains {
  PLIA = 'PLIA',
}

export type CreateSiteRequest = {
  name: string;
  domain: Domains;
  url?: string;
};

export type PublishSiteMetaInfo = {
  name: string;
  url: string;
};

export type PublishSiteRequest = {
  html: string;
  css: string;
} & Partial<PublishSiteMetaInfo>;

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
  domain?: Domains;
  status?: SiteStatus;
  pages?: Array<{
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

export enum SiteStatus {
  PUBLISHED = 'PUBLISHED',
  UNPUBLISHED = 'UNPUBLISHED',
}
