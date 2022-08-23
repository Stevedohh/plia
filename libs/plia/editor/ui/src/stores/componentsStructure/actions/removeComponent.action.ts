import * as R from 'ramda';

import { Id, Structure } from '@plia/plia/types';

import { setComponentsStructure } from '../componentsStructure.store';

export const findAndRemove = (structChild, childId) => {
  if (!structChild?.children?.length) {
    return;
  }

  structChild.children.forEach((insideChild, idx) => {
    if (insideChild.id === childId) {
      structChild.children = R.remove(idx, 1, structChild.children);
    }

    findAndRemove(insideChild, childId);
  });
};

const removeComponent = (struct, id): Structure => {
  const copyStruct = JSON.parse(JSON.stringify(struct));

  findAndRemove(copyStruct, id);

  return copyStruct;
};

export const removeComponentAction = (id: Id) => {
  setComponentsStructure((struct) => removeComponent(struct, id));
};
