import { Component } from 'solid-js';

import { BlockIcon, HeadingIcon, ImageIcon, TypographyIcon } from '@plia/plia/icons';
import { ComponentNames } from '@plia/plia/types';

import { CollapsedWrapper } from '~editor/ui/src/components/layout/CollapsedWrapper/CollapsedWrapper';

import { Panel } from '../../layout/PanelsSidebar/Panel';
import { NewComponentCard } from './NewComponentCard/NewComponentCard';

import styles from './styles.module.scss';

export const AddComponentPanel: Component = () => (
  <Panel label="Add">
    <CollapsedWrapper label="Layout">
      <div class={styles.componentPanel}>
        <NewComponentCard label="Block" icon={BlockIcon} componentName={ComponentNames.BLOCK} />
        <NewComponentCard label="Image" icon={ImageIcon} componentName={ComponentNames.IMAGE} />
        <NewComponentCard label="Block" icon={BlockIcon} componentName={ComponentNames.BLOCK} />
        <NewComponentCard label="Image" icon={ImageIcon} componentName={ComponentNames.IMAGE} />
      </div>
    </CollapsedWrapper>
    <CollapsedWrapper label="Typography">
      <div class={styles.componentPanel}>
        <NewComponentCard
          label="Text"
          icon={TypographyIcon}
          componentName={ComponentNames.TYPOGRAPHY}
        />
        <NewComponentCard
          label="Heading"
          icon={HeadingIcon}
          componentName={ComponentNames.HEADING}
        />
      </div>
    </CollapsedWrapper>
  </Panel>
);
