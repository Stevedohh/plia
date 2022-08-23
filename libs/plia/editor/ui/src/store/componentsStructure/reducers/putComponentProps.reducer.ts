export const putComponentPropsReducer = (struct, id, props): void => {
  if (!struct?.children?.length) {
    return;
  }

  struct.children.forEach((child) => {
    if (child.id === id) {
      child.props = { ...child.props, ...props };
    }

    putComponentPropsReducer(child, id, props);
  });
};
