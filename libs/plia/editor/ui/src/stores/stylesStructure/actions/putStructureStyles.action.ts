import { JSX } from 'solid-js';

import { StylesStructure } from '@plia/plia/types';

import { setStylesStructure } from '../stylesStructure.store';

const updateStructStyles = (
  stylesStruct: StylesStructure,
  className: string,
  styles: JSX.CSSProperties
) => {
  const idx = stylesStruct.findIndex((struct) => struct.className === className);

  if (idx >= 0) {
    return stylesStruct.map((styleItem, stylesIdx) => {
      if (stylesIdx === idx) {
        return { ...styleItem, cssProperties: styles };
      }

      return styleItem;
    });
  }

  return [...stylesStruct, { className, cssProperties: styles }];
};

export const putStructureStylesAction = (className: string, styles: JSX.CSSProperties) => {
  setStylesStructure('state', (prevState) => updateStructStyles(prevState, className, styles));
};
