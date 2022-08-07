import {
  children,
  Component,
  createEffect,
  createMemo,
  createSignal,
  JSX,
  onMount,
  Show,
} from 'solid-js';
import classNames from 'classnames';

import { useHover } from '@plia/plia/hooks';
import { Id } from '@plia/plia/types';

import { getEditorForm } from '../../../layout/RightSidebar/services/editorFormSidebar.service';
import { SelectedComponentPanel } from './SelectedComponentPanel/SelectedComponentPanel';

import styles from './styles.module.scss';

type EditableComponentProps = {
  id: Id;
  children: JSX.Element;
  class?: string;
  onComponentClick: () => void;
};

export const EditableComponent: Component<EditableComponentProps> = (props) => {
  const [isHovered, setIsHovered] = createSignal<boolean>(false);

  const isRoot = createMemo(() => props.id === 'root');
  const isComponentSelected = createMemo(() => props.id === getEditorForm()()?.componentId);

  const component = children(() => props.children);

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
      class={classNames(styles.editableBlock, props.class, {
        [styles.editableBlockHovered]: isHovered() || isComponentSelected(),
      })}
      ref={componentRef}
      onClick={onComponentClick}
    >
      <Show when={isComponentSelected()}>
        <SelectedComponentPanel componentId={props.id} />
      </Show>
      {component()}
    </div>
  );
};
