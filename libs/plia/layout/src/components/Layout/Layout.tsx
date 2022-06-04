import { children, Component, JSX } from 'solid-js';

import { Sidebar } from '../Sidebar/Sidebar';

import styles from './styles.module.scss';

type LayoutProps = {
  children: JSX.Element,
}

export const Layout: Component<LayoutProps> = (props) => {
  const child = children(() => props.children);

  return (
  <div class={styles.layout}>
    <div class={styles.body}>
      {child()}
    </div>
    <Sidebar/>
  </div>
  );
};
