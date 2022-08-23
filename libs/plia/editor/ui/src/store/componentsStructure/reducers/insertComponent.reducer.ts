import * as R from 'ramda';

import { DroppableDirections } from '~editor/ui/src/types';

import { getNewComponent } from '../helpers/getNewComponent';

const insertInCenter = (struct, componentToInsert, idx) => {
  if (struct?.children?.length > 0) {
    struct.children = R.insert(idx, componentToInsert, struct.children);
  } else {
    struct.children = [componentToInsert];
  }
};

export const insertComponent = (struct, componentId, componentToInsert, direction) => {
  if (!struct?.children?.length) {
    return;
  }

  if (componentId === 'root') {
    insertInCenter(struct, componentToInsert, 0);
    return;
  }

  struct.children?.forEach((child, idx) => {
    if (child.id === componentId) {
      if (direction === DroppableDirections.CENTER) {
        insertInCenter(child, componentToInsert, idx);
      } else {
        struct.children = R.insert(idx + direction, componentToInsert, struct.children);
      }
    } else {
      insertComponent(child, componentId, componentToInsert, direction);
    }
  });
};

export const insertComponentByNameReducer = (
  struct,
  droppableComponentId,
  componentName,
  direction
) => {
  if (!struct?.children?.length) {
    return;
  }

  const component = getNewComponent(componentName);

  insertComponent(struct, droppableComponentId, component, direction);
};
