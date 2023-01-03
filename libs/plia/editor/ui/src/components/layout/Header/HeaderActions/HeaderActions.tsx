import { Component, Show } from 'solid-js';

import { Button, ButtonStyles } from '@plia/plia/components';

import { useEditorHeaderActions } from './hooks/useEditorHeaderActions';

import styles from './styles.module.scss';

export const EditorHeaderActions: Component = () => {
  const { savePage, publishPage, previewPage, editorPage, isPreview } = useEditorHeaderActions();

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
      <Button style={ButtonStyles.PRIMARY} onClick={savePage}>
        Save
      </Button>
      <Button style={ButtonStyles.PRIMARY} onClick={publishPage}>
        Publish
      </Button>
    </div>
  );
};
