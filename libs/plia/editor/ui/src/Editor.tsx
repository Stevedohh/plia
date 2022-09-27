import { Renderer } from './components/renderer/Renderer';
import { EditorFormSidebar } from './components/layout/RightSidebar/EditorFormSidebar';
import { PanelsSidebar } from './components/layout/PanelsSidebar/PanelsSidebar';
import { EditorDragDropProvider } from './contexts/EditorDragDropContext';
import { EditorLayout } from '~editor/ui/src/components/layout/EditorLayout';

export const EditorPage = () => (
  <EditorLayout>
    <EditorDragDropProvider>
      <PanelsSidebar />
      <Renderer isEdit />
      <EditorFormSidebar />
    </EditorDragDropProvider>
  </EditorLayout>
);

export const PreviewPage = () => (
  <EditorLayout>
    <Renderer isEdit={false} />
  </EditorLayout>
);
