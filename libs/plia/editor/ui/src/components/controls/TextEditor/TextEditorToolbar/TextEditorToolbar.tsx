import { Component, createMemo, For } from 'solid-js';
import { Editor } from '@tiptap/core';

import { getTextEditorToolbarSchema, TextEditorToolbarKeys } from './TextEditorToolbar.scema';
import { ToolbarControl } from '../ToolbarControl/ToolbarControl';

import styles from './styles.module.scss';

type ToolbarProps = {
  editor: Editor;
  toolbarOptions?: Array<TextEditorToolbarKeys>;
};

export const TextEditorToolbar: Component<ToolbarProps> = (props) => {
  const schema = getTextEditorToolbarSchema(props.editor);

  const toolbarOptions = createMemo(() => {
    if (!props.toolbarOptions) {
      return schema;
    }

    return schema
      .filter((item) => props.toolbarOptions.includes(item.key))
      .sort((a, b) => props.toolbarOptions.indexOf(a.key) - props.toolbarOptions.indexOf(b.key));
  });

  return (
    <div class={styles.toolbar}>
      <For each={toolbarOptions()}>
        {(option) => (
          <ToolbarControl
            key={option.key}
            editor={props.editor}
            onClick={option.handler}
            isActive={option.isActive}
          >
            {option.icon}
          </ToolbarControl>
        )}
      </For>
    </div>
  );
};
