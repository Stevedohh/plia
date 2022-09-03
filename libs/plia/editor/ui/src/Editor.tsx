import { Component } from 'solid-js';
import { Provider } from 'solid-redux-primitives';

import { Renderer } from './components/renderer/Renderer';
import { EditorFormSidebar } from './components/layout/RightSidebar/EditorFormSidebar';
import { PanelsSidebar } from './components/layout/PanelsSidebar/PanelsSidebar';
import { EditorDragDropProvider } from './contexts/EditorDragDropContext';
import { store } from './store';

import styles from './styles.module.scss';

export const Editor: Component = () => (
  <div class={styles.editorLayout}>
    {/* @ts-ignore */}
    <Provider store={store}>
      <EditorDragDropProvider>
        <PanelsSidebar />
        <div class={styles.body} id="editor-body">
          <Renderer />
        </div>
        <EditorFormSidebar />
      </EditorDragDropProvider>
    </Provider>
  </div>
);
