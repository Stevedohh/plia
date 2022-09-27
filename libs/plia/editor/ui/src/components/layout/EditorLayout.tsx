import { Component, JSX, onCleanup } from 'solid-js';

import { EditorHeader } from './Header/EditorHeader';

import { useAppDispatch } from '~editor/ui/src/store';
import { clearComponentsStructure } from '~editor/ui/src/store/componentsStructure/componentStructure.slice';

import styles from './styles.module.scss';

export const EditorLayout: Component<{ children: JSX.Element }> = (props) => {
  const dispatch = useAppDispatch();

  onCleanup(() => {
    dispatch(clearComponentsStructure());
  });

  return (
    <>
      <EditorHeader />
      <div class={styles.editorLayout}>{props.children}</div>
    </>
  );
};
