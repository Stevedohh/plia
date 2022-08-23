import { children, Component, JSX } from 'solid-js';
import classNames from 'classnames';

import { Id } from '@plia/plia/types';

import { openEditorForm } from '../../layout/RightSidebar/services/editorFormSidebar.service';
import { DroppableBlock } from '../wrappers/DroppableBlock/DroppableBlock';
import { EditableComponent } from '../wrappers/EditableComponent/EditableComponent';
import { ComponentNames } from '../../../types/types';

import styles from './styles.module.scss';

type BlockProps = {
  styles: JSX.CSSProperties;
  class: string;
  children: JSX.Element;
  isLastChildren: boolean;
  id: Id;
};

export const Block: Component<BlockProps> = (props) => {
  const child = children(() => props.children);

  const openBlockFormSidebar = () => {
    openEditorForm({
      componentId: props.id,
      componentName: ComponentNames.BLOCK,
      propertiesForm: {
        props: null,
      },
      stylesForm: {
        styles: props.styles,
        class: props.class,
      },
    });
  };

  return (
    <EditableComponent
      id={props.id}
      onComponentClick={openBlockFormSidebar}
      componentName={ComponentNames.BLOCK}
    >
      <DroppableBlock id={props.id} isLastChildren={props.isLastChildren}>
        <div class={classNames(styles.block, props.class)}>{child()}</div>
      </DroppableBlock>
    </EditableComponent>
  );
};
