import usePopper from 'solid-popper';
import { useEditorJSON } from 'solid-tiptap';
import { Component, createMemo, createSignal, For, Show } from 'solid-js';
import { Editor } from '@tiptap/core';

import { useBoolean } from '@plia/plia/hooks';

import { ToolbarControl } from '../ToolbarControl/ToolbarControl';
import { TextEditorToolbarItem } from '../schemas/TextEditorToolbar.scema';

import styles from './styles.module.scss';

type HeadingToolbarControlProps = {
  toolbarItems: Array<TextEditorToolbarItem>;
  editor: Editor;
};

export const HeadingToolbarControl: Component<HeadingToolbarControlProps> = (props) => {
  const { toggle: togglePopup, value: isPopup, setFalse: closePopup } = useBoolean();
  const editorJson = useEditorJSON(() => props.editor);

  const [anchor, setAnchor] = createSignal(null);
  const [popper, setPopper] = createSignal(null);
  const currentHeadingLevel = createMemo(
    () => editorJson().content.find((item) => item.type === 'heading')?.attrs?.level
  );

  usePopper(anchor, popper, {
    placement: 'bottom',
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  return (
    <div class={styles.expandableToolbarControl}>
      <button
        ref={setAnchor}
        onClick={() => {
          props.editor.chain().focus();
          togglePopup();
        }}
        class={styles.expandableToolbarControlBtn}
      >
        H{currentHeadingLevel()}
      </button>
      <Show when={isPopup()}>
        <div class={styles.expandableToolbarControlContent} ref={setPopper}>
          <For each={props.toolbarItems}>
            {(toolbarItem) => (
              <ToolbarControl
                key={toolbarItem.key}
                editor={props.editor}
                onClick={() => {
                  closePopup();
                  toolbarItem.handler();
                }}
                isActive={toolbarItem.isActive}
              >
                {toolbarItem.icon}
              </ToolbarControl>
            )}
          </For>
        </div>
      </Show>
    </div>
  );
};
