import { Placement } from '@popperjs/core/lib/enums';
import { children, Component, createSignal, JSX, mergeProps, Show } from 'solid-js';
import usePopper from 'solid-popper';

import { useBoolean } from '../../hooks';

import styles from './styles.module.scss';

type PopoverProps = {
  head: JSX.Element;
  children: JSX.Element;
  offset?: [number, number];
  placement?: Placement;
};

export const Popover: Component<PopoverProps> = (ops) => {
  const props = mergeProps({ offset: [0, 10], placement: 'auto' }, ops);

  const content = children(() => props.children);
  const head = children(() => props.head);

  const [anchor, setAnchor] = createSignal(null);
  const [popper, setPopper] = createSignal(null);

  const { toggle, value } = useBoolean();

  usePopper(anchor, popper, {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: props.offset,
        },
      },
    ],
  });

  return (
    <>
      <div ref={setAnchor} class={styles.popoverHead} onClick={toggle}>
        {head()}
      </div>
      <Show when={value()} keyed>
        <div ref={setPopper} class={styles.popoverAnchor}>
          {content()}
        </div>
      </Show>
    </>
  );
};
