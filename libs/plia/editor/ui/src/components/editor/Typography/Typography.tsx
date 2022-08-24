import { useService } from 'solid-services';
import { Component, JSX } from 'solid-js';

import { Id } from '@plia/plia/types';

import { updateComponentProps } from '~editor/ui/src/store/componentsStructure/componentStructure.slice';
import { FormsSidebarService } from '~editor/ui/src/services/formsSidebar.service';
import { asyncMagic } from '~editor/ui/src/tips-and-tricks/asyncMagic';
import { useAppDispatch } from '~editor/ui/src/store';
import { ComponentNames, EditorFormNames } from '~editor/ui/src/types';

import { TextEditor } from '../../controls/TextEditor/TextEditor';
import { EditableComponent } from '../wrappers/EditableComponent/EditableComponent';
import { TextEditorToolbarKeys } from '../../controls/TextEditor/TextEditorToolbar/TextEditorToolbar.scema';

export type TypographyProps = {
  text: string;
  id: Id;
  class: string;
  styles: JSX.CSSProperties;
};

export const Typography: Component<TypographyProps> = (props) => {
  const dispatch = useAppDispatch();
  const formSidebarService = useService(FormsSidebarService)();

  const handleFocusOut = (value) => {
    asyncMagic(() => {
      dispatch(
        updateComponentProps({
          componentId: props.id,
          props: {
            text: value,
          },
        })
      );
    });
  };

  const openTypographyForm = () =>
    formSidebarService.openEditorForm({
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
    <EditableComponent
      id={props.id}
      onComponentClick={openTypographyForm}
      componentName={ComponentNames.TYPOGRAPHY}
    >
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
