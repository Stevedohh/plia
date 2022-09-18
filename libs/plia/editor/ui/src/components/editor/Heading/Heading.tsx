import { Component, JSX } from 'solid-js';

import { Id } from '@plia/plia/types';

import { useAppDispatch } from '~editor/ui/src/store';
import { asyncMagic } from '~editor/ui/src/tips-and-tricks/asyncMagic';
import { updateComponentProps } from '~editor/ui/src/store/componentsStructure/componentStructure.slice';
import { TextEditor } from '~editor/ui/src/components/controls/TextEditor/TextEditor';

import { TextEditorToolbarKeys } from '../../controls/TextEditor/schemas/TextEditorToolbar.scema';

export type HeadingProps = {
  text: string;
  id: Id;
  class: string;
  styles: JSX.CSSProperties;
};

export const Heading: Component<HeadingProps> = (props) => {
  const dispatch = useAppDispatch();

  const handleFocusOut = (value) => {
    asyncMagic(() => {
      dispatch(
        updateComponentProps({
          componentId: props.id,
          props: {
            text: value,
          },
        }),
      );
    });
  };

  return (
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
  );
};
