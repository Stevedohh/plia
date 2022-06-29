import { Component } from 'solid-js';
import { createDraggable } from '@thisbeyond/solid-dnd';

import { BlockIcon } from '@plia/plia/icons';
import { Panel } from '../../components/layout/PanelsSidebar/Panel';

import styles from './styles.module.scss';

export const AddComponentPanel: Component = () => {
  const draggable = createDraggable(1);

  return (
    <Panel label="Add">
      <div class={styles.componentPanel}>
        <div class={styles.draggableComponent}>
          {/* @ts-ignore */}
          <div use:draggable class={styles.component}>
            <BlockIcon />
          </div>
          <span class={styles.draggableComponentLabel}>Block</span>
        </div>
      </div>
    </Panel>
  );
};
