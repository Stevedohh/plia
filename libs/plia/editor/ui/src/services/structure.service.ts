import { createStore, produce } from 'solid-js/store';
import { Id, Structure } from '@plia/plia/types';
import { structureViewMock } from './tests/mocks/structure.mock';

export const getStructure = (): Structure => structureViewMock;

export const [structure, setStructure] = createStore<Structure>(getStructure());

const getComponentById = (struct: Structure, id: Id): Structure | null => {
  if (!struct?.children?.length) {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return struct.children.map((child) => (child.id === id ? child : getComponentById(child, id)))[0];
};

export const updateComponentProps = (struct, id, props): void => {
  if (!struct?.children?.length) {
    return;
  }

  struct.children.forEach((child) => {
    if (child.id === id) {
      child.props = { ...child.props, ...props };
    }

    updateComponentProps(child, id, props);
  });
};

export const updateComponentPropsById = (id: Id, props) => {
  setStructure(
    produce((struct) => {
      updateComponentProps(struct, id, props);
    })
  );
};
