import { Editor, EditorPage, PreviewPage } from './Editor';

export { Editor, EditorPage, PreviewPage };

declare module 'solid-js' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface Directives {
      droppableTop: boolean;
      droppableCenter: boolean;
      droppableBottom: boolean;
      draggableComponent: boolean;
      form: boolean;
      field: boolean;
    }
  }
}
