import { Accessor, Component, createSignal } from 'solid-js';

type Panel = {
  component: Component;
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
    openPanel({ component, props }: Panel) {
      setPanel({
        component,
        props,
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
