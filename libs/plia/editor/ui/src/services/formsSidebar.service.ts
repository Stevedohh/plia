import { Accessor, createSignal, JSX } from 'solid-js';

import { Id } from '@plia/plia/types';

import { ComponentNames, EditorFormNames } from '~editor/ui/src/types';

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

type FormsSidebarServiceOutput = {
  closeEditorForm: () => void;
  openEditorForm: (editorFormProps: EditorFormProps) => void;
  getEditorForm: () => Accessor<EditorFormProps>;
};

export const FormsSidebarService = (): FormsSidebarServiceOutput => {
  const [editorForm, setEditorForm] = createSignal<EditorFormProps>(null);

  return {
    closeEditorForm() {
      setEditorForm(null);
    },

    openEditorForm(editorFormProps: EditorFormProps) {
      this.closeEditorForm();
      setEditorForm(editorFormProps);
    },

    getEditorForm() {
      return editorForm;
    },
  };
};
