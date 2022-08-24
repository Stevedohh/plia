import { Component, createEffect, For, onMount, Show } from 'solid-js';
import { useService } from 'solid-services';
import { Dynamic } from 'solid-js/web';

import { Structure } from '@plia/plia/types';

import { RendererMap } from './rendererMap';
import { extractStylesStructure } from '../../helpers/extractStylesStructure';
import { useAppDispatch, useAppSelector } from '../../store';
import { insertStyles } from '../../store/stylesStructure/stylesStructure.slice';
import { StylesViewService } from '../../services/stylesView.service';

export const Renderer: Component = () => {
  const stylesService = useService(StylesViewService)();

  const componentStructure = useAppSelector((state) => state.componentStructure.struct);
  const stylesStructure = useAppSelector((state) => state.stylesStructure.struct);

  const dispatch = useAppDispatch();

  const insertStyleTag = () => {
    const style = document.createElement('style');
    document.head.append(style);
  };

  onMount(() => {
    insertStyleTag();

    const extractedStylesStructure = extractStylesStructure(componentStructure());
    extractedStylesStructure.forEach((styles) => {
      dispatch(
        insertStyles({
          className: styles.className,
          styles: styles.cssProperties,
        })
      );
    });
  });

  createEffect(() => {
    stylesService.updateStylesView(stylesStructure());
  });

  const renderer = (structure: Structure, isLast) => (
    <Dynamic
      component={RendererMap.get(structure.component)}
      id={structure.id}
      class={structure.className}
      isLastChildren={isLast}
      {...(structure?.props || {})}
    >
      <Show when={structure?.children?.length > 0}>
        <For each={structure.children}>
          {(child, idx) => renderer(child, structure.children?.length === idx() + 1)}
        </For>
      </Show>
    </Dynamic>
  );

  return renderer(componentStructure(), false);
};
