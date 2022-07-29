import { Component, JSX } from 'solid-js';

import { Id } from '@plia/plia/types';

import { EditableComponent } from '../wrappers/EditableComponent/EditableComponent';
import { openEditorForm } from '../../layout/RightSidebar/services/editorFormSidebar.service';
import { ComponentNames, EditorFormNames } from '../../../types/types';

export type ImageProps = {
  src: string;
  alt: string;
  id: Id;
  class: string;
  styles: JSX.CSSProperties;
};

export const Image: Component<ImageProps> = (props) => {
  const openImageFormSidebar = () => {
    openEditorForm({
      initialForm: EditorFormNames.PROPERTIES,
      componentId: props.id,
      componentName: ComponentNames.IMAGE,
      propertiesForm: {
        props: {
          src: props.src,
          alt: props.alt,
        },
      },
      stylesForm: {
        styles: props.styles,
        class: props.class,
      },
    });
  };

  return (
    <EditableComponent id={props.id} onEditClick={openImageFormSidebar}>
      <img src={props.src} alt={props.alt} class={props.class} />
    </EditableComponent>
  );
};
