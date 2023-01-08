import { children, Component, JSX } from 'solid-js';
import classNames from 'classnames';

import styles from './styles.module.scss';

export enum ButtonStyles {
  PRIMARY = 'btnPrimary',
  SECONDARY = 'btnSecondary',
  BORDERED = 'btnBordered',
}

export enum ButtonSizes {
  MD = 'btnMedium',
}

type ButtonProps = {
  style: ButtonStyles;
  children: JSX.Element;
  size?: ButtonSizes;
  class?: string;
  type?: 'button' | 'submit';
  onClick?: (evt: Event) => void;
};

export const Button: Component<ButtonProps> = (props) => {
  const child = children(() => props.children);

  return (
    <button
      type={props.type ?? 'button'}
      onClick={props.onClick}
      class={classNames(styles.btn, styles[props.style], styles[props.size], props.class)}
    >
      {child()}
    </button>
  );
};
