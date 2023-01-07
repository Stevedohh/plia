import { children, Component, JSX, Show } from 'solid-js';

import styles from './styles.module.scss';

type AbstractModalProps = {
  title?: string;
  footer?: JSX.Element;
  children: JSX.Element;
};

export const AbstractModal: Component<AbstractModalProps> = (props) => {
  const content = children(() => props.children);
  const footer = children(() => props.footer);

  return (
    <div class={styles.abstractModal}>
      <Show when={props.title} keyed>
        <div class={styles.abstractModalHead}>{props.title}</div>
      </Show>
      <div class={styles.abstractModalContent}>{content()}</div>
      <Show when={props.footer} keyed>
        <div class={styles.abstractModalFooter}>{footer()}</div>
      </Show>
    </div>
  );
};
