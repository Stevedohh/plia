import { useService } from 'solid-services';
import { PublishSiteMetaInfo } from '@plia/plia/types';
import { SiteService } from '@plia/plia/network';

import { StylesViewService } from '~editor/ui/src/services/stylesView.service';

import { useEditorHeaderActions } from './useEditorHeaderActions';

type UsePublishSiteInput = {
  siteId: string;
  pageId: string;
};

export const usePublishSite = ({ siteId, pageId }: UsePublishSiteInput) => {
  const siteService = useService(SiteService)();
  const stylesService = useService(StylesViewService)();
  const { savePage } = useEditorHeaderActions();

  const getSiteMarkup = () => {
    let css = '';

    for (let i = 0; i < stylesService.getStyleSheet().cssRules.length; i++) {
      const rule = stylesService.getStyleSheet().cssRules.item(i);
      css += rule.cssText;
    }

    const siteBody = document.querySelector('#renderer > div') as HTMLElement;
    const html = siteBody.outerHTML.replace(/contenteditable="true"/g, '');

    return { html, css };
  };

  const publishSite = async (metaInfo?: PublishSiteMetaInfo) => {
    const { html, css } = getSiteMarkup();

    await savePage({ siteId, pageId });

    await siteService.publishSite({
      id: siteId,
      data: {
        html,
        css,
        ...metaInfo,
      },
    });
  };

  return { publishSite };
};
