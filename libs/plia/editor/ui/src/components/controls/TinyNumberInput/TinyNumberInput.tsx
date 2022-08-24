import { Component } from 'solid-js';
import classNames from 'classnames';
import { createField } from '@felte/solid';

import styles from './styles.module.scss';

type TinyNumberInputProps = {
  class?: string;
  name?: string;
  value?: number;
  disabled?: boolean;
  onChange?: (evt?: unknown) => void;
};

export const TinyNumberInput: Component<TinyNumberInputProps> = (props) => {
  const { field } = createField(props.name ?? '');

  return (
    <input
      use:field
      type="number"
      class={classNames(styles.tinyNumberInput, props.class)}
      value={props.value}
      onChange={props.onChange}
      disabled={props.disabled || false}
    />
  );
};
