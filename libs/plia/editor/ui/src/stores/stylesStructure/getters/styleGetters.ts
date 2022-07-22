import { stylesStructure } from '../stylesStructure.store';

export const getStylesByClassName = (className: string) =>
  stylesStructure.state.find((style) => style.className === className)?.cssProperties;
