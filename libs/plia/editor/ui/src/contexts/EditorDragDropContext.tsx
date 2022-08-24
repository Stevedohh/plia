import { Accessor, Component, createContext, createSignal, JSX } from 'solid-js';
import { DragDropProvider, DragDropSensors } from '@thisbeyond/solid-dnd';

import {
  insertComponent,
  moveComponent,
} from '~editor/ui/src/store/componentsStructure/componentStructure.slice';

import { DragComponentActions } from '../types';
import { useAppDispatch } from '../store';
import { getNewComponent } from '~editor/ui/src/store/componentsStructure/helpers/getNewComponent';
import { insertStyles } from '~editor/ui/src/store/stylesStructure/stylesStructure.slice';

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

  const dispatch = useAppDispatch();

  const onDragEnd = ({ droppable, draggable }) => {
    if (droppable) {
      const { droppableId, droppableDirection } = droppable.data;
      const { componentName, action, componentId: draggableId } = draggable.data;

      if (action === DragComponentActions.INSERT) {
        const newComponent = getNewComponent(componentName);

        dispatch(
          insertComponent({
            component: newComponent,
            direction: droppableDirection,
            droppableComponentId: droppableId,
          })
        );

        dispatch(
          insertStyles({
            className: newComponent.className,
            styles: newComponent.styles,
          })
        );
      } else if (action === DragComponentActions.MOVE) {
        dispatch(
          moveComponent({
            draggableComponentId: draggableId,
            droppableComponentId: droppableId,
            direction: droppableDirection,
          })
        );
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
