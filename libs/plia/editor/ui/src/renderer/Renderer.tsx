import { Component, For, Show } from 'solid-js';
import { Dynamic } from 'solid-js/web';

import { Structure } from '@plia/plia/types';

import { RendererMap } from './rendererMap';

type RenderProps = {
    structure: Structure;
}

export const Renderer: Component<RenderProps> = (props) => {
  const renderer = (structure: Structure) => (
    <Dynamic component={RendererMap.get(structure.component)} {...(structure?.props || {})} id={structure.id}>
      <Show when={structure?.children?.length > 0}>
        <For each={structure.children}>
          {(child) => renderer(child)}
        </For>
      </Show>
    </Dynamic>
  );

  return renderer(props.structure);
};
