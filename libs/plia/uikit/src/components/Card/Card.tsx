import { Component, JSX, children } from 'solid-js';

type CardProps = {
  children?: JSX.Element;
};

import styles from './styles.module.scss';

export const Card: Component<CardProps> = (props) => {
  const content = children(() => props.children);

  return <div class={styles.root}>{content}</div>;
};
