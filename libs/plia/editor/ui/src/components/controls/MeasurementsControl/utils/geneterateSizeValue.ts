export const generateSizeValue = (number: number, measurement: string) => {
  if (!number || measurement === 'auto') {
    return 'auto';
  }

  return `${number}${measurement}`;
};
