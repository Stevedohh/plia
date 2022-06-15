import { Id, Structure } from '@plia/plia/types';
import { componentsStructure } from '../componentsStructure.store';

const getComponentById = (struct: Structure, id: Id): Structure | null => {
  if (!struct?.children?.length) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return struct.children.map((child) => (child.id === id ? child : getComponentById(child, id)))[0];
};

export const getComponentsStructure = () => componentsStructure;
