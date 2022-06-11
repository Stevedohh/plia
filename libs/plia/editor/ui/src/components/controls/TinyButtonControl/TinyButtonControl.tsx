import { children, Component, createEffect, createSignal, JSX, useContext } from 'solid-js';
import classNames from 'classnames';

import { BlockFormContext } from '../../../forms/BlockForm/BlockFormContext';

import styles from './styles.module.scss';

export type TinyButtonControlProps = {
  children: JSX.Element;
  name: string;
  value: string;
  onChange?: (value: string) => void;
};

export const TinyButtonControl: Component<TinyButtonControlProps> = (props) => {
  const [isActive, setIsActive] = createSignal(false);
  const { setFormData, formData } = useContext(BlockFormContext);

  const child = children(() => props.children);

  const handleClick = () => {
    setFormData(props.name, props.value);

    if (typeof props.onChange === 'function') {
      props.onChange(props.value);
    }
  };

  createEffect(() => {
    setIsActive(formData()[props.name] === props.value);
  });

  return (
    <button
      type="button"
      onClick={handleClick}
      class={classNames(styles.tinyButtonControl, {
        [styles.tinyButtonControlActive]: isActive(),
      })}
    >
      {child()}
    </button>
  );
};
