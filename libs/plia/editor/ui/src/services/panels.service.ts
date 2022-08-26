import { Accessor, Component, createSignal } from 'solid-js';

export enum ComponentPanelsNames {
  ADD = 'ADD',
  TREE = 'TREE',
}

type Panel = {
  component: Component;
  name: ComponentPanelsNames;
  props?: unknown;
};

type PanelsServiceOutput = {
  openPanel: (panel: Panel) => void;
  closePanel: () => void;
  getPanel: () => Accessor<Panel>;
};

export const PanelsService = (): PanelsServiceOutput => {
  const [panel, setPanel] = createSignal<Panel>(null);

  return {
    openPanel({ component, props, name }: Panel) {
      setPanel({
        component,
        props,
        name,
      });
    },

    closePanel() {
      setPanel(null);
    },

    getPanel() {
      return panel;
    },
  };
};
