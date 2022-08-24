import {
  children,
  Component,
  createEffect,
  createMemo,
  createSignal,
  JSX,
  onMount,
} from 'solid-js';
import classNames from 'classnames';
import { nanoid } from 'nanoid';
import { useService } from 'solid-services';
import { createDraggable, transformStyle } from '@thisbeyond/solid-dnd';

import { useHover } from '@plia/plia/hooks';
import { Id } from '@plia/plia/types';

import { HoveredComponentService } from '~editor/ui/src/services/hoveredComponent.service';
import { FormsSidebarService } from '~editor/ui/src/services/formsSidebar.service';
import { ComponentNames, DragComponentActions } from '~editor/ui/src/types';

import { SelectedComponentPanel } from './SelectedComponentPanel/SelectedComponentPanel';

import styles from './styles.module.scss';

type EditableComponentProps = {
  id: Id;
  componentName: ComponentNames;
  children: JSX.Element;
  class?: string;
  onComponentClick: () => void;
};

export const EditableComponent: Component<EditableComponentProps> = (props) => {
  const formSidebarService = useService(FormsSidebarService)();
  const { hoveredComponentId } = useService(HoveredComponentService)();

  const [isHovered, setIsHovered] = createSignal<boolean>(false);
  const isRoot = createMemo(() => props.id === 'root');

  const component = children(() => props.children);

  const draggableComponent = createDraggable(nanoid(), {
    componentId: props.id,
    componentName: props.componentName,
    action: DragComponentActions.MOVE,
  });

  const isComponentSelected = createMemo(
    () => props.id === formSidebarService.getEditorForm()()?.componentId
  );
  const isComponentActive = createMemo(
    () =>
      ((isHovered() || isComponentSelected()) && !draggableComponent.isActiveDraggable) ||
      hoveredComponentId() === props.id
  );

  let componentRef;

  onMount(() => {
    const isHover = useHover(componentRef);

    createEffect(() => {
      setIsHovered(isHover());
    });
  });

  const onComponentClick = () => {
    if (isHovered() && !isRoot()) {
      props.onComponentClick();
    }
  };

  return (
    <div
      ref={componentRef}
      style={transformStyle(draggableComponent.transform)}
      class={classNames(styles.editableBlock, props.class, {
        [styles.editableBlockHovered]: isComponentActive(),
      })}
      onClick={onComponentClick}
    >
      <div class={classNames(styles.panelHide, { [styles.panelShow]: isComponentSelected() })}>
        <SelectedComponentPanel componentId={props.id} draggable={draggableComponent} />
      </div>
      {component()}
    </div>
  );
};
