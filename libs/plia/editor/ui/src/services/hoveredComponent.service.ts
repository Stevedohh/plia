import { Accessor, createSignal, Setter } from 'solid-js';

import { Id } from '@plia/plia/types';

type HoveredComponentServiceOutput = {
  hoveredComponentId: Accessor<Id>;
  setHoveredComponentId: Setter<Id>;
};

export const HoveredComponentService = (): HoveredComponentServiceOutput => {
  const [hoveredComponentId, setHoveredComponentId] = createSignal<Id>(null);

  return {
    hoveredComponentId,
    setHoveredComponentId,
  };
};
