import { Accessor, createMemo } from 'solid-js';
import { useService } from 'solid-services';
import { useLocation, useNavigate, useParams } from '@solidjs/router';

import { EditorParams } from '@plia/plia/types';

import { useAppSelector } from '~editor/ui/src/store';
import { PageService } from '~editor/ui/src/services/api/page.service';
import { SiteService } from '~editor/ui/src/services/api/site.service';
import { StylesViewService } from '~editor/ui/src/services/stylesView.service';

type UseEditorHeaderActionsOutput = {
  savePage: () => void;
  publishPage: () => void;
  previewPage: () => void;
  editorPage: () => void;
  isPreview: Accessor<boolean>;
};

export const useEditorHeaderActions = (): UseEditorHeaderActionsOutput => {
  const pageService = useService(PageService)();
  const siteService = useService(SiteService)();
  const stylesService = useService(StylesViewService)();

  const params = useParams() as EditorParams;
  const navigate = useNavigate();
  const location = useLocation();

  const componentsStructure = useAppSelector((state) => state.componentStructure.struct);
  const siteLink = createMemo(() => `/builder/site/${params.siteId}/page/${params.pageId}`);
  const isPreview = createMemo(() => !location.pathname.includes('preview'));

  const savePage = async () => {
    await pageService.updatePage(params, {
      components_structure: componentsStructure(),
    });
  };

  const publishPage = async () => {
    let css = '';

    for (let i = 0; i < stylesService.getStyleSheet().cssRules.length; i++) {
      const rule = stylesService.getStyleSheet().cssRules.item(i);
      css += rule.cssText;
    }

    const siteBody = document.querySelector('#renderer > div') as HTMLElement;
    const html = siteBody.outerHTML.replace(/contenteditable="true"/g, '');

    await siteService.publishSite({ id: params.siteId, data: { html, css } });
    console.log(html);
    console.log(css);
    // console.log(siteBody.outerHTML.replace(/contenteditable="true"/g, ''));
  };

  const previewPage = () => {
    navigate(`${siteLink()}/preview`);
  };

  const editorPage = () => {
    navigate(siteLink());
  };

  return {
    savePage,
    publishPage,
    previewPage,
    editorPage,
    isPreview,
  };
};
