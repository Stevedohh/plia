import { Component, JSX } from 'solid-js';

import { EditorHeader } from './Header/EditorHeader';

import styles from './styles.module.scss';

export const EditorLayout: Component<{ children: JSX.Element }> = (props) => {
  return (
    <>
      <EditorHeader />
      <div class={styles.editorLayout}>{props.children}</div>
    </>
  );
};
