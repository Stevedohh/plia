import { children, Component, JSX } from 'solid-js';

type LayoutProps = {
  children: JSX.Element;
};

export const Layout: Component<LayoutProps> = (props) => {
  const child = children(() => props.children);

  return <div>{child()}</div>;
};
