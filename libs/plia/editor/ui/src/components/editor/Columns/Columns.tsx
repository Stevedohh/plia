import { children, Component, JSX } from 'solid-js';
import classNames from 'classnames';

import { Id } from '@plia/plia/types';

type ColumnsProps = {
  class: string;
  children: JSX.Element;
  id: Id;
};

export const Columns: Component<ColumnsProps> = (props) => {
  const child = children(() => props.children);

  return <div class={classNames(props.class, 'columnsComponent')}>{child()}</div>;
};
