import { Component, Show } from 'solid-js';
import { useService } from 'solid-services';
import { useParams } from '@solidjs/router';

import { Button, ButtonStyles } from '@plia/plia/uikit';
import { EditorParams } from '@plia/plia/types';
import { ModalService } from '@plia/plia/uikit';

import { useEditorHeaderActions } from './hooks/useEditorHeaderActions';
import { PublishModal } from './modals/PublishModal';

import styles from './styles.module.scss';

export const EditorHeaderActions: Component = () => {
  const modalService = useService(ModalService)();
  const params = useParams() as EditorParams;

  const { savePage, previewPage, editorPage, isPreview } = useEditorHeaderActions();

  const openPublishModal = () => {
    modalService.showModal(PublishModal as Component, {
      siteId: params.siteId,
      pageId: params.pageId,
    });
  };

  return (
    <div class={styles.headerActions}>
      <Show
        when={isPreview()}
        keyed
        fallback={
          <Button style={ButtonStyles.SECONDARY} onClick={editorPage}>
            Editor
          </Button>
        }
      >
        <Button style={ButtonStyles.SECONDARY} onClick={previewPage}>
          Preview
        </Button>
      </Show>
      <Button style={ButtonStyles.PRIMARY} onClick={() => savePage(params)}>
        Save
      </Button>
      <Button style={ButtonStyles.PRIMARY} onClick={openPublishModal}>
        Publish
      </Button>
    </div>
  );
};
