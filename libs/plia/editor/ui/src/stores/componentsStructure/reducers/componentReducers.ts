import { produce } from 'solid-js/store';

import { Id } from '@plia/plia/types';

import { setComponentsStructure } from '../componentsStructure.store';

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

export const putComponentPropsById = (id: Id, props) => {
  setComponentsStructure(
    produce((struct) => {
      updateComponentProps(struct, id, props);
    })
  );
};
