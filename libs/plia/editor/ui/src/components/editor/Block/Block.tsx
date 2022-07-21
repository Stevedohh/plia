import { children, Component, JSX } from 'solid-js';
import classNames from 'classnames';

import { Id } from '@plia/plia/types';

import { openEditorForm } from '../../layout/RightSidebar/services/editorFormSidebar.service';
import { DroppableBlock } from '../DroppableBlock/DroppableBlock';
import { EditableComponent } from '../EditableComponent/EditableComponent';

import styles from './styles.module.scss';
import { ComponentNames } from '../../../types/types';

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
    <DroppableBlock id={props.id} isLastChildren={props.isLastChildren}>
      <EditableComponent id={props.id} onEditClick={openBlockFormSidebar}>
        <div class={classNames(styles.block, props.class)}>{child()}</div>
      </EditableComponent>
    </DroppableBlock>
  );
};
