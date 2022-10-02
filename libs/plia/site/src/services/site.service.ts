import { pliaApi } from '@plia/plia/axios';
import {
  CreatePageRequest,
  CreatePageResponse,
  CreateSiteRequest,
  CreateSiteResponse,
  Id,
  Site,
  Sites,
} from '@plia/plia/types';

import { createPagePayload, createSitePayload } from '../constants';

export const SiteService = () => ({
  async createSiteWithPage() {
    const { data: createdSite } = await pliaApi.post<CreateSiteResponse, CreateSiteRequest>(
      'site',
      createSitePayload,
    );

    const { data: createdPage } = await pliaApi.post<CreatePageResponse, CreatePageRequest>(
      `site/${createdSite.id}/page`,
      createPagePayload,
    );

    return {
      createdSite,
      createdPage,
    };
  },

  async getAllSites() {
    const { data: sites } = await pliaApi.get<Sites>('site');

    return sites;
  },

  async getSiteById(id: Id) {
    const { data: site } = await pliaApi.get<Site>(`site/${id}`);

    return site;
  },

  async deleteSiteById(id: Id): Promise<void> {
    const { data: deletedSite } = await pliaApi.delete(`site/${id}`);

    return deletedSite;
  },

  async updateSiteById(site: Site) {
    const { data: updatedSite } = await pliaApi.patch<Site, Omit<Site, 'id'>>(
      `site/${site.id}`,
      site,
    );

    return updatedSite;
  },
});
