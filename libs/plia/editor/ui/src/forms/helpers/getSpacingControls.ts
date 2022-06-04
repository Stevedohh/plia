import { SpacingControls } from '../../types/types';

export const getSpacingControls = (name, formData): SpacingControls => {
  if (!formData || !name) {
    return {} as SpacingControls;
  }

  return {
    top: {
      name: `${name}-top`,
      value: formData()[`${name}-top`],
    },
    right: {
      name: `${name}-right`,
      value: formData()[`${name}-right`],
    },
    bottom: {
      name: `${name}-bottom`,
      value: formData()[`${name}-bottom`],
    },
    left: {
      name: `${name}-left`,
      value: formData()[`${name}-left`],
    },
  };
};
