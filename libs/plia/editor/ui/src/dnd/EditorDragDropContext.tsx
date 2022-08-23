import { Accessor, Component, createContext, createSignal, JSX } from 'solid-js';
import { DragDropProvider, DragDropSensors } from '@thisbeyond/solid-dnd';

import { insertComponentAction } from '../stores/componentsStructure/actions';
import { DragComponentActions } from '../types/types';
import { moveComponentAction } from '../stores/componentsStructure/actions/moveComponent.action';

type EditorDragDropContextType = {
  isDraggable: Accessor<boolean>;
};

type EditorDragDropProviderProps = {
  children: JSX.Element;
};

export const EditorDragDropContext = createContext<EditorDragDropContextType>({
  isDraggable: null,
});

export const EditorDragDropProvider: Component<EditorDragDropProviderProps> = (props) => {
  const [isDraggable, setIsDraggable] = createSignal(false);

  const onDragEnd = ({ droppable, draggable }) => {
    if (droppable) {
      const { droppableId, droppableType } = droppable.data;
      const { componentName, action, componentId: draggableId } = draggable.data;

      if (action === DragComponentActions.INSERT) {
        insertComponentAction(droppableId, componentName, droppableType);
      } else if (action === DragComponentActions.MOVE) {
        moveComponentAction(droppableId, draggableId, droppableType);
      }
    }

    setIsDraggable(false);
  };

  const onDragStart = () => {
    setIsDraggable(true);
  };

  return (
    // @ts-ignore
    <DragDropProvider onDragEnd={onDragEnd} onDragStart={onDragStart}>
      <DragDropSensors />
      <EditorDragDropContext.Provider value={{ isDraggable }}>
        {props.children}
      </EditorDragDropContext.Provider>
    </DragDropProvider>
  );
};
