import { Component } from 'solid-js';

import styles from './styles.module.scss';

type InputProps = {
  id: string;
  name: string;
  placeholder?: string;
  value?: string | string[] | number;
  label?: string;
  pattern?: string;
};

export const Input: Component<InputProps> = (props) => {
  return (
    <div class={styles.inputWrapper}>
      <label class={styles.inputLabel} for={props.id}>
        {props.label}
      </label>
      <input
        value={props.value ?? ''}
        name={props.name}
        id={props.id}
        class={styles.input}
        placeholder={props.placeholder}
        pattern={props.pattern}
      />
    </div>
  );
};
