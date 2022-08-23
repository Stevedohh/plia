import { Component, JSX } from 'solid-js';

import { Id } from '@plia/plia/types';

import { ComponentNames, EditorFormNames } from '~editor/ui/src/types';
import { openEditorForm } from '~editor/ui/src/components/layout/RightSidebar/services/editorFormSidebar.service';

import { EditableComponent } from '../wrappers/EditableComponent/EditableComponent';

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
    <EditableComponent
      id={props.id}
      onComponentClick={openImageFormSidebar}
      componentName={ComponentNames.IMAGE}
    >
      <img src={props.src} alt={props.alt} class={props.class} />
    </EditableComponent>
  );
};
