import { Accessor, createMemo } from 'solid-js';
import { useLocation, useNavigate, useParams } from '@solidjs/router';

import { useMutation } from '@plia/plia/network';
import { EditorParams, UpdatePageRequest } from '@plia/plia/types';

import { useAppSelector } from '~editor/ui/src/store';
import { showNotification } from '@plia/plia/uikit';

type UseEditorHeaderActionsOutput = {
  savePage: (
    params?: EditorParams,
    onSuccess?: (data: any) => void,
    onError?: (error: any) => void,
  ) => void;
  previewPage: () => void;
  editorPage: () => void;
  isPreview: Accessor<boolean>;
};

export const useEditorHeaderActions = (): UseEditorHeaderActionsOutput => {
  const params = useParams() as EditorParams;
  const navigate = useNavigate();
  const location = useLocation();

  const componentsStructure = useAppSelector((state) => state.componentStructure.struct);

  const siteLink = createMemo(() => `/builder/site/${params.siteId}/page/${params.pageId}`);
  const isPreview = createMemo(() => !location.pathname.includes('preview'));

  const savePageQuery = useMutation<unknown, UpdatePageRequest>(({ page }) => page().updatePage);

  const savePage = ({ pageId = params.pageId, siteId = params.siteId }, onSuccess?) => {
    savePageQuery.mutate(
      {
        pageId,
        siteId,
        updatedPage: {
          components_structure: componentsStructure(),
        },
      },
      {
        onSuccess: (data) => {
          showNotification.success('Page successfully saved');
          if (onSuccess) {
            onSuccess(data);
          }
        },
        onError: () => {
          showNotification.error('Page not saved :<');
        },
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
