import { children, Component, JSX } from 'solid-js';
import classNames from 'classnames';

import { Id } from '@plia/plia/types';

type BlockProps = {
  class: string;
  children: JSX.Element;
  id: Id;
};

export const Block: Component<BlockProps> = (props) => {
  const child = children(() => props.children);

  return <div class={classNames(props.class, 'blockComponent')}>{child()}</div>;
};
