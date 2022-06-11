import { children, Component, JSXElement } from 'solid-js';

import styles from './styles.module.scss';

type SidebarFormWrapperProps = {
  label: string;
  children: Element | JSXElement;
}

export const SidebarFormWrapper: Component<SidebarFormWrapperProps> = (props) => {
  const child = children(() => props.children);

  return (
    <div class={styles.sidebarFormWrapper}>
      <span class={styles.sidebarFormWrapperLabel}>
        {props.label}
      </span>
      <div class={styles.sidebarFormWrapperContent}>
        {child()}
      </div>
    </div>
  );
};
