import { Component } from 'solid-js';

import { useAppSelector } from '~editor/ui/src/store';

import { Panel } from '../../layout/PanelsSidebar/Panel';
import { ComponentsTree } from './ComponentsTree/ComponentsTree';

import styles from './styles.module.scss';

export const NavigationPanel: Component = () => {
  const componentStructure = useAppSelector((state) => state.componentStructure.struct);

  return (
    <Panel label="Structure">
      <div class={styles.componentsTree}>
        <ComponentsTree level={1} structure={componentStructure()} />
      </div>
    </Panel>
  );
};
