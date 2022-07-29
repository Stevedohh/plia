import { Component } from 'solid-js';
import { createEditor, EditorContent } from 'tiptap-solid';
import { cond } from 'ramda';

export const TypographyForm: Component = () => {
  const editor = createEditor({
    extensions: [],
    content: 'Hello world!',
  });

  const a = 3;

  return <EditorContent editor={editor()} />;
};
