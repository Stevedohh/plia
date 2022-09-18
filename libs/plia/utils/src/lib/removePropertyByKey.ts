export const removePropertyByKey = (
  obj: Record<string, unknown>,
  key: string,
): Record<string, unknown> => {
  const copyObject = JSON.parse(JSON.stringify(obj));
  delete copyObject[key];
  return copyObject;
};
