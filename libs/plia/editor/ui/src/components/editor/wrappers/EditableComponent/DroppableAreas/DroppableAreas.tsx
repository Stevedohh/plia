/* eslint-disable indent */
/* eslint-disable solid/reactivity */

import {
  Accessor,
  Component,
  createEffect,
  createMemo,
  createSignal,
  Show,
  useContext,
} from 'solid-js';
import { Portal } from 'solid-js/web';
import classNames from 'classnames';

import { ComponentNames, Id } from '@plia/plia/types';

import { EditorDragDropContext } from '~editor/ui/src/contexts/EditorDragDropContext';

import { useCreateDroppables } from '../hooks/useCreateDroppables';
import { DROPPABLE_COMPONENTS, DROPPABLE_ONLY_CENTER, DROPPABLE_ONLY_SIDES } from '../constants';

import styles from './styles.module.scss';

type DroppableBlockProps = {
  id: Id;
  componentRect: Accessor<DOMRect>;
  componentName: ComponentNames;
  inactiveDroppableIds: Accessor<Array<string | Id>>;
};

export const DroppableAreas: Component<DroppableBlockProps> = (props) => {
  const { isDraggable } = useContext(EditorDragDropContext);
  const [isActiveDroppable, setIsActiveDroppable] = createSignal(false);

  const isAreaVisible = createMemo(
    () =>
      !isDraggable() || !DROPPABLE_COMPONENTS.includes(props.componentName) || isActiveDroppable(),
  );

  const isDroppableSides = createMemo(() => !DROPPABLE_ONLY_CENTER.includes(props.componentName));
  const isDroppableCenter = createMemo(() => !DROPPABLE_ONLY_SIDES.includes(props.componentName));

  const { droppableTop, droppableCenter, droppableBottom } = useCreateDroppables({
    isDroppableSides,
    isDroppableCenter,
    droppableId: props.id,
  });

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
        <Show when={isDroppableCenter()} keyed>
          <div
            use:droppableCenter
            class={classNames(styles.droppable, styles.droppableCenter, {
              [styles.droppableCenterAccept]: droppableCenter.isActiveDroppable,
            })}
          />
        </Show>
        <Show when={isDroppableSides()} keyed>
          <div
            use:droppableTop
            class={classNames(styles.droppable, styles.droppableTop, {
              [styles.droppableAccept]: droppableTop.isActiveDroppable,
            })}
          />
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
