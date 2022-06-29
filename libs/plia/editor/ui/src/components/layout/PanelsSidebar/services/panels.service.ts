import { Component, createSignal } from 'solid-js';

type Panel = {
  component: Component;
  props?: unknown;
};

const [panel, setPanel] = createSignal<Panel>(null);

export const openPanel = ({ component, props }: Panel) => {
  setPanel({
    component,
    props,
  });
};

export const closePanel = () => {
  setPanel(null);
};

export const getPanel = (): Panel => panel();
