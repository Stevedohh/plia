import { Accessor, Component, createContext, createSignal, JSX } from 'solid-js';
import { DragDropProvider, DragDropSensors } from '@thisbeyond/solid-dnd';

import { insertComponentByType } from '../stores/componentsStructure/reducers';

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

  const onDragEnd = ({ droppable }) => {
    if (droppable) {
      const [id, type] = droppable.id.split('.');
      insertComponentByType(id, 'Block', type);
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