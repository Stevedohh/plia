import { children, Component, createEffect, createSignal, For, JSX } from 'solid-js';

import styles from './styles.module.scss';

type BasicHeaderProps = {
  children: JSX.Element;
};

const HeaderLeft: Component<BasicHeaderProps> = (props) => {
  const content = children(() => props.children);

  return <div class={styles.left}>{content()}</div>;
};

const HeaderRight: Component<BasicHeaderProps> = (props) => {
  const content = children(() => props.children);

  return <div class={styles.right}>{content()}</div>;
};

const HeaderCenter: Component<BasicHeaderProps> = (props) => {
  const content = children(() => props.children);

  return <div class={styles.center}>{content()}</div>;
};

type HeaderComponent = Component<{
  children: JSX.Element;
}> & {
  Left: typeof HeaderLeft;
  Center: typeof HeaderCenter;
  Right: typeof HeaderRight;
};

export const Header: HeaderComponent = (props) => {
  const content = children(() => props.children);

  return (
    <div class={styles.header}>
      <div class={styles.container}>{content()}</div>
    </div>
  );
};

Header.Left = HeaderLeft;
Header.Center = HeaderCenter;
Header.Right = HeaderRight;
