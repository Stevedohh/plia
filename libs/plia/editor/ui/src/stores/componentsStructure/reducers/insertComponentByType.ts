import * as R from 'ramda';
import { produce } from 'solid-js/store';

import { setComponentsStructure } from '../componentsStructure.store';
import { BlockDroppableTypes, ComponentNames, InsertDirections } from '../../../types/types';

const getNewComponent = (componentName: ComponentNames) => {
  const newComponent = {
    component: componentName,
    id: Date.now().toString(),
    className: `c${Date.now().toString()}`,
  };

  if (componentName === ComponentNames.IMAGE) {
    return {
      ...newComponent,
      props: {
        alt: 'placeholder',
        src: 'https://i.stack.imgur.com/y9DpT.jpg',
      },
      styles: {
        width: '400px',
      },
    };
  }

  return newComponent;
};

const getNewChildrenComponentsByDirection = ({ children, direction, idx, componentName }) =>
  R.insert(idx + direction, getNewComponent(componentName), children);

const insertCenterComponent = (child, componentName, idx) => {
  if (child.children?.length >= 0) {
    child.children = getNewChildrenComponentsByDirection({
      direction: InsertDirections.TOP,
      componentName,
      idx,
      children: child.children,
    });
  } else {
    child.children = [getNewComponent(componentName)];
  }
};

const insertComponentByDirection = (struct, componentName, idx, direction) => {
  struct.children = getNewChildrenComponentsByDirection({
    direction,
    componentName,
    idx,
    children: struct.children,
  });
};

const insertStructureComponentByType = (struct, id, componentName, type) => {
  if (!struct?.children?.length) {
    return;
  }

  struct.children.forEach((child, idx) => {
    if (child.id === id) {
      if (type === BlockDroppableTypes.TOP) {
        insertComponentByDirection(struct, componentName, idx, InsertDirections.TOP);
      } else if (type === BlockDroppableTypes.BOTTOM) {
        insertComponentByDirection(struct, componentName, idx, InsertDirections.BOTTOM);
      } else if (type === BlockDroppableTypes.CENTER) {
        insertCenterComponent(child, componentName, idx);
      }
    }

    insertStructureComponentByType(child, id, componentName, type);
  });
};

export const insertComponentByType = (id, componentName, type) => {
  setComponentsStructure(
    produce((struct) => {
      if (struct.id === id) {
        insertCenterComponent(struct, componentName, 0);
      } else {
        insertStructureComponentByType(struct, id, componentName, type);
      }
    })
  );
};
