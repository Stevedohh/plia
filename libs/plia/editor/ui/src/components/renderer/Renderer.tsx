import { Component, createEffect, For, JSX, onMount, Show } from 'solid-js';
import { useService } from 'solid-services';
import { Dynamic } from 'solid-js/web';
import { useParams } from '@solidjs/router';

import { removePropertyByKey } from '@plia/plia/utils';
import { Structure, Component as PliaComponent } from '@plia/plia/types';

import { Page } from '~editor/ui/src/store/types';
import { fetchComponentsStructure } from '~editor/ui/src/store/componentsStructure/componentStructure.slice';

import { RendererMap } from './rendererMap';
import { extractStylesStructure } from '../../helpers/extractStylesStructure';
import { useAppDispatch, useAppSelector } from '../../store';
import { insertStyles } from '../../store/stylesStructure/stylesStructure.slice';
import { StylesViewService } from '../../services/stylesView.service';
import { EditableComponent } from '../editor/wrappers/EditableComponent/EditableComponent';

import styles from './styles.module.scss';

type RendererProps = {
  isEdit: boolean;
};

export const Renderer: Component<RendererProps> = (props) => {
  const stylesService = useService(StylesViewService)();
  const dispatch = useAppDispatch();
  const params = useParams();

  const componentsStructure = useAppSelector((state) => state.componentStructure.struct);
  const stylesStructure = useAppSelector((state) => state.stylesStructure.struct);

  const insertStyleTag = () => {
    const style = document.createElement('style');
    document.head.append(style);
  };

  const dispatchStylesFromComponentsStruct = (componentsStruct: Structure) => {
    const extractedStylesStructure = extractStylesStructure(componentsStruct);
    extractedStylesStructure.forEach((style) => {
      dispatch(
        insertStyles({
          className: style.className,
          styles: style.cssProperties,
        }),
      );
    });
  };

  onMount(() => {
    insertStyleTag();
    if (!componentsStructure()) {
      dispatch(fetchComponentsStructure({ pageId: params.pageId, siteId: params.siteId })).then(
        (action) => {
          const payload = action.payload as Page;
          dispatchStylesFromComponentsStruct(payload?.components_structure);
        },
      );
    }
  });

  createEffect(() => {
    stylesService.updateStylesView(stylesStructure());
  });

  const renderer = (structure: Structure, rec?: (structure: Structure) => JSX.Element) => (
    <Dynamic
      component={RendererMap.get(structure.component)}
      id={structure.id}
      class={structure.className}
      {...(structure?.props || {})}
    >
      <Show when={structure?.children?.length > 0} keyed>
        <For each={structure.children}>{(child) => (rec ? rec(child) : renderer(child))}</For>
      </Show>
    </Dynamic>
  );

  const editRenderer = (structure: Structure) => (
    <EditableComponent
      id={structure.id}
      componentName={structure.component}
      componentStruct={removePropertyByKey(structure, 'children') as PliaComponent}
    >
      {renderer(structure, editRenderer)}
    </EditableComponent>
  );

  return (
    <div class={styles.body} id="renderer">
      <Show when={componentsStructure()} keyed>
        {props.isEdit ? editRenderer(componentsStructure()) : renderer(componentsStructure())}
      </Show>
    </div>
  );
};
