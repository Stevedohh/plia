import { Component } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import classNames from 'classnames';
import { createDraggable } from '@thisbeyond/solid-dnd';

import { ComponentNames } from '../../../types/types';

import styles from './styles.module.scss';

type NewComponentCardProps = {
  icon: Component;
  label: string;
  componentName: ComponentNames;
};

export const NewComponentCard: Component<NewComponentCardProps> = (props) => {
  const draggableComponent = createDraggable(props.componentName, {
    componentName: props.componentName,
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
