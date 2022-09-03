import { useService } from 'solid-services';
import { Component, JSX } from 'solid-js';

import { Id, ComponentNames } from '@plia/plia/types';

import { EditorFormNames } from '~editor/ui/src/types';
import { FormsSidebarService } from '~editor/ui/src/services/formsSidebar.service';
import { ImageLoadingService } from '~editor/ui/src/services/imageLoaded.service';

import { EditableComponent } from '../wrappers/EditableComponent/EditableComponent';

export type ImageProps = {
  src: string;
  alt: string;
  id: Id;
  class: string;
  styles: JSX.CSSProperties;
};

export const Image: Component<ImageProps> = (props) => {
  const formSidebarService = useService(FormsSidebarService);
  const { setIsImageLoaded } = useService(ImageLoadingService)();

  const openImageFormSidebar = (evt) => {
    evt.stopPropagation();
    formSidebarService().openEditorForm({
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
    <EditableComponent id={props.id} componentName={ComponentNames.IMAGE}>
      <img
        src={props.src}
        alt={props.alt}
        class={props.class}
        onLoad={() => {
          setIsImageLoaded(props.id);
        }}
        onClick={openImageFormSidebar}
      />
    </EditableComponent>
  );
};
