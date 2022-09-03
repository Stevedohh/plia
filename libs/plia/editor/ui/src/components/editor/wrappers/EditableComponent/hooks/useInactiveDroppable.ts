import { Accessor, createEffect, createSignal, useContext } from 'solid-js';

import { Id } from '@plia/plia/types';

import { useAppSelector } from '~editor/ui/src/store';
import { EditorDragDropContext } from '~editor/ui/src/contexts/EditorDragDropContext';
import { getChildComponentsId } from '~editor/ui/src/store/componentsStructure/helpers/getChildComponentsId';

type UseInactiveDroppableOutput = {
  inactiveDroppableIds: Accessor<Array<string | Id>>;
};

export const useInactiveDroppable = (): UseInactiveDroppableOutput => {
  const { isDraggable, draggableComponentId } = useContext(EditorDragDropContext);
  const [inactiveDroppableIds, setInactiveDroppableIds] = createSignal<Array<string | Id>>([]);

  const componentsStructure = useAppSelector((rootStore) => rootStore.componentStructure.struct);

  createEffect(() => {
    if (isDraggable()) {
      setInactiveDroppableIds(getChildComponentsId(componentsStructure(), draggableComponentId()));
    } else {
      setInactiveDroppableIds([]);
    }
  });

  return {
    inactiveDroppableIds,
  };
};
