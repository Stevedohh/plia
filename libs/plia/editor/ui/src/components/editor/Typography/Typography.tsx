import { Component, createSignal, JSX } from 'solid-js';

import { Id } from '@plia/plia/types';

import { putComponentPropsAction } from '../../../stores/componentsStructure/actions';
import { openEditorForm } from '../../layout/RightSidebar/services/editorFormSidebar.service';
import { ComponentNames, EditorFormNames } from '../../../types/types';

export type TypographyProps = {
  text: string;
  id: Id;
  class: string;
  styles: JSX.CSSProperties;
};

export const Typography: Component<TypographyProps> = (props) => {
  const [editorValue, setEditorValue] = createSignal<string>(props.text);

  const handleFocusOut = () => {
    putComponentPropsAction(props.id, { text: editorValue() });
  };

  const onEditorChange = (evt) => {
    const { value } = evt.target;
    setEditorValue(value);
  };

  const openTypographyFormSidebar = () => {
    openEditorForm({
      initialForm: EditorFormNames.PROPERTIES,
      componentId: props.id,
      componentName: ComponentNames.TYPOGRAPHY,
      propertiesForm: {
        props: {
          text: props.text,
        },
      },
      stylesForm: {
        styles: props.styles,
        class: props.class,
      },
    });
  };

  return (
    <div>
      <input
        onChange={onEditorChange}
        onFocusIn={openTypographyFormSidebar}
        value={editorValue()}
        onFocusOut={handleFocusOut}
      />
    </div>
  );
};
