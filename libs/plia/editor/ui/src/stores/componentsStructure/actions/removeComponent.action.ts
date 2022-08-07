import { produce } from 'solid-js/store';
import * as R from 'ramda';

import { Id, Structure } from '@plia/plia/types';

import { setComponentsStructure } from '../componentsStructure.store';

const removeComponent = (struct, id): Structure => {
  const copyStruct = JSON.parse(JSON.stringify(struct));

  const findAndRemove = (child, childId) => {
    if (!child?.children?.length) {
      return;
    }

    child.children.forEach((insideChild, idx) => {
      if (insideChild.id === childId) {
        child.children = R.remove(idx, 1, child.children);
      }

      findAndRemove(insideChild, childId);
    });
  };

  findAndRemove(copyStruct, id);

  return copyStruct;
};

export const removeComponentAction = (id: Id) => {
  setComponentsStructure((struct) => removeComponent(struct, id));
};
