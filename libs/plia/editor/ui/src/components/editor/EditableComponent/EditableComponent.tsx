import {
  children,
  Component,
  createEffect,
  createMemo,
  createSignal,
  JSX,
  onMount,
  Show,
} from 'solid-js';

import { useHover } from '@plia/plia/hooks';
import { Id } from '@plia/plia/types';

import styles from './styles.module.scss';

type EditableComponentProps = {
  id: Id;
  children: JSX.Element;
  onEditClick: () => void;
};

export const EditableComponent: Component<EditableComponentProps> = (props) => {
  const [isEdit, setIsEdit] = createSignal<boolean>(false);
  const isRoot = createMemo(() => props.id === 'root');

  const component = children(() => props.children);

  let componentRef;

  onMount(() => {
    const isHover = useHover(componentRef);

    createEffect(() => {
      setIsEdit(isHover());
    });
  });

  return (
    <div class={styles.editableBlock} ref={componentRef}>
      <Show when={isEdit() && !isRoot()}>
        <button type="button" class={styles.editButton} onClick={props.onEditClick}>
          Edit
        </button>
      </Show>
      {component()}
    </div>
  );
};
