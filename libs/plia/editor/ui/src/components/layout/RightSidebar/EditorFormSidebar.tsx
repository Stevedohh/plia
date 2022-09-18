import { Component, Show } from 'solid-js';
import { useService } from 'solid-services';

import { CrossIcon } from '@plia/plia/icons';

import { FormsSidebarService } from '~editor/ui/src/services/formsSidebar.service';
import { EditorForm } from '~editor/ui/src/forms/EditorForm';

import styles from './styles.module.scss';

export const EditorFormSidebar: Component = () => {
  const formSidebarService = useService(FormsSidebarService)();
  const editorForm = formSidebarService.getEditorForm();

  return (
    <Show when={!!editorForm()?.componentId} keyed>
      <div class={styles.rightSidebar}>
        <button
          class={styles.rightSidebarClose}
          type="button"
          onClick={formSidebarService.closeEditorForm}
        >
          <CrossIcon />
        </button>
        <EditorForm editorForm={editorForm} />
      </div>
    </Show>
  );
};
