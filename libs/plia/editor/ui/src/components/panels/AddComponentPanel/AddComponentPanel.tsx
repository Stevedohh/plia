import { Component } from 'solid-js';

import { BlockIcon, ImageIcon, TypographyIcon } from '@plia/plia/icons';

import { ComponentNames } from '~editor/ui/src/types';

import { Panel } from '../../layout/PanelsSidebar/Panel';
import { NewComponentCard } from './NewComponentCard/NewComponentCard';

import styles from './styles.module.scss';

export const AddComponentPanel: Component = () => (
  <Panel label="Add">
    <div class={styles.componentPanel}>
      <NewComponentCard label="Block" icon={BlockIcon} componentName={ComponentNames.BLOCK} />
      <NewComponentCard label="Image" icon={ImageIcon} componentName={ComponentNames.IMAGE} />
      <NewComponentCard
        label="Typography"
        icon={TypographyIcon}
        componentName={ComponentNames.TYPOGRAPHY}
      />
    </div>
  </Panel>
);
