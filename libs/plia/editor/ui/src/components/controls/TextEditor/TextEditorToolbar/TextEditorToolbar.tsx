import { Component, createMemo, For, Show } from 'solid-js';
import { Editor } from '@tiptap/core';

import {
  getTextEditorToolbarSchema,
  TextEditorToolbarKeys,
} from '../schemas/TextEditorToolbar.scema';
import { ToolbarControl } from '../ToolbarControl/ToolbarControl';
import { getHeadingToolbarSchema } from '../schemas/HeadingToolbar.schema';
import { HeadingToolbarControl } from '../HeadingToolbarControl/HeadingToolbarControl';

import styles from './styles.module.scss';

type ToolbarProps = {
  editor: Editor;
  toolbarOptions?: Array<TextEditorToolbarKeys>;
};

export const TextEditorToolbar: Component<ToolbarProps> = (props) => {
  const schema = getTextEditorToolbarSchema(props.editor);
  const headingSchema = getHeadingToolbarSchema(props.editor);

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
      <Show when={props.toolbarOptions?.includes(TextEditorToolbarKeys.HEADING)}>
        <HeadingToolbarControl toolbarItems={headingSchema} editor={props.editor} />
      </Show>
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
