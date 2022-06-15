import { Structure, StylesStructure } from '@plia/plia/types';

export const extractStylesStructure = (structure: Structure): StylesStructure => {
  const stylesStruct: StylesStructure = [];

  const structureTraverse = (struct: Structure) => {
    struct.children?.forEach((item) => {
      if (item?.className && item?.styles) {
        stylesStruct.push({ className: item.className, cssProperties: item.styles });
      }

      if (item?.children?.length) {
        structureTraverse(item);
      }
    });
  };

  structureTraverse(structure);

  return stylesStruct;
};
