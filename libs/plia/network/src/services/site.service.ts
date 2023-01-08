import {
  CreatePageRequest,
  CreatePageResponse,
  CreateSiteRequest,
  CreateSiteResponse,
  Id,
  PublishSiteRequest,
  Site,
  Sites,
} from '@plia/plia/types';

import { http } from '../http';
import { PublishSiteInput } from '../types/site.type';
import { createPagePayload, createSitePayload } from '../constants/site.const';

export const SiteService = () => ({
  async createSiteWithPage() {
    const { data: createdSite } = await http.post<CreateSiteResponse, CreateSiteRequest>(
      'site',
      createSitePayload,
    );

    const { data: createdPage } = await http.post<CreatePageResponse, CreatePageRequest>(
      `site/${createdSite.id}/page`,
      createPagePayload,
    );

    return {
      createdSite,
      createdPage,
    };
  },

  async getAllSites() {
    const { data: sites } = await http.get<Sites>('site');

    return sites;
  },

  async getSiteById({ queryKey }) {
    const [_, { id }] = queryKey;

    const { data: site } = await http.get<Site>(`site/${id}`);

    return site;
  },

  async deleteSiteById(id: Id): Promise<void> {
    const { data: deletedSite } = await http.delete(`site/${id}`);

    return deletedSite;
  },

  async updateSiteById(site: Site) {
    const { data: updatedSite } = await http.patch<Site, Omit<Site, 'id'>>(`site/${site.id}`, site);

    return updatedSite;
  },

  async publishSite({ id, data }: PublishSiteInput) {
    return http.post<never, PublishSiteRequest>(`site/${id}/publish`, data);
  },
});
