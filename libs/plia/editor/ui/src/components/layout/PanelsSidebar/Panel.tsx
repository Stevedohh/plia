import { children, Component, JSX } from 'solid-js';

import { CrossIcon } from '@plia/plia/icons';

import { closePanel } from './services/panels.service';

import styles from './styles.module.scss';

type PanelProps = {
  label: string;
  children: JSX.Element;
};

export const Panel: Component<PanelProps> = (props) => {
  const child = children(() => props.children);

  return (
    <div class={styles.panel}>
      <button class={styles.panelCross} onClick={closePanel}>
        <CrossIcon />
      </button>
      <span class={styles.panelLabel}>{props.label}</span>
      <div class={styles.panelContent}>{child()}</div>
    </div>
  );
};
