import { Component, Show } from 'solid-js';

import { ThreeDotsIcon } from '@plia/plia/icons';
import { useBoolean } from '@plia/plia/hooks';
import { Id } from '@plia/plia/types';

import { removeComponentAction } from '../../../../../stores/componentsStructure/actions/removeComponent.action';

import styles from './styles.module.scss';

type SelectedComponentPanelProps = {
  componentId: Id;
};

export const SelectedComponentPanel: Component<SelectedComponentPanelProps> = (props) => {
  const { value: isActionsShow, toggle } = useBoolean(false);

  const deleteComponent = () => {
    removeComponentAction(props.componentId);
  };

  const toggleActions = (evt) => {
    evt.stopPropagation();
    toggle();
  };

  return (
    <div class={styles.componentPanel}>
      <span class={styles.componentName}>Component</span>
      <button class={styles.componentActions} onClick={toggleActions}>
        <ThreeDotsIcon />
      </button>
      <Show when={isActionsShow()}>
        <div class={styles.componentActionsList}>
          <button class={styles.componentActionBtn} onClick={deleteComponent}>
            Delete
          </button>
          <button class={styles.componentActionBtn}>Clone</button>
        </div>
      </Show>
    </div>
  );
};
