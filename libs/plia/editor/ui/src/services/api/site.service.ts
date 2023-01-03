import { pliaApi } from '@plia/plia/axios';
import { Id, PublishSiteRequest } from '@plia/plia/types';

type PublishSiteInput = {
  id: Id;
  data: PublishSiteRequest;
};

export const SiteService = () => ({
  async publishSite({ id, data }: PublishSiteInput) {
    return pliaApi.post<never, PublishSiteRequest>(`site/${id}/publish`, data);
  },
});
