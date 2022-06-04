import { JSX } from 'solid-js';

const pxProperties = [
  'padding',
  'margin',
];

export const addPxToStyles = (styles: JSX.CSSProperties) => {
  if (!styles) {
    return {};
  }

  return Object.entries(styles).reduce((acc, style) => {
    const isPropertyToAddPx = pxProperties.some((property) => style[0].includes(property));

    if (isPropertyToAddPx && style[1]) {
      return {
        ...acc,
        [style[0]]: `${style[1]}px`,
      };
    }

    return { ...acc, [style[0]]: style[1] };
  }, {});
};

export const removePxFromStyles = (styles: JSX.CSSProperties) => {
  if (!styles) {
    return {};
  }

  return Object.entries(styles).reduce((acc, style) => {
    const isPxProperty = pxProperties.some((property) => style[0].includes(property));

    if (isPxProperty && style[1]) {
      return {
        ...acc,
        [style[0]]: Number(style[1].replace('px', '')),
      };
    }

    return { ...acc, [style[0]]: style[1] };
  }, {});
};
