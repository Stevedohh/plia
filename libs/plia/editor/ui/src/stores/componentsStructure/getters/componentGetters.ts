import { Id, Structure } from '@plia/plia/types';

import { componentsStructure } from '../componentsStructure.store';

export const getComponentById = (struct: Structure, id: Id): Structure | null => {
  let component = null;

  const findComponent = (structure) => {
    if (!structure?.children?.length) {
      return;
    }

    structure.children?.forEach((child) => {
      if (child.id === id) {
        component = child;
      } else {
        findComponent(child);
      }
    });
  };

  findComponent(struct);

  return component;
};

export const getComponentsStructure = () => componentsStructure;
