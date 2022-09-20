import { children, Component, JSX } from 'solid-js';
import classNames from 'classnames';

import { Id } from '@plia/plia/types';

import styles from './styles.module.scss';

type ColumnProps = {
  class: string;
  children: JSX.Element;
  id: Id;
};

export const Column: Component<ColumnProps> = (props) => {
  const child = children(() => props.children);

  return <div class={classNames(styles.column, props.class)}>{child()}</div>;
};
