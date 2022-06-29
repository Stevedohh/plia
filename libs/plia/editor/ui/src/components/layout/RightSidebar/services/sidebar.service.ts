import { Component, createSignal } from 'solid-js';

type Sidebar = {
  component: Component;
  props?: unknown;
}

const [sidebar, setSidebar] = createSignal<Sidebar>(null);

export const openSidebar = ({ component, props }: Sidebar) => {
  setSidebar({
    component,
    props,
  });
};

export const closeSidebar = () => {
  setSidebar(null);
};

export const getSidebar = () => sidebar;
