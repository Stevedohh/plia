import { Id, Structure } from '@plia/plia/types';

import { getComponentById } from './getComponentById';

export const getChildComponentsId = (structure: Structure, id: Id): Array<string | Id> => {
  const ids = [id];
  const component = getComponentById(structure, id);

  const rec = (struct) => {
    if (!structure?.children?.length) {
      return;
    }

    struct?.children?.forEach((child) => {
      ids.push(child.id);
      rec(child);
    });
  };

  rec(component);

  return ids;
};
