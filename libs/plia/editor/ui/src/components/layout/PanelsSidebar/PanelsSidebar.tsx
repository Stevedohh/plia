import { useService } from 'solid-services';
import { Component, createMemo, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import classNames from 'classnames';

import { AddIcon, StructureIcon } from '@plia/plia/uikit';

import { AddComponentPanel } from '~editor/ui/src/components/panels/AddComponentPanel/AddComponentPanel';
import { NavigationPanel } from '~editor/ui/src/components/panels/NavigationPanel/NavigationPanel';
import { ComponentPanelsNames, PanelsService } from '~editor/ui/src/services/panels.service';

import styles from './styles.module.scss';

export const PanelsSidebar: Component = () => {
  const { getPanel, openPanel } = useService(PanelsService)();
  const currentPanelName = createMemo(() => getPanel()()?.name);

  return (
    <div class={styles.panelsSidebarWrapper}>
      <div class={styles.panelsSidebar}>
        <button
          class={classNames(styles.panelsItem, {
            [styles.panelsItemActive]: currentPanelName() === ComponentPanelsNames.ADD,
          })}
          onClick={() =>
            openPanel({ component: AddComponentPanel, name: ComponentPanelsNames.ADD })
          }
        >
          <AddIcon />
        </button>
        <button
          class={classNames(styles.panelsItem, {
            [styles.panelsItemActive]: currentPanelName() === ComponentPanelsNames.TREE,
          })}
          onClick={() => openPanel({ component: NavigationPanel, name: ComponentPanelsNames.TREE })}
        >
          <StructureIcon />
        </button>
      </div>
      <Show when={getPanel()()} keyed>
        <Dynamic component={getPanel()().component} />
      </Show>
    </div>
  );
};
