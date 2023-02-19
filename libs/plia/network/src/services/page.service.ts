import { UpdatePageRequest, Page } from '@plia/plia/types';

import { http } from '../http';

export type PageServiceReturnType = ReturnType<typeof PageService>;

export const PageService = () => ({
  async updatePage({ siteId, pageId, updatedPage }: UpdatePageRequest) {
    return http.patch(`/site/${siteId}/page/${pageId}`, updatedPage);
  },

  async getPage({ siteId, pageId }) {
    return http.get<Page>(`/site/${siteId}/page/${pageId}`);
  },
});
