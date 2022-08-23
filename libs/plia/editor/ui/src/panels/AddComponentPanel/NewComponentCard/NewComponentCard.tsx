import { Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import { nanoid } from 'nanoid';
import classNames from 'classnames';
import { createDraggable } from '@thisbeyond/solid-dnd';

import { ComponentNames, DragComponentActions } from '../../../types/types';

import styles from './styles.module.scss';

type NewComponentCardProps = {
  icon: Component;
  label: string;
  componentName: ComponentNames;
};

export const NewComponentCard: Component<NewComponentCardProps> = (props) => {
  const draggableComponent = createDraggable(nanoid(), {
    componentName: props.componentName,
    action: DragComponentActions.INSERT,
  });

  return (
    <div class={styles.draggableComponent}>
      <div class={classNames(styles.component, styles.hiddenComponent)}>
        <Dynamic component={props.icon} />
      </div>
      {/* @ts-ignore */}
      <div use:draggableComponent class={styles.component}>
        <Dynamic component={props.icon} />
      </div>
      <span class={styles.draggableComponentLabel}>{props.label}</span>
    </div>
  );
};
