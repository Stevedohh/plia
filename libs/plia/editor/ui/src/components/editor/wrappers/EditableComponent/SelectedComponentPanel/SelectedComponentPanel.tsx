import { Component, createEffect, createMemo, Show } from 'solid-js';
import { useService } from 'solid-services';
import classNames from 'classnames';
import { createDraggable } from '@thisbeyond/solid-dnd';
import { nanoid } from 'nanoid';

import { DragIcon, ThreeDotsIcon } from '@plia/plia/icons';
import { useBoolean } from '@plia/plia/hooks';
import { ComponentNames, Id } from '@plia/plia/types';

import { useAppDispatch } from '~editor/ui/src/store';
import { FormsSidebarService } from '~editor/ui/src/services/formsSidebar.service';
import { removeComponent } from '~editor/ui/src/store/componentsStructure/componentStructure.slice';
import { DragComponentActions, SimplifiedDraggable } from '~editor/ui/src/types';

import { NOT_DRAGGABLE_COMPONENTS } from '../constants';

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

  const isDraggableComponent = createMemo(
    () => !NOT_DRAGGABLE_COMPONENTS.includes(props.componentName),
  );

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

  const draggableComponent = isDraggableComponent()
    ? createDraggable(nanoid(), {
        componentId: props.componentId,
        componentName: props.componentName,
        action: DragComponentActions.MOVE,
      })
    : null;

  createEffect(() => {
    if (draggableComponent) {
      props.onDrag({
        isActiveDraggable: draggableComponent.isActiveDraggable,
        transform: draggableComponent.transform,
      });
    }
  });

  return (
    <div class={styles.componentPanel}>
      <span class={styles.componentName}>Component</span>
      <Show when={isDraggableComponent()} keyed>
        <button
          class={classNames(styles.componentActions, styles.componentActionsDrag)}
          ref={draggableComponent.ref}
          {...draggableComponent.dragActivators}
        >
          <DragIcon />
        </button>
      </Show>
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
