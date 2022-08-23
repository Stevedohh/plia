import { Component, Show } from 'solid-js';
import classNames from 'classnames';

import { DragIcon, ThreeDotsIcon } from '@plia/plia/icons';
import { useBoolean } from '@plia/plia/hooks';
import { Id } from '@plia/plia/types';

import { useAppDispatch } from '~editor/ui/src/store';
import { removeComponent } from '~editor/ui/src/store/componentsStructure/componentStructure.slice';
import { closeEditorForm } from '~editor/ui/src/components/layout/RightSidebar/services/editorFormSidebar.service';

import styles from './styles.module.scss';

type SelectedComponentPanelProps = {
  componentId: Id;
  draggable: any;
};

export const SelectedComponentPanel: Component<SelectedComponentPanelProps> = (props) => {
  const { value: isActionsShow, toggle } = useBoolean(false);

  const dispatch = useAppDispatch();

  const deleteComponent = (evt) => {
    evt.stopPropagation();

    dispatch(
      removeComponent({
        componentId: props.componentId,
      })
    );

    closeEditorForm();
  };

  const toggleActions = (evt) => {
    evt.stopPropagation();
    toggle();
  };

  return (
    <div class={styles.componentPanel}>
      <span class={styles.componentName}>Component</span>
      <button
        class={classNames(styles.componentActions, styles.componentActionsDrag)}
        ref={props.draggable.ref}
        {...props.draggable.dragActivators}
      >
        <DragIcon />
      </button>
      <button
        class={classNames(styles.componentActions, styles.componentActionsMore)}
        onClick={toggleActions}
      >
        <ThreeDotsIcon />
      </button>
      <Show when={isActionsShow()}>
        <div class={styles.componentActionsList}>
          <button class={styles.componentActionBtn} onClick={deleteComponent}>
            Delete
          </button>
          <button class={styles.componentActionBtn}>Clone</button>
        </div>
      </Show>
    </div>
  );
};
