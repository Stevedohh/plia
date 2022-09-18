import { Component } from 'solid-js';
import { Provider } from 'solid-redux-primitives';
import { Outlet } from '@solidjs/router';

import { Renderer } from './components/renderer/Renderer';
import { EditorFormSidebar } from './components/layout/RightSidebar/EditorFormSidebar';
import { PanelsSidebar } from './components/layout/PanelsSidebar/PanelsSidebar';
import { EditorDragDropProvider } from './contexts/EditorDragDropContext';
import { Header } from './components/layout/Header/Header';

import { store } from './store';

import styles from './styles.module.scss';

export const EditorPage = () => (
  <EditorDragDropProvider>
    <PanelsSidebar />
    <Renderer isEdit />
    <EditorFormSidebar />
  </EditorDragDropProvider>
);

export const PreviewPage = () => <Renderer isEdit={false} />;

export const Editor: Component = () => (
  <>
    <Header />
    <div class={styles.editorLayout}>
      {/* @ts-ignore */}
      <Provider store={store}>
        <Outlet />
      </Provider>
    </div>
  </>
);
