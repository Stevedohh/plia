import { children, Component, JSX } from 'solid-js';

import styles from './styles.module.scss';

type AuthLayoutProps = {
  children?: JSX.Element;
};

export const AuthLayout: Component<AuthLayoutProps> = (props) => {
  const content = children(() => props.children);

  return <div class={styles.root}>{content()}</div>;
};
