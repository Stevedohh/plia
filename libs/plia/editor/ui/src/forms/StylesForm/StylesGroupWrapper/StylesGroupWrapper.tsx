import { children, Component, JSXElement, Show } from 'solid-js';
import classNames from 'classnames';

import { useBoolean } from '@plia/plia/hooks';

import styles from './styles.module.scss';

type SidebarFormWrapperProps = {
  label: string;
  children: Element | JSXElement;
  isContentOpened?: boolean;
};

export const StylesGroupWrapper: Component<SidebarFormWrapperProps> = (props) => {
  const { value: isContentOpened, toggle: toggleIsContentOpened } = useBoolean(
    props.isContentOpened ?? true
  );
  const child = children(() => props.children);

  return (
    <div class={styles.sidebarFormWrapper}>
      <span
        class={classNames(styles.sidebarFormWrapperLabel, {
          [styles.sidebarFormWrapperLabelActive]: !isContentOpened(),
        })}
        onClick={toggleIsContentOpened}
      >
        {props.label}
      </span>
      <Show when={isContentOpened()}>
        <div class={styles.sidebarFormWrapperContent}>{child()}</div>
      </Show>
    </div>
  );
};
