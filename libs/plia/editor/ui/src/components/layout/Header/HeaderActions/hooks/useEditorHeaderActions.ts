import { Accessor, createMemo } from 'solid-js';
import { useService } from 'solid-services';
import { useLocation, useNavigate, useParams } from '@solidjs/router';

import { PageService } from '@plia/plia/network';
import { EditorParams } from '@plia/plia/types';

import { useAppSelector } from '~editor/ui/src/store';

type UseEditorHeaderActionsOutput = {
  savePage: (args: EditorParams) => void;
  previewPage: () => void;
  editorPage: () => void;
  isPreview: Accessor<boolean>;
};

export const useEditorHeaderActions = (): UseEditorHeaderActionsOutput => {
  const pageService = useService(PageService)();

  const params = useParams() as EditorParams;
  const navigate = useNavigate();
  const location = useLocation();

  const componentsStructure = useAppSelector((state) => state.componentStructure.struct);

  const siteLink = createMemo(() => `/builder/site/${params.siteId}/page/${params.pageId}`);
  const isPreview = createMemo(() => !location.pathname.includes('preview'));

  const savePage = async ({ siteId, pageId }: EditorParams) => {
    await pageService.updatePage(
      { siteId, pageId },
      {
        components_structure: componentsStructure(),
      },
    );
  };

  const previewPage = () => {
    navigate(`${siteLink()}/preview`);
  };

  const editorPage = () => {
    navigate(siteLink());
  };

  return {
    savePage,
    previewPage,
    editorPage,
    isPreview,
  };
};
