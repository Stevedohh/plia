import { Component, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { closeSidebar, getSidebar } from '../../services/sidebar.service';

import styles from './styles.module.scss';

export const Sidebar: Component = () => {
  const sidebar = getSidebar();

  return (
    <Show when={!!sidebar()}>
      <div class={styles.rightSidebar}>
        <button type="button" onClick={closeSidebar}>close</button>
        <Dynamic component={sidebar().component} {...sidebar().props || {}} />
      </div>
    </Show>
  );
};
