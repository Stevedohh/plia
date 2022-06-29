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
import classNames from 'classnames';

import { useHover } from '@plia/plia/hooks';
import { Id } from '@plia/plia/types';

import { BlockForm } from '../../../forms/BlockForm/BlockForm';
import { openSidebar } from '../../layout/RightSidebar/services/sidebar.service';
import { DroppableBlock } from '../DroppableBlock/DroppableBlock';

import styles from './styles.module.scss';

type BlockProps = {
  styles: JSX.CSSProperties;
  class: string;
  children: JSX.Element;
  isLastChildren: boolean;
  id: Id;
};

export const Block: Component<BlockProps> = (props) => {
  const [isEdit, setIsEdit] = createSignal<boolean>(false);
  const isRoot = createMemo(() => props.id === 'root');

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
    <DroppableBlock id={props.id} isLastChildren={props.isLastChildren}>
      <div ref={blockRef} class={classNames(styles.block, props.class)}>
        <Show when={isEdit() && !isRoot()}>
          <button type="button" class={styles.editButton} onClick={openBlockFormSidebar}>
            Edit
          </button>
        </Show>
        {child()}
      </div>
    </DroppableBlock>
  );
};
