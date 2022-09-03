/* eslint-disable indent */

import {
  Accessor,
  Component,
  createEffect,
  createMemo,
  createSignal,
  Show,
  useContext,
} from 'solid-js';
import { createDroppable } from '@thisbeyond/solid-dnd';
import { nanoid } from 'nanoid';
import { Portal } from 'solid-js/web';
import classNames from 'classnames';

import { ComponentNames, Id } from '@plia/plia/types';

import { DroppableDirections } from '~editor/ui/src/types';
import { EditorDragDropContext } from '~editor/ui/src/contexts/EditorDragDropContext';

import styles from './styles.module.scss';

type DroppableBlockProps = {
  id: Id;
  componentRect: Accessor<DOMRect>;
  componentName: ComponentNames;
  inactiveDroppableIds: Accessor<Array<string | Id>>;
};

export const DroppableAreas: Component<DroppableBlockProps> = (props) => {
  const isRoot = createMemo(() => props.id === 'body');

  const { isDraggable } = useContext(EditorDragDropContext);
  const [isActiveDroppable, setIsActiveDroppable] = createSignal(false);

  const droppableTop = createDroppable(nanoid(), {
    droppableId: props.id,
    droppableDirection: DroppableDirections.TOP,
  });
  const droppableCenter = createDroppable(nanoid(), {
    droppableId: props.id,
    droppableDirection: DroppableDirections.CENTER,
  });
  const droppableBottom = createDroppable(nanoid(), {
    droppableId: props.id,
    droppableDirection: DroppableDirections.BOTTOM,
  });

  const componentsWithArea = [ComponentNames.BLOCK];

  const isAreaVisible = createMemo(
    () => !isDraggable() || !componentsWithArea.includes(props.componentName) || isActiveDroppable()
  );

  createEffect(() => {
    if (isDraggable() && props.inactiveDroppableIds()?.length) {
      setIsActiveDroppable(props.inactiveDroppableIds().includes(String(props.id)));
    } else {
      setIsActiveDroppable(false);
    }
  });

  return (
    <Portal mount={document.getElementById('droppable')}>
      <div
        class={classNames(styles.droppableBlock, {
          [styles.droppableNone]: isAreaVisible(),
        })}
        style={{
          width: `${props.componentRect()?.width}px`,
          height: `${props.componentRect()?.height}px`,
          transform: `translate(${props.componentRect().x}px, ${props.componentRect().y}px)`,
        }}
      >
        <Show when={!isRoot()}>
          <div
            use:droppableTop
            class={classNames(styles.droppable, styles.droppableTop, {
              [styles.droppableAccept]: droppableTop.isActiveDroppable,
            })}
          />
        </Show>
        <div
          use:droppableCenter
          class={classNames(styles.droppable, styles.droppableCenter, {
            [styles.droppableCenterAccept]: droppableCenter.isActiveDroppable,
          })}
        />
        <Show when={!isRoot()}>
          <div
            use:droppableBottom
            class={classNames(styles.droppable, styles.droppableBottom, {
              [styles.droppableAccept]: droppableBottom.isActiveDroppable,
            })}
          />
        </Show>
      </div>
    </Portal>
  );
};
