import { children, Component, JSX } from 'solid-js';
import classNames from 'classnames';

import styles from './styles.module.scss';

export enum ButtonStyles {
  PRIMARY = 'btnPrimary',
  SECONDARY = 'btnSecondary',
}

type ButtonProps = {
  style: ButtonStyles;
  onClick?: (evt: Event) => void;
  children: JSX.Element;
};

export const Button: Component<ButtonProps> = (props) => {
  const child = children(() => props.children);

  return (
    <button onClick={props.onClick} class={classNames(styles.btn, styles[props.style])}>
      {child()}
    </button>
  );
};
