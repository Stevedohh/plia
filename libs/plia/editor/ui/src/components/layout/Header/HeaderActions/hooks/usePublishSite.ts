import { useService } from 'solid-services';

import { Id, PublishSiteMetaInfo, PublishSiteRequest } from '@plia/plia/types';
import { useMutation } from '@plia/plia/network';
import { showNotification } from '@plia/plia/uikit';

import { StylesViewService } from '~editor/ui/src/services/stylesView.service';

import { useEditorHeaderActions } from './useEditorHeaderActions';

type UsePublishSiteInput = {
  siteId: string;
  pageId: string;
  onPublish?: () => void;
};

export const usePublishSite = ({ siteId, pageId, onPublish }: UsePublishSiteInput) => {
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

  const publishSiteMutation = useMutation<
    unknown,
    {
      id: Id;
      data: PublishSiteRequest;
    }
  >(({ site }) => site().publishSite);

  const publishSite = async (metaInfo?: PublishSiteMetaInfo) => {
    const { html, css } = getSiteMarkup();

    savePage({ siteId, pageId }, () => {
      publishSiteMutation.mutate(
        {
          id: siteId,
          data: {
            html,
            css,
            ...metaInfo,
          },
        },
        {
          onSuccess: () => {
            showNotification.success(`Published to ${metaInfo.url}.stevedoh.com`);
            onPublish();
          },
          onError: (err) => {
            showNotification.error(err.response.data.message ?? 'Not published, please try later');
          },
        },
      );
    });
  };

  return { publishSite };
};
