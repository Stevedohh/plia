import { children, Component, createMemo, JSX, Show, useContext } from 'solid-js';
import { createDroppable } from '@thisbeyond/solid-dnd';
import classNames from 'classnames';

import { Id } from '@plia/plia/types';

import { BlockDroppableTypes } from '../../../types/types';
import { EditorDragDropContext } from '../../../dnd/EditorDragDropContext';

import styles from './styles.module.scss';

type DroppableBlockProps = {
  id: Id;
  isLastChildren: boolean;
  children: JSX.Element;
};

export const DroppableBlock: Component<DroppableBlockProps> = (props) => {
  const isRoot = createMemo(() => props.id === 'root');

  const droppableTop = createDroppable(`${props.id}.${BlockDroppableTypes.TOP}`);
  const droppableBottom = createDroppable(`${props.id}.${BlockDroppableTypes.BOTTOM}`);
  const droppableCenter = createDroppable(`${props.id}.${BlockDroppableTypes.CENTER}`);

  const { isDraggable } = useContext(EditorDragDropContext);

  const child = children(() => props.children);

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
      <Show when={!isRoot()}>
        <div
          // @ts-ignore
          use:droppableCenter
          class={classNames(styles.droppable, styles.droppableCenter, {
            [styles.droppableNone]: !isDraggable(),
          })}
        />
      </Show>
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
