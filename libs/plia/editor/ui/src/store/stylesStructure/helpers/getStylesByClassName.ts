import { StylesStructure } from '@plia/plia/types';

export const getStylesByClassName = (stylesStructure: StylesStructure, className: string) =>
  stylesStructure.find((style) => style.className === className)?.cssProperties;
