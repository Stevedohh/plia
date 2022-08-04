import { Component, JSX } from 'solid-js';
import { createEditorTransaction } from 'solid-tiptap';
import { Editor } from '@tiptap/core';
import classNames from 'classnames';

import styles from './styles.module.scss';

type ToolbarControlProps = {
  key: string;
  editor: Editor;
  children: JSX.Element;
  onClick: () => void;
  title?: string;
  class?: string;
  isActive?: (editor: Editor) => boolean;
};

export const ToolbarControl: Component<ToolbarControlProps> = (props) => {
  const isControlActive = createEditorTransaction(
    () => props.editor,
    (instance) => {
      if (props.isActive) {
        return props.isActive(instance);
      }
      return instance.isActive(props.key);
    }
  );

  return (
    <button
      onClick={props.onClick}
      title={props.title}
      class={classNames(styles.control, { [styles.controlActive]: isControlActive() })}
    >
      {props.children}
    </button>
  );
};
