export const putComponentStylesReducer = (struct, id, styles): void => {
  if (!struct?.children?.length) {
    return;
  }

  struct.children.forEach((child) => {
    if (child.id === id) {
      child.styles = { ...child.props, ...styles };
    }

    putComponentStylesReducer(child, id, styles);
  });
};
