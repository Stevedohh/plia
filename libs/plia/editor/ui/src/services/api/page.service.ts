import { pliaApi } from '@plia/plia/axios';
import { EditorParams, UpdatePageRequest } from '@plia/plia/types';

export const PageService = () => ({
  async updatePage({ siteId, pageId }: EditorParams, updatedPage: UpdatePageRequest) {
    return pliaApi.patch(`/site/${siteId}/page/${pageId}`, updatedPage);
  },
});
