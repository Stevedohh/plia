import { Component, JSX } from 'solid-js';

import { Id } from '@plia/plia/types';

import { putComponentPropsAction } from '../../../stores/componentsStructure/actions';
import { TextEditor } from '../../controls/TextEditor/TextEditor';
import { asyncMagic } from '../../../tips-and-tricks/asyncMagic';
import { TextEditorToolbarKeys } from '../../controls/TextEditor/TextEditorToolbar/TextEditorToolbar.scema';
import { EditableComponent } from '../wrappers/EditableComponent/EditableComponent';
import { openEditorForm } from '../../layout/RightSidebar/services/editorFormSidebar.service';
import { ComponentNames, EditorFormNames } from '../../../types/types';

export type TypographyProps = {
  text: string;
  id: Id;
  class: string;
  styles: JSX.CSSProperties;
};

export const Typography: Component<TypographyProps> = (props) => {
  const handleFocusOut = (value) => {
    asyncMagic(() => {
      putComponentPropsAction(props.id, { text: value });
    });
  };

  const openTypographyForm = () =>
    openEditorForm({
      componentId: props.id,
      componentName: ComponentNames.TYPOGRAPHY,
      stylesForm: {
        styles: props.styles,
        class: props.class,
      },
      propertiesForm: null,
      initialForm: EditorFormNames.STYLES,
    });

  return (
    <EditableComponent id={props.id} onComponentClick={openTypographyForm} componentName={ComponentNames.TYPOGRAPHY}>
      <TextEditor
        content={props.text}
        onTextEditorChange={handleFocusOut}
        toolbarOptions={[
          TextEditorToolbarKeys.BOLD,
          TextEditorToolbarKeys.ITALIC,
          TextEditorToolbarKeys.UNDERLINE,
          TextEditorToolbarKeys.STRIKE,
          TextEditorToolbarKeys.SUPERSCRIPT,
          TextEditorToolbarKeys.SUBSCRIPT,
          TextEditorToolbarKeys.ALIGN_LEFT,
          TextEditorToolbarKeys.ALIGN_CENTER,
          TextEditorToolbarKeys.ALIGN_RIGHT,
          TextEditorToolbarKeys.ALIGN_JUSTIFY,
        ]}
      />
    </EditableComponent>
  );
};
