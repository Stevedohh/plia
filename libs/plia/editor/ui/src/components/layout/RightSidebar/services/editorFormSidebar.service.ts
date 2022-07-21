import { createSignal, JSX } from 'solid-js';

import { Id } from '@plia/plia/types';

import { ComponentNames, EditorFormNames } from '../../../../types/types';

export type EditorFormProps = {
  componentId: Id;
  componentName: ComponentNames;
  stylesForm: {
    styles: JSX.CSSProperties;
    class: string;
  };
  propertiesForm: {
    props: unknown;
  };
  initialForm?: EditorFormNames;
};

const [editorForm, setEditorForm] = createSignal<EditorFormProps>(null);

export const closeEditorForm = () => {
  setEditorForm(null);
};

export const openEditorForm = (editorFormProps: EditorFormProps) => {
  closeEditorForm();
  setEditorForm(editorFormProps);
};

export const getEditorForm = () => editorForm;
