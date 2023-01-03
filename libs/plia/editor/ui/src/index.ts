import { EditorPage, PreviewPage } from './Editor';
import { store } from '~editor/ui/src/store';
import { clearComponentsState } from '~editor/ui/src/store/componentsStructure/helpers/clearComponentsState';

export { EditorPage, PreviewPage, store, clearComponentsState };

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
