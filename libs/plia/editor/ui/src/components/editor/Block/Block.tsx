import { children, Component, createEffect, createSignal, JSX, onMount, Show } from 'solid-js';
import classNames from 'classnames';

import { openSidebar } from '@plia/plia/layout';
import { useHover } from '@plia/plia/hooks';
import { Id } from '@plia/plia/types';

import { BlockForm } from '../../../forms/BlockForm/BlockForm';

import styles from './styles.module.scss';

type BlockProps = {
  styles: JSX.CSSProperties;
  class: string;
  children: JSX.Element;
  id: Id;
};

export const Block: Component<BlockProps> = (props) => {
  const [isEdit, setIsEdit] = createSignal<boolean>(false);
  const child = children(() => props.children);
  let blockRef;

  onMount(() => {
    const isHover = useHover(blockRef);

    createEffect(() => {
      setIsEdit(isHover());
    });
  });

  const openBlockFormSidebar = () => {
    openSidebar({
      // @ts-ignore
      component: BlockForm,
      props: {
        id: props.id,
        styles: props.styles,
        className: props.class,
      },
    });
  };

  return (
    <div ref={blockRef} class={classNames(styles.block, props.class)}>
      <Show when={isEdit()}>
        <button type="button" class={styles.editButton} onClick={openBlockFormSidebar}>
          Edit
        </button>
      </Show>
      {child()}
    </div>
  );
};
