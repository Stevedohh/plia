import { Accessor, children, Component, createEffect, createMemo, JSX, Show } from 'solid-js';
import { Portal } from 'solid-js/web';
import { useService } from 'solid-services';
import { transformStyle } from '@thisbeyond/solid-dnd';

import { useHover } from '@plia/plia/hooks';
import { ComponentNames, Id } from '@plia/plia/types';

import { HoveredComponentService } from '~editor/ui/src/services/hoveredComponent.service';
import { FormsSidebarService } from '~editor/ui/src/services/formsSidebar.service';

import { SelectedComponentPanel } from './SelectedComponentPanel/SelectedComponentPanel';
import { DroppableAreas } from './DroppableAreas/DroppableAreas';
import { useComponentPosition } from './hooks/useComponentPosition';
import { useInactiveDroppable } from './hooks/useInactiveDroppable';

import styles from './styles.module.scss';

type EditableComponentProps = {
  id: Id;
  componentName: ComponentNames;
  children: JSX.Element;
};

export const EditableComponent: Component<EditableComponentProps> = (props) => {
  const component = children(() => props.children) as Accessor<HTMLElement>;

  const { getEditorForm } = useService(FormsSidebarService)();
  const { hoveredComponentId } = useService(HoveredComponentService)();
  const isComponentHovered = useHover(component());

  const { draggableComponent, setDraggableComponent, componentRect, dragY, dragX } =
    useComponentPosition({
      component,
      isComponentHovered,
    });

  const { inactiveDroppableIds } = useInactiveDroppable();

  const isComponentActive = createMemo(
    () => isComponentHovered() || hoveredComponentId() === props.id
  );
  const isComponentSelected = createMemo(() => props.id === getEditorForm()()?.componentId);

  createEffect(() => {
    if (draggableComponent().isActiveDraggable) {
      component().style.transform = transformStyle(draggableComponent().transform).transform;
      component().style.zIndex = '20';
    } else {
      component().style.removeProperty('transform');
      component().style.removeProperty('z-index');
    }
  });

  return (
    <>
      <Show when={isComponentActive() || isComponentSelected()}>
        <Portal mount={document.getElementById('workspace')}>
          <Show when={isComponentSelected()}>
            <div
              class={styles.editablePanel}
              style={{ transform: `translate(${dragX()}px, ${dragY()}px)` }}
            >
              <SelectedComponentPanel
                componentId={props.id}
                componentName={props.componentName}
                onDrag={setDraggableComponent}
              />
            </div>
          </Show>
          <div
            style={{
              width: `${componentRect()?.width}px`,
              height: `${componentRect()?.height}px`,
              transform: `translate(${dragX()}px, ${dragY()}px)`,
            }}
            class={styles.editableBlock}
          />
        </Portal>
      </Show>
      <DroppableAreas
        id={props.id}
        componentName={props.componentName}
        inactiveDroppableIds={inactiveDroppableIds}
        componentRect={componentRect}
      />
      {component()}
    </>
  );
};
