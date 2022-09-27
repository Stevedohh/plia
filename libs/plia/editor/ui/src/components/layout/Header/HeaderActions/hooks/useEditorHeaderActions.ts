import { useService } from 'solid-services';
import { useParams } from '@solidjs/router';

import { EditorParams } from '@plia/plia/types';

import { useAppSelector } from '~editor/ui/src/store';
import { PageService } from '~editor/ui/src/services/api/page.service';

type UseEditorHeaderActionsOutput = {
  savePage: () => void;
  publishPage: () => void;
};

export const useEditorHeaderActions = (): UseEditorHeaderActionsOutput => {
  const pageService = useService(PageService)();
  const params = useParams() as EditorParams;

  const componentsStructure = useAppSelector((state) => state.componentStructure.struct);

  const savePage = async () => {
    await pageService.updatePage(params, {
      components_structure: componentsStructure(),
    });
  };

  const publishPage = () => {
    // eslint-disable-next-line no-console
    console.log('publish');
  };

  return {
    savePage,
    publishPage,
  };
};
