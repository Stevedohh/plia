import { children, Component, JSX } from 'solid-js';
import classNames from 'classnames';

import { Id } from '@plia/plia/types';

import styles from './styles.module.scss';

type BlockProps = {
  styles: JSX.CSSProperties;
  class: string;
  children: JSX.Element;
  id: Id;
};

export const Block: Component<BlockProps> = (props) => {
  const child = children(() => props.children);

  return (
    <div class={classNames(styles.block, props.class)} data-id={props.id}>
      {child()}
    </div>
  );
};
