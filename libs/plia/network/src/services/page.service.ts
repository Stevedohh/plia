import { EditorParams, UpdatePageRequest } from '@plia/plia/types';

import { http } from '../http';

export const PageService = () => ({
  async updatePage({ siteId, pageId }: EditorParams, updatedPage: UpdatePageRequest) {
    return http.patch(`/site/${siteId}/page/${pageId}`, updatedPage);
  },
});
