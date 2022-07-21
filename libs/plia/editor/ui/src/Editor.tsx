import { Component } from 'solid-js';

import { Renderer } from './renderer/Renderer';
import { EditorFormSidebar } from './components/layout/RightSidebar/EditorFormSidebar';
import { PanelsSidebar } from './components/layout/PanelsSidebar/PanelsSidebar';
import { getComponentsStructure } from './stores/componentsStructure/getters/componentGetters';
import { EditorDragDropProvider } from './dnd/EditorDragDropContext';

import styles from './styles.module.scss';

export const Editor: Component = () => {
  const structure = getComponentsStructure();

  return (
    <div class={styles.editorLayout}>
      <EditorDragDropProvider>
        <PanelsSidebar />
        <div class={styles.body}>
          <Renderer structure={structure} />
        </div>
        <EditorFormSidebar />
      </EditorDragDropProvider>
    </div>
  );
};
