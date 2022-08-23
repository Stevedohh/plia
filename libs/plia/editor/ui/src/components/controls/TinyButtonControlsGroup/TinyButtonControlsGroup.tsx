import { Component, For } from 'solid-js';
import classNames from 'classnames';

import { TinyButtonControlsSchema } from '~editor/ui/src/types';

import { TinyButtonControl } from '../TinyButtonControl/TinyButtonControl';

import styles from './styles.module.scss';

export enum TinyButtonControlsLabelPlacing {
  LEFT = 'controlsLeft',
}

type TinyButtonControlsGroupProps = {
  schema: TinyButtonControlsSchema;
  controlName: string;
  label?: string;
  labelPlacing?: TinyButtonControlsLabelPlacing;
  onChange: (value: string) => void;
};

export const TinyButtonControlsGroup: Component<TinyButtonControlsGroupProps> = (props) => (
  <div class={classNames(styles.controlsWrapper, styles[props.labelPlacing])}>
    <span class={styles.controlsLabel}>{props.label}</span>
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
