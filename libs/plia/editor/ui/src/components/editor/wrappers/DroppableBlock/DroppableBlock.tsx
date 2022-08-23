/* eslint-disable indent */

import { children, Component, createMemo, JSX, Show, useContext } from 'solid-js';
import { createDroppable } from '@thisbeyond/solid-dnd';
import { nanoid } from 'nanoid';
import classNames from 'classnames';

import { Id } from '@plia/plia/types';

import { DroppableDirections } from '~editor/ui/src/types';
import { EditorDragDropContext } from '~editor/ui/src/contexts/EditorDragDropContext';

import styles from './styles.module.scss';

type DroppableBlockProps = {
  id: Id;
  isLastChildren: boolean;
  children: JSX.Element;
};

export const DroppableBlock: Component<DroppableBlockProps> = (props) => {
  const { isDraggable } = useContext(EditorDragDropContext);
  const isRoot = createMemo(() => props.id === 'root');
  const child = children(() => props.children);

  const droppableTop = createDroppable(nanoid(), {
    droppableId: props.id,
    droppableDirection: DroppableDirections.TOP,
  });
  const droppableCenter = createDroppable(nanoid(), {
    droppableId: props.id,
    droppableDirection: DroppableDirections.CENTER,
  });
  const droppableBottom = props.isLastChildren
    ? createDroppable(nanoid(), {
        droppableId: props.id,
        droppableDirection: DroppableDirections.BOTTOM,
      })
    : null;

  return (
    <div class={styles.droppableBlock}>
      <Show when={!isRoot()}>
        <div
          // @ts-ignore
          use:droppableTop
          class={classNames(styles.droppable, styles.droppableTop, {
            [styles.droppableAccept]: droppableTop.isActiveDroppable,
            [styles.droppableNone]: !isDraggable(),
          })}
        />
      </Show>
      <div
        class={classNames(styles.blockCenter, {
          [styles.blockCenterAccept]: droppableCenter.isActiveDroppable,
        })}
      >
        {child()}
      </div>
      <div
        // @ts-ignore
        use:droppableCenter
        class={classNames(styles.droppable, styles.droppableCenter, {
          [styles.droppableNone]: !isDraggable(),
        })}
      />
      <Show when={!isRoot() && props.isLastChildren}>
        <div
          // @ts-ignore
          use:droppableBottom
          class={classNames(styles.droppable, styles.droppableBottom, {
            [styles.droppableAccept]: droppableBottom.isActiveDroppable,
            [styles.droppableNone]: !isDraggable(),
          })}
        />
      </Show>
    </div>
  );
};
