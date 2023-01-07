import { pliaApi } from '@plia/plia/axios';
import { Id, PublishSiteRequest, Site } from '@plia/plia/types';

type PublishSiteInput = {
  id: Id;
  data: PublishSiteRequest;
};

export const SiteService = () => ({
  async publishSite({ id, data }: PublishSiteInput) {
    return pliaApi.post<never, PublishSiteRequest>(`site/${id}/publish`, data);
  },

  async getSiteById({ queryKey }) {
    const [_, { id }] = queryKey;

    const { data: site } = await pliaApi.get<Site>(`site/${id}`);

    return site;
  },
});
