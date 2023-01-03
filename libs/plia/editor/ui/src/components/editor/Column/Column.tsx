import { children, Component, JSX } from 'solid-js';
import classNames from 'classnames';

import { Id } from '@plia/plia/types';

type ColumnProps = {
  class: string;
  children: JSX.Element;
  id: Id;
};

export const Column: Component<ColumnProps> = (props) => {
  const child = children(() => props.children);

  return <div class={classNames(props.class, 'columnComponent')}>{child()}</div>;
};
