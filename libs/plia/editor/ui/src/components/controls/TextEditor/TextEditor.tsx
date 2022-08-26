import { Component, createEffect, Show } from 'solid-js';
import { createTiptapEditor, useEditorHTML, useEditorIsFocused } from 'solid-tiptap';
import { Toolbar } from 'solid-headless';

import StarterKit from '@tiptap/starter-kit';
import BubbleMenu from '@tiptap/extension-bubble-menu';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import FontFamily from '@tiptap/extension-font-family';
import Subscript from '@tiptap/extension-subscript';
import Superscript from '@tiptap/extension-superscript';
import TextAlign from '@tiptap/extension-text-align';
import FontSize from 'tiptap-extension-font-size';

import { TextEditorToolbarKeys } from './schemas/TextEditorToolbar.scema';
import { TextEditorToolbar } from './TextEditorToolbar/TextEditorToolbar';

import styles from './styles.module.scss';

type TextEditorProps = {
  content: string;
  onTextEditorChange?: (html: string) => void;
  toolbarOptions?: Array<TextEditorToolbarKeys>;
};

export const TextEditor: Component<TextEditorProps> = (props) => {
  let menuRef!: HTMLDivElement;
  let containerRef!: HTMLDivElement;

  const editor = createTiptapEditor({
    get element() {
      return containerRef;
    },
    get extensions() {
      return [
        StarterKit,
        Underline,
        Link,
        FontFamily,
        Subscript,
        Superscript,
        TextAlign.configure({
          types: ['heading', 'paragraph'],
        }),
        FontSize,
        BubbleMenu.configure({
          element: menuRef,
          tippyOptions: {
            interactive: true,
            appendTo: () => document.body,
          },
        }),
      ];
    },
    editorProps: {
      attributes: {
        class: styles.textEditor,
      },
    },
    autofocus: false,
    content: props.content,
  });

  const html = useEditorHTML(editor);
  const isFocused = useEditorIsFocused(editor);

  createEffect(() => {
    if (!isFocused()) {
      props.onTextEditorChange(html());
    }
  });

  return (
    <div>
      <Toolbar ref={menuRef} horizontal>
        <Show when={editor()}>
          {(instance) => (
            <TextEditorToolbar editor={instance} toolbarOptions={props.toolbarOptions} />
          )}
        </Show>
      </Toolbar>
      <div ref={containerRef} />
    </div>
  );
};
