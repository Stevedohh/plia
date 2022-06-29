import { Component, createSignal } from 'solid-js';

import { Id } from '@plia/plia/types';
import { putComponentPropsById } from '../../../stores/componentsStructure/reducers';

export type TypographyProps = {
  text: string;
  id: Id;
};

export const Typography: Component<TypographyProps> = (props) => {
  const [editorValue, setEditorValue] = createSignal<string>(props.text);

  const handleFocusOut = () => {
    putComponentPropsById(props.id, { text: editorValue() });
  };

  return (
    <div>
      <input onChange={setEditorValue} value={editorValue()} onFocusOut={handleFocusOut} />
    </div>
  );
};
