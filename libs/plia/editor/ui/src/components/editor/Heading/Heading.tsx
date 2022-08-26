import { useService } from 'solid-services';
import { Component, JSX } from 'solid-js';

import { ComponentNames, Id } from '@plia/plia/types';

import { EditorFormNames } from '~editor/ui/src/types';
import { useAppDispatch } from '~editor/ui/src/store';
import { asyncMagic } from '~editor/ui/src/tips-and-tricks/asyncMagic';
import { updateComponentProps } from '~editor/ui/src/store/componentsStructure/componentStructure.slice';
import { TextEditor } from '~editor/ui/src/components/controls/TextEditor/TextEditor';
import { FormsSidebarService } from '~editor/ui/src/services/formsSidebar.service';

import { EditableComponent } from '../wrappers/EditableComponent/EditableComponent';
import { TextEditorToolbarKeys } from '../../controls/TextEditor/schemas/TextEditorToolbar.scema';

export type HeadingProps = {
  text: string;
  id: Id;
  class: string;
  styles: JSX.CSSProperties;
};

export const Heading: Component<HeadingProps> = (props) => {
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
      componentName: ComponentNames.HEADING,
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
          TextEditorToolbarKeys.ALIGN_LEFT,
          TextEditorToolbarKeys.ALIGN_CENTER,
          TextEditorToolbarKeys.ALIGN_RIGHT,
          TextEditorToolbarKeys.ALIGN_JUSTIFY,
          TextEditorToolbarKeys.HEADING,
        ]}
      />
    </EditableComponent>
  );
};
