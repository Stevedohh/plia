import { Component, Show } from 'solid-js';

import { CrossIcon } from '@plia/plia/icons';

import { closeEditorForm, getEditorForm } from './services/editorFormSidebar.service';
import { EditorForm } from '../../../forms/EditorForm';

import styles from './styles.module.scss';

export const EditorFormSidebar: Component = () => {
  const editorForm = getEditorForm();

  return (
    <Show when={!!editorForm()?.componentId}>
      <div class={styles.rightSidebar}>
        <button class={styles.rightSidebarClose} type="button" onClick={closeEditorForm}>
          <CrossIcon />
        </button>
        <EditorForm editorForm={editorForm} />
      </div>
    </Show>
  );
};
