import { JSX } from 'solid-js';

const pxProperties = [
  'padding',
  'margin',
];

const formatPxStylesByStrategy = (styles: JSX.CSSProperties, strategy: (value: string) => string | number) => {
  if (!styles) {
    return {};
  }

  return Object.entries(styles).reduce((acc, style) => {
    const isPropertyToAddPx = pxProperties.some((property) => style[0].includes(property));

    if (isPropertyToAddPx && style[1]) {
      return {
        ...acc,
        [style[0]]: strategy(style[1]),
      };
    }

    return { ...acc, [style[0]]: style[1] };
  }, {});
};

export const addPxToStyles = (styles: JSX.CSSProperties) => {
  const addStrategy = (value) => `${value}px`;

  return formatPxStylesByStrategy(styles, addStrategy);
};

export const removePxFromStyles = (styles: JSX.CSSProperties) => {
  const removeStrategy = (value) => Number(value.replace('px', ''));

  return formatPxStylesByStrategy(styles, removeStrategy);
};
