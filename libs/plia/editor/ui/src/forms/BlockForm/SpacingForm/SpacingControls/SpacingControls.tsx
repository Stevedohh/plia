import { children, Component } from 'solid-js';
import classNames from 'classnames';

import { TinyNumberInput } from '../../../../components/controls/TinyNumberInput/TinyNumberInput';
import { SpacingControlsProps } from '../../../../types/types';

import styles from './styles.module.scss';

export const SpacingControls: Component<SpacingControlsProps> = (props) => {
  const child = children(() => props.children);

  return (
    <div class={classNames(styles.spacingBlock, props.class)}>
      <span class={styles.spacingLabel}>{props.label}</span>
      <div class={styles.spacingInputTop}>
        <TinyNumberInput
          name={props.controls.top.name}
          value={props.controls.top.value}
        />
        <span class={styles.spacingInputLabel}>
          px
        </span>
      </div>
      <div class={styles.spacingInputRight}>
        <TinyNumberInput
          name={props.controls.right.name}
          value={props.controls.right.value}
        />
        <span class={styles.spacingInputLabel}>
          px
        </span>
      </div>
      <div class={styles.spacingInputBottom}>
        <TinyNumberInput
          name={props.controls.bottom.name}
          value={props.controls.bottom.value}
        />
        <span class={styles.spacingInputLabel}>
          px
        </span>
      </div>
      <div class={styles.spacingInputLeft}>
        <TinyNumberInput
          name={props.controls.left.name}
          value={props.controls.left.value}
        />
        <span class={styles.spacingInputLabel}>
          px
        </span>
      </div>
      {child()}
    </div>
  );
};
