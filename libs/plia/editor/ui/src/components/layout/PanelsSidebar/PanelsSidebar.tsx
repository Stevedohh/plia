import { useService } from 'solid-services';
import { Component, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { AddIcon, StructureIcon } from '@plia/plia/icons';

import { AddComponentPanel } from '~editor/ui/src/components/panels/AddComponentPanel/AddComponentPanel';
import { NavigationPanel } from '~editor/ui/src/components/panels/NavigationPanel/NavigationPanel';
import { PanelsService } from '~editor/ui/src/services/panels.service';

import styles from './styles.module.scss';

export const PanelsSidebar: Component = () => {
  const { getPanel, openPanel } = useService(PanelsService)();

  return (
    <div class={styles.panelsSidebarWrapper}>
      <div class={styles.panelsSidebar}>
        <button
          class={styles.panelsItem}
          onClick={() => openPanel({ component: AddComponentPanel })}
        >
          <AddIcon />
        </button>
        <button class={styles.panelsItem} onClick={() => openPanel({ component: NavigationPanel })}>
          <StructureIcon />
        </button>
      </div>
      <Show when={getPanel()()}>
        <Dynamic component={getPanel()().component} />
      </Show>
    </div>
  );
};
