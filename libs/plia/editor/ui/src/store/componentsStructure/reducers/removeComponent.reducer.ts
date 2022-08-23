import * as R from 'ramda';

import { Structure } from '@plia/plia/types';

export const findAndRemoveComponent = (structChild, childId) => {
  if (!structChild?.children?.length) {
    return;
  }

  structChild.children.forEach((insideChild, idx) => {
    if (insideChild.id === childId) {
      structChild.children = R.remove(idx, 1, structChild.children);
    }

    findAndRemoveComponent(insideChild, childId);
  });
};

export const removeComponentReducer = (struct, id): Structure => {
  const copyStruct = JSON.parse(JSON.stringify(struct));

  findAndRemoveComponent(copyStruct, id);

  return copyStruct;
};
