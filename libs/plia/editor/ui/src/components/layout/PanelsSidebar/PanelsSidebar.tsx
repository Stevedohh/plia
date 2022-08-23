import { Component, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { AddIcon, StructureIcon } from '@plia/plia/icons';

import { AddComponentPanel } from '~editor/ui/src/components/panels/AddComponentPanel/AddComponentPanel';
import { NavigationPanel } from '~editor/ui/src/components/panels/NavigationPanel/NavigationPanel';

import { getPanel, openPanel } from './services/panels.service';

import styles from './styles.module.scss';

export const PanelsSidebar: Component = () => (
  <div class={styles.panelsSidebarWrapper}>
    <div class={styles.panelsSidebar}>
      <button class={styles.panelsItem} onClick={() => openPanel({ component: AddComponentPanel })}>
        <AddIcon />
      </button>
      <button class={styles.panelsItem} onClick={() => openPanel({ component: NavigationPanel })}>
        <StructureIcon />
      </button>
    </div>
    <Show when={getPanel()}>
      <Dynamic component={getPanel().component} />
    </Show>
  </div>
);
