import * as R from 'ramda';

import { BODY, DroppableDirections } from '~editor/ui/src/types';

const insertInCenter = (struct, componentToInsert, idx) => {
  if (struct?.children?.length > 0) {
    struct.children = R.insert(idx, componentToInsert, struct.children);
  } else {
    struct.children = [componentToInsert];
  }
};

export const insertComponent = (struct, componentId, componentToInsert, direction) => {
  if (componentId === BODY) {
    insertInCenter(struct, componentToInsert, 0);
    return;
  }

  if (!struct?.children?.length) {
    return;
  }

  struct.children?.forEach((child, idx) => {
    if (child.id === componentId) {
      if (direction === DroppableDirections.CENTER) {
        insertInCenter(child, componentToInsert, idx);
      } else if (direction === DroppableDirections.CENTER_LAST) {
        insertInCenter(child, componentToInsert, child.children.length);
      } else {
        struct.children = R.insert(idx + direction, componentToInsert, struct.children);
      }
    } else {
      insertComponent(child, componentId, componentToInsert, direction);
    }
  });
};

export const insertComponentReducer = (struct, droppableComponentId, component, direction) => {
  insertComponent(struct, droppableComponentId, component, direction);
};
