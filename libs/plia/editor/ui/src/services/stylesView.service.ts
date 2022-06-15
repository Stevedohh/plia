import { JSX } from 'solid-js';
import styleToCss from 'style-object-to-css-string';

import { addPxToStyles } from '@plia/plia/utils';

const getStyleSheet = (): CSSStyleSheet => document.styleSheets[document.styleSheets.length - 1];

const extractClassNameFromCssText = (cssText: string): string | null => {
  if (!cssText) {
    return null;
  }

  return cssText.split(' ')[0].substring(1);
};

const deleteRuleByClassName = (styleSheet: CSSStyleSheet, className: string) => {
  for (let idx = 0; idx < styleSheet.cssRules.length; idx++) {
    const rule = styleSheet.cssRules.item(idx);
    const ruleClassName = extractClassNameFromCssText(rule.cssText);

    if (ruleClassName === className) {
      styleSheet.deleteRule(idx);
    }
  }
};

const convertStyles = (styles: JSX.CSSProperties) => {
  const lineBreaksRexExp = /(\n)/gm;

  if (styles) {
    return styleToCss({ ...addPxToStyles(styles) }).replace(lineBreaksRexExp, '');
  }

  return null;
};

export const updateStyleView = (className: string, styles: JSX.CSSProperties) => {
  const styleSheet = getStyleSheet();

  const convertedStyles = convertStyles(styles);

  if (convertedStyles) {
    deleteRuleByClassName(styleSheet, className);
    styleSheet.insertRule(`.${className} {${convertedStyles}}`);
  }
};

export const updateStylesView = (structureStyles) => {
  structureStyles.forEach((struct) => {
    updateStyleView(struct.className, struct.cssProperties);
  });
};
