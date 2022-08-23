import { getComponentById } from '../helpers/getComponentById';
import { findAndRemoveComponent } from './removeComponent.reducer';
import { insertComponent } from './insertComponent.reducer';

export const moveComponentReducer = (
  struct,
  droppableComponentId,
  draggableComponentId,
  direction
) => {
  if (droppableComponentId === draggableComponentId) {
    return;
  }

  const draggableComponent = getComponentById(struct, draggableComponentId);

  findAndRemoveComponent(struct, draggableComponentId);
  insertComponent(struct, droppableComponentId, draggableComponent, direction);
};
