import { Component, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { CrossIcon } from '@plia/plia/icons';

import { closeSidebar, getSidebar } from './services/sidebar.service';

import styles from './styles.module.scss';

export const RightSidebar: Component = () => {
  const sidebar = getSidebar();

  return (
    <Show when={!!sidebar()}>
      <div class={styles.rightSidebar}>
        <button class={styles.rightSidebarClose} type="button" onClick={closeSidebar}>
          <CrossIcon />
        </button>
        <div class={styles.rightSidebarContent}>
          <Dynamic component={sidebar().component} {...(sidebar().props || {})} />
        </div>
      </div>
    </Show>
  );
};
