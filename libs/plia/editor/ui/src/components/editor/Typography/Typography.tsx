import { Component, JSX } from 'solid-js';

import { Id } from '@plia/plia/types';

import { putComponentPropsAction } from '../../../stores/componentsStructure/actions';
import { openEditorForm } from '../../layout/RightSidebar/services/editorFormSidebar.service';
import { ComponentNames, EditorFormNames } from '../../../types/types';
import { TextEditor } from '../../controls/TextEditor/TextEditor';
import { asyncMagic } from '../../../tips-and-tricks/asyncMagic';
import { TextEditorToolbarKeys } from '../../controls/TextEditor/TextEditorToolbar/TextEditorToolbar.scema';

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

  return (
    <div>
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
    </div>
  );
};
