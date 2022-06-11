import { Component, createSignal } from 'solid-js';

import styles from './styles.module.scss';

type ColorPickerControlProps = {
  value?: string;
  label: string;
  onInput: (evt) => void;
};

export const ColorPickerControl: Component<ColorPickerControlProps> = (props) => {
  const [color, setColor] = createSignal<string>('transparent');

  const onInputHandler = (evt) => {
    setColor(evt.target.value);
    props.onInput(evt.target.value);
  };

  return (
    <label class={styles.colorPickerLabel}>
      {props.label}
      <div class={styles.colorPickerWrapper}>
        <input
          class={styles.colorPicker}
          type="color"
          value={props.value ?? ''}
          onInput={onInputHandler}
        />
        <span class={styles.colorPickerValue}>{props.value ?? color()}</span>
      </div>
    </label>
  );
};
