import { JSX } from 'solid-js';
import { produce } from 'solid-js/store';

import { StylesStructure } from '@plia/plia/types';

import { setStylesStructure } from '../stylesStructure.store';

const updateStructStyles = (
  stylesStruct: StylesStructure,
  className: string,
  styles: JSX.CSSProperties
) => {
  const idx = stylesStruct.findIndex((struct) => struct.className === className);

  if (idx >= 0) {
    stylesStruct[idx].cssProperties = styles;
  } else {
    stylesStruct.push({ className, cssProperties: styles });
  }
};

export const putStructureStyles = (className: string, styles: JSX.CSSProperties) => {
  setStylesStructure(
    produce((stylesStruct) => {
      updateStructStyles(stylesStruct, className, styles);
    })
  );
};
