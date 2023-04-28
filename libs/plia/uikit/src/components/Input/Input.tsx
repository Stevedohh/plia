import { Component, Show } from 'solid-js';
import classNames from 'classnames';

import styles from './styles.module.scss';

export enum InputSizes {
  LG = 'inputLarge',
}

type InputProps = {
  id: string;
  name: string;
  placeholder?: string;
  value?: string | string[] | number;
  label?: string;
  pattern?: string;
  error?: string;
  autocomplete?: 'new-password' | 'username' | 'email';
  type?: 'text' | 'password';
  size?: InputSizes;
};

export const Input: Component<InputProps> = (props) => {
  return (
    <div class={classNames(styles.inputWrapper, styles[props.size])}>
      <label class={styles.inputLabel} for={props.id}>
        {props.label}
      </label>
      <input
        autocomplete={props.autocomplete}
        value={props.value ?? ''}
        name={props.name}
        id={props.id}
        type={props.type ?? 'text'}
        class={styles.input}
        placeholder={props.placeholder}
        pattern={props.pattern}
      />
      <Show when={props.error} keyed>
        <span class={styles.inputError}>{props.error}</span>
      </Show>
    </div>
  );
};
