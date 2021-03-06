import { Component, Show } from 'solid-js';
import { createField } from '@felte/solid';

import styles from './styles.module.scss';

type InputProps = {
  name: string;
  placeholder?: string;
  value?: string;
  id?: string;
  label?: string;
  onChange?: (evt?: unknown) => void;
};

export const Input: Component<InputProps> = (props) => {
  const { field } = createField(props.name ?? '');

  return (
    <div class={styles.inputWrapper}>
      <Show when={props.label}>
        <label class={styles.inputLabel} for={props.id}>
          {props.label}
        </label>
      </Show>
      <input
        /* @ts-ignore */
        use:field
        type="text"
        placeholder={props.placeholder}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        class={styles.input}
      />
    </div>
  );
};
