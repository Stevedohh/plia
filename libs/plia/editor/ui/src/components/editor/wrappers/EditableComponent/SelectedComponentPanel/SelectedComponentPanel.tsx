import { Component, createEffect, onMount, Show, useContext } from 'solid-js';
import { useService } from 'solid-services';
import classNames from 'classnames';
import { createDraggable, transformStyle } from '@thisbeyond/solid-dnd';
import { nanoid } from 'nanoid';

import { DragIcon, ThreeDotsIcon } from '@plia/plia/icons';
import { useBoolean } from '@plia/plia/hooks';
import { ComponentNames, Id } from '@plia/plia/types';

import { useAppDispatch } from '~editor/ui/src/store';
import { FormsSidebarService } from '~editor/ui/src/services/formsSidebar.service';
import { removeComponent } from '~editor/ui/src/store/componentsStructure/componentStructure.slice';
import { DragComponentActions, SimplifiedDraggable } from '~editor/ui/src/types';

import styles from './styles.module.scss';

type SelectedComponentPanelProps = {
  componentId: Id;
  componentName: ComponentNames;
  onDrag: (draggableComponent: SimplifiedDraggable) => void;
};

export const SelectedComponentPanel: Component<SelectedComponentPanelProps> = (props) => {
  const { value: isActionsShow, toggle } = useBoolean(false);
  const formSidebarService = useService(FormsSidebarService)();
  const dispatch = useAppDispatch();

  const deleteComponent = (evt) => {
    evt.stopPropagation();

    dispatch(
      removeComponent({
        componentId: props.componentId,
      }),
    );

    formSidebarService.closeEditorForm();
  };

  const toggleActions = (evt) => {
    evt.stopPropagation();
    toggle();
  };

  const draggableComponent = createDraggable(nanoid(), {
    componentId: props.componentId,
    componentName: props.componentName,
    action: DragComponentActions.MOVE,
  });

  createEffect(() => {
    props.onDrag({
      isActiveDraggable: draggableComponent.isActiveDraggable,
      transform: draggableComponent.transform,
    });
  });

  return (
    <div class={styles.componentPanel}>
      <span class={styles.componentName}>Component</span>
      <button
        class={classNames(styles.componentActions, styles.componentActionsDrag)}
        ref={draggableComponent.ref}
        {...draggableComponent.dragActivators}
      >
        <DragIcon />
      </button>
      <button
        class={classNames(styles.componentActions, styles.componentActionsMore)}
        onClick={toggleActions}
      >
        <ThreeDotsIcon />
      </button>
      <Show when={isActionsShow()} keyed>
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
