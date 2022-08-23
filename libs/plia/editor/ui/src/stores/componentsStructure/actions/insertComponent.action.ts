import { produce } from 'solid-js/store';
import * as R from 'ramda';

import { setComponentsStructure } from '../componentsStructure.store';
import { getNewComponent } from '../getNewComponent';
import { DroppableTypes } from '../../../types/types';

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
      if (direction === DroppableTypes.CENTER) {
        insertInCenter(child, componentToInsert, idx);
      } else {
        struct.children = R.insert(idx + direction, componentToInsert, struct.children);
      }
    } else {
      insertComponent(child, componentId, componentToInsert, direction);
    }
  });
};

const insertStructureComponentByType = (struct, droppableComponentId, componentName, direction) => {
  if (!struct?.children?.length) {
    return;
  }

  const component = getNewComponent(componentName);

  insertComponent(struct, droppableComponentId, component, direction);
};

export const insertComponentAction = (droppableComponentId, componentName, direction) => {
  setComponentsStructure(
    produce((struct) =>
      insertStructureComponentByType(struct, droppableComponentId, componentName, direction)
    )
  );
};
