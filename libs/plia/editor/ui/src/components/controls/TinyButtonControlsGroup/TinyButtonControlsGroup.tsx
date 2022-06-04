import { Component, For } from 'solid-js';

import { TinyButtonControl } from '../TinyButtonControl/TinyButtonControl';

import { TinyButtonControlsSchema } from '../../../types/types';

import styles from './styles.module.scss';

type TinyButtonControlsGroupProps = {
  schema: TinyButtonControlsSchema;
  controlName: string;
  label?: string;
  onChange: (value: string) => void;
}

export const TinyButtonControlsGroup: Component<TinyButtonControlsGroupProps> = (props) => (
  <div class={styles.controlsWrapper}>
    <span class={styles.controlsLabel}>
      {props.label}
    </span>
    <div class={styles.tinyButtonControlsGroup}>
      <For each={props.schema}>
        {(control) => (
          <TinyButtonControl
            name={props.controlName}
            value={control.value}
            onChange={props.onChange}
          >
            {/* @ts-ignore */}
            {control.children}
          </TinyButtonControl>
        )}
      </For>
    </div>
  </div>
);
