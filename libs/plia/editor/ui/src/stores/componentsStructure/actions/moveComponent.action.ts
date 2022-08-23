import { produce } from 'solid-js/store';

import { getComponentById } from '../getters/componentGetters';
import { findAndRemove } from './removeComponent.action';
import { insertComponent } from './insertComponent.action';
import { setComponentsStructure } from '../componentsStructure.store';

const moveComponent = (struct, droppableComponentId, draggableComponentId, direction) => {
  if (droppableComponentId === draggableComponentId) {
    return;
  }

  const draggableComponent = getComponentById(struct, draggableComponentId);

  findAndRemove(struct, draggableComponentId);
  insertComponent(struct, droppableComponentId, draggableComponent, direction);
};

export const moveComponentAction = (droppableComponentId, draggableComponentId, direction) => {
  setComponentsStructure(
    produce((struct) => {
      moveComponent(struct, droppableComponentId, draggableComponentId, direction);
    })
  );
};
