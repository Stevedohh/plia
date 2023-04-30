import { children, Component, JSX } from 'solid-js';

import styles from './styles.module.scss';

type ContainerProps = {
  children: JSX.Element;
};

export const Container: Component<ContainerProps> = (props) => {
  const content = children(() => props.children);

  return <div class={styles.container}>{content()}</div>;
};
