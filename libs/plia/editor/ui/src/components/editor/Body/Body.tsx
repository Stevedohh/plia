import { children, Component, JSX } from 'solid-js';

import { Id } from '@plia/plia/types';

import styles from './styles.module.scss';

type BodyProps = {
  children: JSX.Element;
  id: Id;
};

export const Body: Component<BodyProps> = (props) => {
  const child = children(() => props.children);

  return <div class={styles.body}>{child()}</div>;
};
