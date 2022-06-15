import { stylesStructure } from '../stylesStructure.store';

export const getStylesByClassName = (className: string) =>
  stylesStructure.find((style) => style.className === className)?.cssProperties;

export const getStylesStructure = () => stylesStructure;
